import { ShieldCheck } from "lucide-react";

import { LeadCaptureForm } from "@/components/lead-capture-form";
import { homeEvaluation } from "@/lib/home-content";

export function HomeEvaluation() {
  return (
    <section id="evaluation" className="ds-section bg-dark-green">
      <div className="ds-container grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <div className="min-w-0 text-white">
          <h2 className="ds-h2">
            <span className="text-white">Start Your Vallejo </span>
            <span className="text-amber">Medical Marijuana Evaluation Today</span>
          </h2>
          <p className="ds-lead ds-mt-after-heading text-pretty text-white/85">{homeEvaluation.body}</p>
          <div className="mt-8 flex items-start gap-3">
            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-full  text-white"
              aria-hidden
            >
              <ShieldCheck className="size-7.5" strokeWidth={2} aria-hidden />
            </span>
            <p className="ds-small min-w-0 flex-1 text-pretty text-white/75">{homeEvaluation.privacy}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white p-5 shadow-[0_8px_24px_rgb(11_93_42_/_12%)] md:p-8">
          <h3 className="ds-h4">Book Your Evaluation</h3>
          <p className="ds-small mt-2 text-muted-foreground">Takes about 2 minutes.</p>
          <div className="mt-6">
            <LeadCaptureForm submitLabel="Start My Evaluation" />
          </div>
        </div>
      </div>
    </section>
  );
}
