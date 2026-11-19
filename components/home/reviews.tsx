
"use client";

import { useState } from "react";
import { Quote } from "lucide-react";

import { homeReviews } from "@/lib/home-content";

export function HomeReviews() {
  const [expandedReviews, setExpandedReviews] = useState<string[]>([]);

  const toggleReview = (name: string) => {
    setExpandedReviews((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  return (
    <section id="reviews" className="ds-section bg-warm-white">
      <div className="ds-container">
        <div className="mx-auto w-full max-w-3xl text-center">
          <h2 className="ds-h2 text-balance">
            <span className="block text-dark-green">
              What Vallejo Patients Say About
            </span>
            <span className="block text-amber">Vallejo 420 MD</span>
          </h2>
        </div>

        <div
          className="reviews-marquee-viewport mt-10"
          role="region"
          aria-label="Patient reviews, automatically scrolling"
          tabIndex={0}
        >
          <div className="reviews-marquee-track flex w-max">
            {[0, 1].map((group) => (
              <div
                key={group}
               className="flex shrink-0 items-start gap-5 pr-5"
                aria-hidden={group === 1}
              >
                {homeReviews.items.map((review) => {
                  const isExpanded = expandedReviews.includes(review.name);

                  return (
                    <figure
                      key={`${group}-${review.name}`}
                     className="flex w-[min(82vw,24rem)] shrink-0 self-start flex-col rounded-2xl border border-border bg-white p-6 shadow-[0_8px_24px_rgb(11_93_42_/_6%)]"
                    >
                      <Quote
                        className="size-8 shrink-0 text-primary"
                        strokeWidth={1.5}
                        aria-hidden
                      />

                      <blockquote
                        className={`ds-body mt-5 font-normal text-pretty text-foreground ${
                          isExpanded ? "" : "line-clamp-3"
                        }`}
                      >
                        {review.quote}
                      </blockquote>

                      <button
                        type="button"
                        onClick={() => toggleReview(review.name)}
                        className="mt-2 w-fit text-sm font-semibold text-dark-green underline underline-offset-4 hover:text-amber"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>

                      <figcaption className="mt-6 pt-0">
                        <p className="ds-body font-bold text-dark-green">
                          {review.name}
                        </p>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
