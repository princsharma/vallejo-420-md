"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "Approval Rate", value: 99 },
  { label: "Customer Satisfaction", value: 97 },
  { label: "Doctor Trust", value: 100 },
];

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

function StatBar({ label, value, active }: { label: string; value: number; active: boolean }) {
  const count = useCountUp(value, active);

  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-medium text-foreground">{label}</span>
        <span className="font-semibold text-primary">{count}/100</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-primary/10">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-1000 ease-out"
          style={{ width: active ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export function TrustSection() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl bg-accent p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <h2 className="text-balance text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              When you choose natural relief, your health and well-being take
              a positive turn.
            </h2>

            <div ref={ref} className="space-y-5">
              {STATS.map((stat) => (
                <StatBar key={stat.label} label={stat.label} value={stat.value} active={active} />
              ))}
            </div>
          </div>

          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl sm:aspect-[21/9]">
            <Image
              src="/section-one.webp"
              alt="Patients experiencing natural relief"
              fill
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
