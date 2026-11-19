import Link from "next/link";
import { Clock } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import {
    Accordion,
    AccordionContent,
    AccordionTrigger,
    AccordionItem
} from "@/components/ui/accordion";
import { homeFaqs } from "@/lib/home-content";
import { SiteFooter } from "@/components/site-footer";

export default function FaqPage() {
    return (
        <main className="flex-1 bg-white">
            <section className="pb-6 md:pb-6 lg:pb-8">
                <div className="ds-container"
                >
                    <Breadcrumbs
                        alignWithPage
                        compact
                        className="pt-3 pb-3"
                        items={[{
                            label: "FAQ"
                        }]}
                    />
                </div>
            </section>

            <section id="faq" className="ds-section bg-white">

                <div className="ds-container grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14 xl:gap-16">
                    <div className="min-w-0">
                        <h2 className="ds-h2 text-balance">
                            <span className="block text-dark-green">Frequently Asked</span>
                            <span className="block text-amber">Questions</span>
                        </h2>
                        <p className="ds-body ds-mt-after-heading text-pretty text-black/90">
                            Learn more about eligibility, appointments, privacy, pricing, and the difference between a
                            recommendation and an MMIC.
                        </p>
                        <div className="mt-8 rounded-2xl bg-light-green p-5 md:p-6">
                            <div className="flex items-start gap-4">
                                <Clock className="size-5 shrink-0 text-dark-green" strokeWidth={2} aria-hidden />
                                <div className="min-w-0">
                                    <p className="ds-body font-bold text-dark-green">Still have questions?</p>
                                    <p className="ds-body mt-1.5 font-normal text-pretty text-black/90">
                                        Our team can help you understand the evaluation process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Accordion
                        className="min-w-0 w-full gap-3"
                        defaultValue={["faq-0"]}
                        keepMounted
                    >
                        {homeFaqs.map((faq, index) => (
                            <AccordionItem
                                key={faq.question}
                                value={`faq-${index}`}
                                className="rounded-2xl border border-border bg-warm-white px-4 shadow-sm"
                            >
                                <AccordionTrigger className="items-center gap-4 rounded-xl px-2 py-5 text-left ds-faq font-bold text-dark-green hover:no-underline md:py-6 [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:shrink-0 [&_[data-slot=accordion-trigger-icon]]:text-dark-green">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="ds-body px-2 pb-5 pt-0 text-left text-black/90 md:pb-6">
                                    {faq.question.includes("Private") || faq.question.includes("Information Private") ? (
                                        <p>
                                            Yes. Visits use HIPAA-compliant telehealth, and your health information is kept confidential and
                                            shared only with your consent or as the law requires. See our{" "}
                                            <Link
                                                href="/policy/privacy-policy/"
                                                className="font-semibold text-dark-green underline-offset-2 hover:underline"
                                            >
                                                Privacy Policy
                                            </Link>{" "}
                                            and{" "}
                                            <Link
                                                href="/policy/hipaa-compliance-policy/"
                                                className="font-semibold text-dark-green underline-offset-2 hover:underline"
                                            >
                                                HIPAA policy
                                            </Link>
                                            .
                                        </p>
                                    ) : (
                                        <p>{faq.answer}</p>
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
            <SiteFooter/>
        </main>
    );
}