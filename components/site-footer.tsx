import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/60 bg-accent">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Opening Hours
            </h3>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4 shrink-0 text-primary" />
              Mon &ndash; Sun, 9 AM &ndash; 6 PM
            </p>

            <h3 className="mt-8 text-sm font-semibold text-foreground">
              Social Media
            </h3>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.yelp.com/biz/vallejo-420-evaluations-vallejo"
                target="_blank"
                rel="noreferrer"
                aria-label="Yelp"
                className="flex size-9 items-center justify-center rounded-full border border-border bg-card p-1.5 transition-colors hover:border-primary"
              >
                <Image
                  src="/yelp logo.svg"
                  alt="Yelp"
                  width={24}
                  height={30}
                  className="h-full w-auto object-contain"
                />
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-pretty text-base italic leading-relaxed text-foreground">
              &ldquo;Empowering Vallejo with safe, legal, and hassle-free
              access to medical marijuana&mdash;because your wellness comes
              first.&rdquo;
            </p>
            <p className="mt-3 text-sm font-semibold text-primary">
              &mdash; Vallejo 420 MD
            </p>
          </div>

          <div className="sm:text-right">
            <h3 className="text-sm font-semibold text-foreground">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2 sm:justify-end">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href="tel:+17073835600" className="hover:text-primary">
                  (707) 383-5600
                </a>
              </li>
              <li className="flex items-start gap-2 sm:justify-end">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a
                  href="mailto:contact@vallejo420md.com"
                  className="hover:text-primary"
                >
                  contact@vallejo420md.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:justify-end">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>630 Tennessee St Unit 2, Vallejo, CA 94590</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground">
          Copyright &copy; {new Date().getFullYear()} - Vallejo 420 MD
        </p>
      </div>
    </footer>
  );
}
