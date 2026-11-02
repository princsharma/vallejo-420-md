import { Quote } from "lucide-react";

import { homeReviews } from "@/lib/home-content";

export function HomeReviews() {
  return (
    <section id="reviews" className="ds-section bg-warm-white">
      <div className="ds-container">
        <div className="mx-auto w-full max-w-3xl text-center">
          <h2 className="ds-h2 text-balance">
            <span className="block text-dark-green">What Vallejo Patients Say About</span>
            <span className="block text-amber">Vallejo 420 MD</span>
          </h2>
          <p className="ds-body ds-mt-after-heading font-normal text-pretty text-foreground">
            {homeReviews.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {homeReviews.items.map((review) => (
            <figure
              key={`${review.name}-${review.location}`}
              className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-[0_8px_24px_rgb(11_93_42_/_6%)]"
            >
              <Quote className="size-8 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
              <blockquote className="ds-body mt-5 flex-1 font-normal text-pretty text-foreground">
                {review.quote}
              </blockquote>
              <figcaption className="mt-6 pt-0">
                <p className="ds-body font-bold text-dark-green">{review.name}</p>
                <p className="ds-small mt-1 font-normal text-muted-foreground">{review.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* <p className="ds-small mx-auto mt-8 max-w-3xl text-center text-pretty text-muted-foreground md:mt-10">
          {homeReviews.disclaimer}
        </p> */}
      </div>
    </section>
  );
}
