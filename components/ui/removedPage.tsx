import Link from "next/link";
import Image from "next/image";
// import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BookingButton } from "@/components/booking-dialog";
import { contactInfo } from "@/lib/site-data";

export function RemovedPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F6F3]">
      {/* <SiteHeader /> */}

      <main
        id="main-content"
        className="flex flex-1 items-center px-5 py-12 sm:px-8 sm:py-16 lg:py-20"
      >
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left content */}
          <section className="flex flex-col items-start">
            <p className="inline-flex items-center rounded-full bg-[#B72C2C]/10 px-4 py-1.5 text-sm font-semibold text-[#B72C2C] sm:text-base">
              Error 410
            </p>

            <h1 className="mt-6 max-w-[620px] text-3xl font-extrabold leading-[1.08] tracking-tight text-[#0E3B2E] sm:text-4xl lg:text-5xl">
              This page has been permanently removed.
            </h1>

            <p className="mt-6 max-w-[580px] text-base leading-7 text-[#405A50] sm:text-lg sm:leading-8">
              The page you tried to open no longer exists and won’t be coming
              back. The link you followed is out of date, but your California
              medical marijuana card is still easy to get.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <BookingButton className="inline-flex h-14 items-center justify-center rounded-full bg-[#0E3B2E] px-8 text-base font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-colors hover:bg-[#124A3A]">
                Get your medical card
              </BookingButton>

              <Link
                href="/"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-[#0E3B2E] px-8 text-base font-medium text-[#0E3B2E] transition-colors hover:bg-[#0E3B2E]/5"
              >
                Go to homepage
              </Link>
            </div>

            <div className="mt-10 w-full max-w-[580px] border-t border-[#CFD9D1] pt-6">
              <p className="text-sm leading-7 text-[#405A50] sm:text-base">
                Looking for something specific? Call{" "}
                <a
                  href={contactInfo.phoneHref}
                  className="font-medium text-[#0E3B2E] underline underline-offset-4 hover:text-[#124A3A]"
                >
                  your clinic
                </a>{" "}
                or visit our{" "}
                <Link
                  href="/contact/"
                  className="font-medium text-[#0E3B2E] underline underline-offset-4 hover:text-[#124A3A]"
                >
                  contact page
                </Link>
                . We’re here to help.
              </p>
            </div>
          </section>

          {/* Right illustration */}
          <section
            aria-label="Removed page illustration"
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-[#CFD9D1] bg-[#E8EFE9] shadow-xl shadow-[#0E3B2E]/10">
              <Image
                src="/gone-410-illustration.jpg"
                alt="An empty white box beside a medical folder with a cannabis leaf and a green stethoscope"
                width={1024}
                height={768}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export default RemovedPage;
