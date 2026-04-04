"use client";

import { useEffect, useRef, RefObject } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePositionRef(containerRef?: RefObject<HTMLDivElement | null>) {
  const mousePosition = useRef<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mousePosition.current = {
          x: e.clientX - rect.left - rect.width / 2,
          y: e.clientY - rect.top - rect.height / 2,
        };
      } else {
        mousePosition.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        if (containerRef?.current) {
          const rect = containerRef.current.getBoundingClientRect();
          mousePosition.current = {
            x: e.touches[0].clientX - rect.left - rect.width / 2,
            y: e.touches[0].clientY - rect.top - rect.height / 2,
          };
        } else {
          mousePosition.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
          };
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [containerRef]);

  return mousePosition;
}
