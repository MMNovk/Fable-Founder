"use client";

import React, {
  useEffect,
  useRef,
  ReactNode,
  useCallback,
} from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref";

interface FloatingProps {
  children: ReactNode;
  className?: string;
  sensitivity?: number;
  easingFactor?: number;
}

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  depth?: number;
}

export function FloatingElement({
  children,
  className = "",
  depth = 1,
}: FloatingElementProps) {
  return (
    <div className={className} data-floating-depth={depth}>
      {children}
    </div>
  );
}

export default function Floating({
  children,
  className = "",
  sensitivity = 1,
  easingFactor = 0.05,
}: FloatingProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number>(0);
  const positionsRef = useRef<Map<HTMLElement, { x: number; y: number }>>(
    new Map()
  );
  const mousePosition = useMousePositionRef();
  const [scope, animate] = useAnimate<HTMLDivElement>();

  useEffect(() => {
    if (!containerRef.current) return;
    const elements = containerRef.current.querySelectorAll("[data-floating-depth]");
    if (elements.length > 0) {
      animate(
        "[data-floating-depth]",
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.8, delay: stagger(0.15) }
      );
    }
  }, [animate]);

  const updatePositions = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = mousePosition.current.x - centerX;
    const mouseY = mousePosition.current.y - centerY;

    const elements =
      containerRef.current.querySelectorAll<HTMLElement>(
        "[data-floating-depth]"
      );

    elements.forEach((el) => {
      const depth = parseFloat(el.dataset.floatingDepth || "1");
      const targetX = mouseX * depth * sensitivity * 0.01;
      const targetY = mouseY * depth * sensitivity * 0.01;

      const current = positionsRef.current.get(el) || { x: 0, y: 0 };
      const newX = current.x + (targetX - current.x) * easingFactor;
      const newY = current.y + (targetY - current.y) * easingFactor;

      positionsRef.current.set(el, { x: newX, y: newY });
      el.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
    });

    frameRef.current = requestAnimationFrame(updatePositions);
  }, [sensitivity, easingFactor, mousePosition]);

  useEffect(() => {
    frameRef.current = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(frameRef.current);
  }, [updatePositions]);

  return (
    <div
      ref={(node) => {
        containerRef.current = node;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (scope as any).current = node;
      }}
      className={className}
    >
      {children}
    </div>
  );
}
