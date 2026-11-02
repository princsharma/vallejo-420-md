import { homeAreas } from "@/lib/home-content";

const areaCardClassName =
  "flex w-full min-h-[3.75rem] cursor-default items-center justify-center whitespace-nowrap rounded-2xl border border-white/10 bg-white px-5 py-5 text-center text-base font-semibold leading-snug text-dark-green shadow-[0_8px_24px_rgb(11_93_42_/_12%)] transition-[border-color,background-color,color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[#d4922f] hover:bg-[#d4922f] hover:text-white hover:shadow-[0_8px_24px_rgb(212_146_47_/_22%)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:min-h-[4.25rem] md:px-6 md:py-6 md:text-lg";

export function HomeServiceAreas() {
  return (
    <section id="areas" className="ds-section bg-dark-green">
      <div className="ds-container">
        <div className="mx-auto w-full max-w-3xl text-center">
          <h2 className="ds-h2 text-balance">
            <span className="block text-white">{homeAreas.titleLine1}</span>
            <span className="block text-amber">{homeAreas.titleAmber}</span>
          </h2>
          <p className="ds-lead ds-mt-after-heading text-pretty text-white/85">{homeAreas.intro}</p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-5 lg:gap-5">
          {homeAreas.items.map((area) => (
            <li key={area} className="min-w-0">
              <span className={areaCardClassName}>{area}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
