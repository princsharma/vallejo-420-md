import { homeAreas } from "@/lib/home-content";

export function HomeServiceAreas() {
  return (
    <section id="areas" className="ds-section bg-dark-green">
      <div className="ds-container">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h2 className="ds-h2 text-balance mx-auto text-center">
            <span className="block text-white">{homeAreas.titleLine1}</span>
            <span className="block text-amber">{homeAreas.titleAmber}</span>
          </h2>
          <p className="ds-lead ds-mt-after-heading text-pretty text-white/85">
            {homeAreas.intro}
          </p>

          <ul className="mt-10 flex list-none flex-wrap items-center justify-center gap-x-8 gap-y-3 md:mt-12 md:gap-x-10 mx-auto text-center">
            {homeAreas.items.map((area) => (
              <li
                key={area}
                className="group flex min-w-0 items-center gap-2.5 motion-reduce:transition-none"
              >
                <span
                  className="size-2 shrink-0 rounded-full bg-amber transition-colors duration-200 group-hover:bg-white motion-reduce:transition-none"
                  aria-hidden
                />
                <span className="whitespace-nowrap text-base font-semibold text-white transition-colors duration-200 group-hover:text-amber md:text-lg motion-reduce:transition-none">
                  {area}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}