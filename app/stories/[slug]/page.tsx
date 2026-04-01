import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";

// Placeholder story data — will be replaced with CMS/DB later
const stories: Record<
  string,
  {
    name: string;
    dates: string;
    location: string;
    portrait: string;
    paragraphs: string[];
    pullQuotes: string[];
  }
> = {
  "harold-kim": {
    name: "Harold Kim",
    dates: "1931 — 2019",
    location: "Busan, Korea → San Francisco → Oakland",
    portrait:
      "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=1200&h=600&fit=crop&auto=format&q=80",
    paragraphs: [
      "Harold Kim left Busan on a cargo ship in the spring of 1962. He was thirty-one years old, newly married, and carrying everything he owned in a canvas bag. His mother had pressed a photograph of herself into his hand at the dock — the only image he would have of her for the next fourteen years. Beside it, folded into a square and tucked inside his jacket, was a slip of paper bearing the address of a distant cousin in San Francisco, a man he had never met.",
      "The crossing took nineteen days. Harold spent most of them on deck, watching the Pacific stretch out in every direction until the horizon dissolved into fog. He spoke no English beyond a handful of words he had memorized from a phrasebook his wife had given him. He practiced them quietly, mouthing the syllables into the salt air: hello, thank you, I am looking for work.",
      "San Francisco in 1962 was not the city he had imagined. It was colder, louder, more indifferent than the postcards had suggested. His cousin's apartment was a single room above a laundry on Geary Street. Harold slept on the floor for three months before he found work at a garment factory south of Market. He pressed shirts for twelve hours a day and sent half his wages home.",
      "Over the years, Harold built a life from discipline and stubbornness. He opened a small dry-cleaning business in Oakland in 1971, raised three children, buried his wife in 2003, and continued working behind the counter until his hands would no longer allow it. He was eighty-four when he finally retired.",
      "When asked what he was most proud of, Harold would always say the same thing: that his children never had to sleep on anyone's floor. He kept his mother's photograph in his coat pocket until the day he died. Some things you carry because they carry you.",
      "Harold Kim passed away on a Tuesday morning in October 2019, in the house on 35th Avenue that he had owned for forty-six years. His granddaughter was holding his hand. The photograph was in his pocket.",
    ],
    pullQuotes: [
      "I carried two things off the boat in San Francisco: my mother's photograph and the address of a man I had never met.",
      "Some things you carry because they carry you.",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = stories[slug];
  return {
    title: story
      ? `${story.name} — Fable & Founder`
      : "Story — Fable & Founder",
    description: story
      ? `The life story of ${story.name}. ${story.location}.`
      : "A preserved life story.",
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories[slug];

  if (!story) {
    return (
      <>
        <Nav />
        <main className="min-h-screen flex items-center justify-center px-6 py-32">
          <div className="text-center">
            <h1 className="font-display font-light text-text-primary text-4xl mb-4">
              Story not found
            </h1>
            <Link
              href="/"
              className="font-body text-[11px] font-normal tracking-[0.25em] uppercase text-accent border-b border-accent/40 pb-1"
            >
              Return Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen">
        {/* Hero portrait */}
        <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={story.portrait}
            alt={story.name}
            className="w-full h-full object-cover grayscale sepia brightness-75 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto px-6 -mt-24 relative z-10 text-center mb-16">
          <h1
            className="font-display font-light text-text-primary mb-3"
            style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
          >
            {story.name}
          </h1>
          <p className="font-body text-[12px] font-normal tracking-[0.2em] uppercase text-accent mb-2">
            {story.dates}
          </p>
          <p className="font-body text-[13px] font-light text-text-secondary">
            {story.location}
          </p>
          <div className="w-16 h-px bg-accent/40 mx-auto mt-8" />
        </div>

        {/* Story body */}
        <div className="max-w-3xl mx-auto px-6 pb-24">
          {story.paragraphs.map((para, i) => (
            <div key={i}>
              <p className="font-display text-[18px] md:text-[20px] font-light text-text-primary leading-[2.0] mb-8">
                {para}
              </p>
              {/* Insert pull quotes after paragraph 1 and 4 */}
              {i === 0 && story.pullQuotes[0] && (
                <blockquote className="my-12 md:my-16 pl-6 border-l border-accent/40">
                  <p
                    className="font-display font-light italic text-text-primary leading-[1.4]"
                    style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
                  >
                    &ldquo;{story.pullQuotes[0]}&rdquo;
                  </p>
                </blockquote>
              )}
              {i === 3 && story.pullQuotes[1] && (
                <blockquote className="my-12 md:my-16 pl-6 border-l border-accent/40">
                  <p
                    className="font-display font-light italic text-text-primary leading-[1.4]"
                    style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
                  >
                    &ldquo;{story.pullQuotes[1]}&rdquo;
                  </p>
                </blockquote>
              )}
            </div>
          ))}

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-text-tertiary/20">
            <Link
              href="/"
              className="font-body text-[11px] font-normal tracking-[0.25em] uppercase text-text-secondary transition-colors duration-300 hover:text-accent"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
