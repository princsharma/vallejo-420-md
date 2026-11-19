import {
  DISCUSSED_CONDITIONS,
  DISCUSSED_CONDITIONS_DISCLAIMER,
} from "@/lib/doctors-hub-content";

type DiscussedConditionsPanelProps = {
  panelTitle?: string;
  showDisclaimer?: boolean;
  className?: string;
};

export function DiscussedConditionsPanel({
  panelTitle = "Conditions patients often discuss",
  showDisclaimer = true,
  className,
}: DiscussedConditionsPanelProps) {
  return (
    <div
      className={`min-w-0 rounded-2xl bg-section-green p-6 md:p-8 ${className ?? ""}`}
    >
      <p className="ds-body font-semibold text-dark-green">{panelTitle}</p>
      <ul className="mt-5 grid list-none grid-cols-1 gap-3 sm:grid-cols-2">
        {DISCUSSED_CONDITIONS.map((condition) => (
          <li
            key={condition.label}
            className="group flex items-center gap-3 rounded-2xl border border-border bg-white px-3 py-3.5 font-semibold text-dark-green transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_8px_24px_rgb(11_93_42_/_8%)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-light-green text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
              <condition.icon
                className="size-5 transition-transform duration-200 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                strokeWidth={1.75}
                aria-hidden
              />
            </span>
            <span className="ds-small min-w-0 font-semibold text-dark-green">
              {condition.label}
            </span>
          </li>
        ))}
      </ul>
      {showDisclaimer ? (
        <p className="ds-body mt-6 text-pretty text-black/90">
          {DISCUSSED_CONDITIONS_DISCLAIMER}
        </p>
      ) : null}
    </div>
  );
}
