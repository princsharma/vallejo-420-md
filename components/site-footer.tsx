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
                className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M12.9 2.5c-.4-.2-1 0-1.2.4L8.9 8.6c-.2.5 0 1 .5 1.2l4.7 1.8c.5.2 1 0 1.2-.5.1-.2.1-.4 0-.6L13 3c0-.2-.1-.4-.1-.5ZM8.3 10.7 3 8.9c-.5-.2-1 .1-1.1.6-.1.2 0 .4.1.6l3.4 4.5c.3.4.9.5 1.3.2.2-.1.3-.3.3-.5l1.3-3c.1-.5-.2-1-.6-1.2.2 0 .3 0 .3-.1Zm.4 3.2-3.6 3.3c-.4.3-.4.9-.1 1.3.1.2.3.3.5.3l5.3 1c.5.1 1-.2 1.1-.7 0-.2 0-.4-.1-.6L10.1 14c-.2-.5-.8-.6-1.2-.4-.1.1-.2.2-.2.3Zm3.7.2-1.2 5.3c-.1.5.2 1 .7 1.1.2 0 .4 0 .6-.1l4.2-2.9c.4-.3.5-.9.2-1.3-.1-.2-.3-.3-.5-.4l-3-1c-.5-.1-1 .1-1.1.6.1-.1.1-.2.1-.3Zm2.1-2.8 4.9-2.2c.5-.2.7-.7.5-1.2-.1-.2-.2-.3-.4-.4l-4.6-2.4c-.5-.2-1 0-1.2.4-.1.2-.1.4 0 .6l1 4.8c.1.5.6.8 1.1.6.3-.1.5-.3.7-.6Z" />
                </svg>
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
