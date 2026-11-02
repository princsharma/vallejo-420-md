import {
  Activity,
  Apple,
  ArrowRight,
  Bone,
  Brain,
  Eye,
  HeartPulse,
  Leaf,
  Ribbon,
  ShieldCheck,
  UserRound,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { BookingButton } from "@/components/booking-dialog";
import { homeConditions } from "@/lib/home-content";

const CONDITION_ICONS: Record<string, LucideIcon> = {
  Arthritis: Bone,
  Cancer: Ribbon,
  "Chronic Pain": Activity,
  Glaucoma: Eye,
  "HIV/AIDS": ShieldCheck,
  Migraine: Brain,
  "Seizures and Epilepsy": Zap,
  "Severe Nausea": HeartPulse,
  "Persistent Muscle Spasms": Waves,
  Cachexia: UserRound,
  Anorexia: Apple,
  Fibromyalgia: Leaf,
};

export function HomeConditions() {
  return (
    <section id="conditions" className="ds-section bg-section-green">
      <div className="ds-container">
        <div className="mx-auto w-full max-w-3xl text-center">
          <h2 className="ds-h2 text-balance">
            <span className="block text-dark-green">Qualifying Conditions for a</span>
            <span className="block text-amber">Medical Marijuana Card in Vallejo</span>
          </h2>
          <p className="ds-lead ds-mt-after-heading text-pretty text-muted-foreground">{homeConditions.intro}</p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeConditions.items.map((condition) => {
            const Icon = CONDITION_ICONS[condition] ?? ShieldCheck;
            return (
              <li
                key={condition}
                className="group flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-4 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_8px_24px_rgb(11_93_42_/_8%)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-light-green text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-5 transition-transform duration-200 group-hover:scale-105 motion-reduce:group-hover:scale-100" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="ds-body font-semibold text-dark-green">{condition}</span>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col gap-6 rounded-2xl bg-dark-green p-5 md:flex-row md:items-center md:justify-between md:gap-10 md:p-8">
          <div className="min-w-0 flex-1 text-white">
            <h3 className="ds-h4 text-white">{homeConditions.noteTitle}</h3>
            <p className="ds-body mt-3 text-pretty text-white/85">{homeConditions.note}</p>
          </div>
          <BookingButton
            size="lg"
            className="h-12 shrink-0 rounded-lg px-6 text-base font-semibold tracking-[0.1px] md:self-center"
          >
            Start your evaluation to find out
            <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
          </BookingButton>
        </div>
      </div>
    </section>
  );
}
