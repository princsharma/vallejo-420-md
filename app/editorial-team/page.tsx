import type { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    BookOpenCheck,
    CheckCheck,
    ClipboardCheck,
    FileCheck2,
    SearchCheck,
    ShieldCheck,
    Stethoscope,
} from "lucide-react";

import { BookingButton } from "@/components/booking-dialog";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DoctorPhotoPlaceholder } from "@/components/doctor-photo-placeholder";
import { SiteFooter } from "@/components/site-footer";
import { doctorProfilePath } from "@/lib/doctors";
import {
    DAALON_B_ECHOLS_SLUG,
    medicalAuthorProfilePath,
    OCTAVIA_WYCHE_SLUG,
} from "@/lib/medical-authors";
import { INTERACTIVE_CARD_HOVER } from "@/lib/interactive-card-hover";
import { getMetadataBaseUrl } from "@/lib/metadata-base";
import { contactInfo, siteConfig } from "@/lib/site-data";

const EDITORIAL_HUB_TITLE = "Medical Authors & Reviewers | Vallejo 420 MD";
const EDITORIAL_HUB_DESCRIPTION =
    "Meet the medical writers and reviewers behind Vallejo 420 MD’s cannabis guides. See our sources, editorial workflow, and review standards for accuracy. ";
const EDITORIAL_HUB_OG_IMAGE_PATH =
    "/media/medical-author-writing-cannabis-notes.webp";
const EDITORIAL_HUB_OG_WIDTH = 1408;
const EDITORIAL_HUB_OG_HEIGHT = 768;
const EDITORIAL_HUB_OG_ALT =
    "Medical author in professional attire reviewing cannabis education notes on a tablet at a desk";

const editorialHubOgImageUrl = new URL(
    EDITORIAL_HUB_OG_IMAGE_PATH,
    getMetadataBaseUrl(),
).toString();

export const metadata: Metadata = {
    title: {
        absolute: EDITORIAL_HUB_TITLE,
    },
    description: EDITORIAL_HUB_DESCRIPTION,
    alternates: {
        canonical: "/editorial-team/",
    },
    openGraph: {
        title: EDITORIAL_HUB_TITLE,
        description: EDITORIAL_HUB_DESCRIPTION,
        url: new URL("/editorial-team/", getMetadataBaseUrl()).toString(),
        siteName: siteConfig.name,
        type: "website",
        locale: "en_US",
        images: [
            {
                url: editorialHubOgImageUrl,
                secureUrl: editorialHubOgImageUrl,
                width: EDITORIAL_HUB_OG_WIDTH,
                height: EDITORIAL_HUB_OG_HEIGHT,
                alt: EDITORIAL_HUB_OG_ALT,
                type: "image/webp",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: EDITORIAL_HUB_TITLE,
        description: EDITORIAL_HUB_DESCRIPTION,
        images: [editorialHubOgImageUrl],
    },
};

const QUALITY_COMMITMENTS = [
    {
        title: "Sources You Can Trust",
        description:
            "Every guide starts with reliable sources: California state agencies, peer-reviewed research, and recognized medical organizations. When a topic touches state law or program rules, we confirm the details against official California resources before anything is published.",
        Icon: ShieldCheck,
    },
    {
        title: "Written for Real Patients",
        description:
            "Most readers come to us with practical questions about eligibility, paperwork, or what to expect from an evaluation. We answer in plain language, skip unnecessary jargon, and focus on what helps a patient take the next step.",
        Icon: BookOpenCheck,
    },
    {
        title: "Open About Who We Are",
        description:
            "Every article names its writer and, where relevant, its medical reviewer. We keep general education separate from personal medical advice, and our standards are laid out in our full Editorial Policy.",
        Icon: CheckCheck,
    },
] as const;

const CONTENT_STEPS = [
    {
        title: "Topic Research",
        description:
            "Writers gather information from government publications, clinical literature, and trusted healthcare sources.",
        Icon: SearchCheck,
    },
    {
        title: "Accuracy Verification",
        description:
            "Facts, medical terms, and California-specific details are cross-checked against current state regulations and official sources.",
        Icon: ClipboardCheck,
    },
    {
        title: "Editorial Polish",
        description:
            "Editors review each draft for structure, clarity, and completeness so it is easy to follow and genuinely useful.",
        Icon: BookOpenCheck,
    },
    {
        title: "Clinical Review",
        description:
            "Articles with medical content go to qualified reviewers whose background matches the topic, who confirm the information is appropriate and responsibly presented.",
        Icon: Stethoscope,
    },
    {
        title: "Pre-Publication Check",
        description:
            "Before going live, each piece is checked for proper sourcing, required disclaimers, and details that may need updating.",
        Icon: FileCheck2,
    },
] as const;

const MEDICAL_WRITERS = [
    {
        name: "Daalon B. Echols, MD",
        role: "Neurologist · Health & Medical Content Writer",
        photoSrc: "/media/daalonb-echols.webp",
        bio: "Dr. Daalon B. Echols is a board-certified physician with more than 21 years of clinical experience in neurology, neurophysiology, and internal medicine. He brings that background to healthcare writing, explaining complex medical topics, including medical cannabis and qualifying conditions, in clear, patient-friendly language.",
        profileHref: medicalAuthorProfilePath(DAALON_B_ECHOLS_SLUG),
        ctaLabel: "View Details",
    },
    {
        name: "Octavia Wyche",
        role: "Paralegal Certified · Healthcare & Regulatory Content",
        photoSrc: "/media/octavia-wyche.webp",
        bio: "Octavia Wyche is a technical writer and documentation specialist with a background in healthcare and regulated government environments. She holds a B.S. in Biology (minor in Chemistry) and a Paralegal Administrative Officer Certification, which supports her work on healthcare regulations, medical cannabis programs, and compliance-focused content.",
        profileHref: medicalAuthorProfilePath(OCTAVIA_WYCHE_SLUG),
        ctaLabel: "View Details",
    },
] as const;

const MEDICAL_REVIEWERS = [
    {
        slug: "rick-rieser",
        name: "Rick Rieser",
        role: "Medical Reviewer",
        photoSrc: "/media/rick-rieser.webp",
        bio: "Rick Rieser contributes to the review of healthcare educational content, supporting clear communication and responsible presentation of medical information. His role in the editorial process helps ensure that reviewed materials are appropriate for their intended audience and communicate important health information accurately.",
    },
    {
        slug: "johnathan-miller",
        name: "Dr. Johnathan Miller",
        role: "Medical Reviewer · General Medicine",
        photoSrc: "/media/johnathan-miller.webp",
        bio: "Dr. Johnathan Miller is a physician whose medical cannabis evaluation practice supports patient education and individualized clinical assessment. His background in general medicine informs his work on healthcare information and California medical cannabis requirements.",
    },
] as const;

function EditorialProfileCard({
    name,
    role,
    photoSrc,
    bio,
    profileHref,
    ctaLabel = "View Profile",
}: {
    name: string;
    role: string;
    photoSrc: string;
    bio: string;
    profileHref?: string;
    ctaLabel?: string;
}) {
    return (

        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-section-green shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            {/* Doctor Image */}
            <div className="aspect-[16/10] w-full shrink-0 overflow-hidden bg-section-green transition-all duration-300 group-hover:scale-[1.02]">
                <DoctorPhotoPlaceholder
                    label={name}
                    photoSrc={photoSrc}
                    className="h-full w-full rounded-none object-cover"
                />
            </div>

            {/* Doctor Details */}
            <div className="flex flex-1 flex-col p-2 md:p-7">

                <h4 className="ds-h4 min-h-[2.5rem] text-dark-green">
                    {name}
                </h4>

                <p className="ds-small mt-0 min-h-[2.5rem] font-semibold text-dark-green">
                    {role}
                </p>

                <p className="ds-body mt-0 line-clamp-4 flex-1 text-pretty text-black/90">
                    {bio}
                </p>

                {/* Consistent CTA */}
                {profileHref ? (
                    <Link
                        href={profileHref}
                        className="mt-6 inline-flex h-12 w-[70%]  mx-auto shrink-0 items-center justify-center gap-2 rounded-lg bg-amber px-5 text-base font-semibold text-white transition-colors hover:bg-[#d4922f]"
                    >
                        {ctaLabel}
                        <ArrowRight className="size-4" aria-hidden />
                    </Link>
                ) : null}

            </div>
        </article>

    );
}

export default function EditorialTeamPage() {
    return (
        <div className="flex flex-1 flex-col [--layout-page-gutter-mobile:24px]">
            <main className="flex-1 bg-warm-white">
                <section className="bg-dark-green pb-12 pt-3 md:pb-16 md:pt-4 lg:pb-20">
                    <div className="ds-container bg-dark-green">
                        <Breadcrumbs
                            alignWithPage
                            compact
                            className="pt-0 pb-0 [&>div>div]:bg-white [&_li]:text-amber [&_li>a]:text-black [&_li>span]:text-amber [&_li>svg]:text-amber"
                            items={[{ label: "Editorial Team" }]}
                        />
                        <h1 className="ds-h1 mx-auto mt-8 max-w-4xl text-balance text-center md:mt-10">
                            <span className="text-white">Meet Our Medical Authors </span>
                            <span className="text-amber">and Expert Reviewers</span>
                        </h1>
                        <p className="ds-lead mx-auto mt-5 max-w-4xl text-pretty text-center leading-relaxed text-white/80">
                            Explore medically informed articles, patient education resources,
                            and California-specific medical cannabis guides designed to help
                            you make informed decisions about your health. The Vallejo 420 MD
                            editorial team focuses on clear, accurate, and accessible
                            information about medical cannabis, patient eligibility,
                            documentation requirements, and California regulations.
                        </p>
                        <p className="ds-lead mx-auto mt-4 max-w-4xl text-pretty text-center text-white/80">
                            We are committed to providing educational content supported by
                            credible sources, careful research, and appropriate medical
                            review.
                        </p>
                    </div>
                </section>

                <section className="ds-section bg-white">
                    <div className="ds-container">
                        <div className="mx-auto max-w-4xl ">
                            <h2 className="ds-h2 mt-4 text-balance mx-auto text-center ">
                                <span className="text-dark-green">Meet Our Medical </span>
                                <span className="text-amber">Editorial Team</span>
                            </h2>
                            <p className="ds-lead ds-mt-after-heading text-center mx-auto text-pretty text-black/90">
                                Our writers and medical reviewers work together to make complex
                                healthcare information easier to understand. Through research,
                                clear writing, and professional review, we aim to provide
                                reliable educational resources for readers exploring medical
                                cannabis in California.
                            </p>
                        </div>

                        <section aria-labelledby="authors-heading" className="mt-8 grid gap-5">
                            <h3 id="authors-heading" className="ds-h3 text-dark-green mx-auto text-center">
                                Our Medical Writers
                            </h3>
                            <div className="mt-4 grid gap-5 md:grid-cols-2">
                                {MEDICAL_WRITERS.map((writer) => (
                                    <EditorialProfileCard key={writer.name} {...writer} />
                                ))}
                            </div>
                        </section>

                        <section aria-labelledby="reviewers-heading" className="mt-8 grid gap-5">
                            <h3 id="reviewers-heading" className="ds-h3 text-dark-green mx-auto text-center">
                                Our Medical Reviewers
                            </h3>
                            <div className="mt-4 grid gap-5 lg:grid-cols-2">
                                {MEDICAL_REVIEWERS.map(({ slug, ...reviewer }) => (
                                    <EditorialProfileCard
                                        key={slug}
                                        {...reviewer}
                                        profileHref={doctorProfilePath(slug)}
                                    />
                                ))}
                            </div>
                        </section>
                    </div>
                </section>

                <section className="ds-section bg-warm-white" id="quality">
                    <div className="ds-container">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="ds-h2 mt-2 text-balance">
                                <span className="text-dark-green">Our Commitment to </span>
                                <span className="text-amber">Quality Content</span>
                            </h2>
                        </div>
                        <div className="mt-8 grid gap-5 md:grid-cols-3 md:items-stretch">
                            {QUALITY_COMMITMENTS.map(({ title, description, Icon }) => (
                                <article
                                    key={title}
                                    className={`flex h-full flex-col rounded-2xl border border-border bg-white p-6 md:p-7 ${INTERACTIVE_CARD_HOVER}`}
                                >
                                    <span className="flex size-14 items-center mx-auto justify-center rounded-xl bg-amber text-white">
                                        <Icon className="size-5" aria-hidden />
                                    </span>
                                    <h3 className="ds-h4 mt-5 text-dark-green mx-auto text-center">{title}</h3>
                                    <p className="ds-body mt-3 text-pretty text-black/90">
                                        {description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>


                <section className="ds-section bg-section-green">
                    <div className="ds-container">
                        {/* Section Heading */}
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="ds-h2 mt-2 text-balance">
                                <span className="text-dark-green">Our Editorial </span>
                                <span className="text-amber">Workflow</span>
                            </h2>

                            <p className="ds-body ds-mt-after-heading text-black/90">
                                Behind every guide is a clear, repeatable process meant to keep
                                our content accurate, easy to read, and current.
                            </p>
                        </div>

                        {/* Vertical Timeline */}
                        <ol className="mx-auto mt-10 max-w-5xl list-none space-y-6 p-0">
                            {CONTENT_STEPS.map(({ title, description, Icon }, index) => (
                                <li
                                    key={title}
                                    className="group relative grid grid-cols-[60px_minmax(0,1fr)] items-stretch gap-4 sm:gap-5 md:gap-6"
                                >
                                    {/* Icon and Connecting Line */}
                                    <div className="relative flex justify-center">
                                        <div className="relative z-10 flex size-[60px] shrink-0 items-center justify-center rounded-2xl border border-border bg-white text-primary shadow-[0_2px_8px_rgb(11_93_42_/_4%)] transition-[border-color,background-color,box-shadow,transform] duration-200 group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:bg-light-green group-hover:shadow-[0_6px_20px_rgb(11_93_42_/_10%)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
                                            <Icon
                                                className="size-9 transition-colors duration-200 group-hover:text-amber"
                                                strokeWidth={1.8}
                                                aria-hidden
                                            />
                                        </div>

                                        {index !== CONTENT_STEPS.length - 1 && (
                                            <span
                                                aria-hidden="true"
                                                className="absolute left-1/2 top-[72px] bottom-[-24px] w-px -translate-x-1/2 bg-primary/30"
                                            />
                                        )}
                                    </div>

                                    {/* Step Content Card */}
                                    <article className="flex min-h-[150px] flex-col justify-center rounded-2xl border border-border bg-white px-5 py-6 transition-[border-color,box-shadow,transform] duration-200 group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-[0_10px_28px_rgb(11_93_42_/_10%)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 sm:px-7 sm:py-7 md:px-8">
                                        {/* Number and Heading */}
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <span className="ds-md flex size-10 shrink-0 items-center justify-center rounded-full bg-amber font-semibold text-white transition-colors duration-200 group-hover:bg-dark-green">
                                                {index + 1}
                                            </span>

                                            <h3 className="ds-h4 text-balance text-dark-green">
                                                {title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="ds-body mt-4 text-pretty text-black/90">
                                            {description}
                                        </p>
                                    </article>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>


                <section className="ds-section bg-white">
                    <div className="ds-container">
                            <p className="ds-eyebrow text-amber mx-auto text-center">
                                Clear, reviewed resources
                            </p>
                            <h2 className="ds-h2 mt-2 text-balance text-dark-green mx-auto text-center">
                                Guidance You Can Act On
                            </h2>
                            <p className="ds-lead mx-auto mt-4 text-pretty text-black/90 mx-auto text-center">
                                Medical cannabis rules in California can be hard to follow,
                                especially when your health needs and state requirements
                                overlap. Vallejo 420 MD publishes clear, reviewed guides so you
                                can understand your options before you decide anything.
                            </p>
                            <p className="ds-lead mt-2 text-pretty text-black/90 mx-auto text-center">
                                Browse our guides on who qualifies, what a patient evaluation
                                involves, which documents you need, and how California&apos;s
                                current rules affect you.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/our-doctors/"
                                    className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber px-6 text-base font-semibold text-white transition-colors hover:bg-[#d4922f]"
                                >
                                    Meet Our Doctors
                                    <ArrowRight className="size-4" aria-hidden />
                                </Link>
                                <Link
                                    href="/policy/editorial-policy/"
                                    className="inline-flex h-12 items-center justify-center rounded-lg border border-dark-green bg-dark-green/10 px-6 text-base font-semibold text-dark-green transition-colors hover:bg-white/10"
                                >
                                    Editorial Policy
                                </Link>
                            </div>
                    
                    </div>
                </section>

                <section className="ds-section bg-dark-green">
                    <div className="ds-container">

                        <h2 className="ds-h2 text-balance mx-auto text-center">
                            <span className="text-white">Take the Next Step </span>
                            <span className="text-amber">With Vallejo 420 MD</span>
                        </h2>
                        <p className="ds-lead mx-auto mt-2 text-center max-w-2xl text-pretty text-white/90">
                            Once you are ready, a licensed California doctor can evaluate
                            you online through a private, secure visit. You can book from
                            home, with no waiting room and no office trip.
                        </p>
                        <div className="mt-7 flex flex-wrap justify-center gap-4">
                            <BookingButton
                                size="lg"
                                className="h-12 rounded-lg px-6 text-base font-semibold"
                            >
                                Book Your Evaluation
                            </BookingButton>
                            <a
                                href={contactInfo.phoneHref}
                                className="inline-flex h-12 items-center justify-center rounded-lg border border-primary px-6 text-base font-semibold text-dark-green transition-colors bg-white hover:bg-light-green"
                            >
                                Speak With Our Team 
                            </a>
                        </div>
                    </div>
                </section>


            </main>
            <SiteFooter />
        </div>
    );
}
