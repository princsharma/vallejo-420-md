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
import { Metadata } from "next";


export const metadata:Metadata = {
    title:"Frequently Asked Questions | Vallejo 420 MD",
    description:"Find answers to common questions about medical marijuana cards in Vallejo, CA, including eligibility, costs, online evaluations, and renewals.",
    alternates: {
        canonical:"/faq/"
    }
}

export default function FaqPage() {
    return (
        <main className="flex-1 bg-white">
            <section className="bg-dark-green pb-12 pt-3 md:pb-16 md:pt-4 lg:pb-20">
                <div className="ds-container">
                    <Breadcrumbs
                        alignWithPage
                        compact
                        className="pt-0 pb-0 [&>div>div]:bg-white [&_li]:text-amber [&_li>a]:text-black [&_li>span]:text-amber [&_li>svg]:text-amber"
                        items={[{
                            label: "FAQ"
                        }]}
                    />

                    <h1 className="ds-h1 mx-auto mt-8 max-w-4xl text-center text-primary md:mt-10">
                        <span className="block whitespace-normal text-white">
                            Frequently Asked
                        </span>
                        <span className="block whitespace-normal text-amber">
                            Questions
                        </span>
                    </h1>

                    <p className="ds-lead mx-auto mt-5 max-w-3xl text-center leading-relaxed text-white/80">
                        Find answers about appointments, eligibility, pricing, privacy, recommendations, and medical marijuana cards in Vallejo.
                    </p>
                </div>
            </section>

            <section id="faq" className="ds-section bg-white">

                <div className="ds-container mx-auto max-w-4xl">

                    <Accordion
                        className="mt-0 min-w-0 w-full gap-3"
                        defaultValue={["faq-0"]}
                        keepMounted
                    >
                        {homeFaqs.map((faq, index) => (
                            <AccordionItem
                                key={faq.question}
                                value={`faq-${index}`}
                                className="rounded-2xl border border-border bg-warm-white px-4 shadow-sm"
                            >
                                <AccordionTrigger className="items-center gap-4 rounded-xl px-2 py-5 text-center ds-faq font-bold text-dark-green hover:no-underline md:py-6 [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:shrink-0 [&_[data-slot=accordion-trigger-icon]]:text-dark-green">
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