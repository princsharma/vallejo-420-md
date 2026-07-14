"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CalendarCheck, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const STATS = [
  { icon: CalendarCheck, target: 2358, suffix: "+", label: "Patients Served" },
  { icon: Star, target: 1781, suffix: "+", label: "Fast Approvals" },
];

const TESTIMONIALS = [
  {
    name: "Rachel S.",
    initials: "RS",
    quote:
      "Great place, been using their services for years! Its always fast and there are many appointment times to choose from. Always check them out first!",
  },
  {
    name: "Joanie M.",
    initials: "JM",
    quote:
      "Dr Toke has been our family physician for years. He is efficient, effective and non-judgmental. We wouldn't think of going anywhere else!",
  },
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

function StatCounter({
  icon: Icon,
  target,
  suffix,
  label,
  active,
}: {
  icon: typeof CalendarCheck;
  target: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCountUp(target, active);

  return (
    <div className="text-center sm:text-left">
      <Icon className="mx-auto size-5 text-primary sm:mx-0" />
      <p className="mt-2 text-2xl font-bold text-foreground">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function TestimonialsSection() {
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
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge variant="secondary" className="h-auto rounded-full px-6 py-2.5 text-base text-primary">
              Testimonials
            </Badge>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>

          <div ref={ref} className="flex gap-8">
            {STATS.map((stat) => (
              <StatCounter
                key={stat.label}
                icon={stat.icon}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                active={active}
              />
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl">
            <Image
              src="/section-two.webp"
              alt="Doctor discussing medical marijuana treatment with a patient"
              fill
              sizes="(min-width: 640px) 384px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.name} className="border-border/70 bg-card shadow-sm">
                <CardContent className="flex flex-col gap-4 pt-2">
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 font-semibold text-primary">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
