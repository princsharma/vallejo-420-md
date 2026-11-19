import { ClipboardCheck, MessageSquare, ShieldCheck, Video } from "lucide-react";

import { homeProcess } from "@/lib/home-content";

const STEP_ICONS = [ClipboardCheck, Video, ShieldCheck];

export function HomeProcess() {
  return (
    <section id="how-it-works" className="ds-section bg-white">
      <div className="ds-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="min-w-0">
          <h2 className="ds-h2 text-balance">
            <span className="text-dark-green">How to Get a </span>
            <span className="text-amber">Medical Marijuana Card in Vallejo</span>
          </h2>
          <p className="ds-lead ds-mt-after-heading text-pretty text-black/90">{homeProcess.intro}</p>
          <div className="mt-8 rounded-2xl border border-border bg-light-green/70 p-5 md:p-6">
            <div className="flex items-center gap-3">
              <span
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber text-white"
                aria-hidden
              >
                <MessageSquare className="size-3.5" strokeWidth={2} aria-hidden />
              </span>
              <h3 className="ds-h4 min-w-0 flex-1 text-balance">{homeProcess.asideTitle}</h3>
            </div>
            <p className="ds-body ds-mt-after-heading text-pretty text-foreground">{homeProcess.aside}</p>
          </div>
        </div>

        <ol className="flex flex-col gap-5">
          {homeProcess.steps.map((step, index) => {
            const Icon = STEP_ICONS[index];
            const isLast = index === homeProcess.steps.length - 1;
            return (
              <li key={step.name} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-x-4">
                <div className="flex flex-col items-center self-stretch">
                  <span className="relative z-10 mt-5 flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-white text-primary shadow-[0_2px_8px_rgb(11_93_42_/_4%)] md:mt-6">
                    <Icon className="size-6" strokeWidth={1.75} aria-hidden />
                  </span>
                  {!isLast ? (
                    <span aria-hidden className="mt-3 w-px flex-1 bg-border" />
                  ) : null}
                </div>
                <article className="min-w-0 rounded-2xl border border-border bg-warm-white p-5 md:p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber ds-small font-semibold text-white"
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    <h3 className="ds-h4 min-w-0 flex-1 text-balance">{step.name}</h3>
                  </div>
                  <p className="ds-body mt-3 text-pretty text-black/90">{step.text}</p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
