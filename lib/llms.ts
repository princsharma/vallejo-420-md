import { contactInfo, siteConfig } from "@/lib/site-data";
import { absoluteUrl, pageByPath } from "@/lib/site-pages";

function requirePage(path: string) {
  const page = pageByPath(path);
  if (!page) {
    throw new Error(`Missing site page for path: ${path}`);
  }
  return page;
}

function linkLine(path: string, labelOverride?: string): string {
  const page = requirePage(path);
  const label = labelOverride ?? page.label;
  return `- [${label}](${absoluteUrl(page.path)}): ${page.description}`;
}

/**
 * Plain-text Markdown for LLMs, modeled on the My MMJ Doctor llms.txt format:
 * site summary blockquote, key facts, topical sections with absolute links,
 * Company & Legal, disclaimer, and XML sitemap.
 */
export function buildLlmsTxt(): string {
  const lines = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.name} is a California-based telehealth service that connects patients in Vallejo and surrounding areas with state-licensed physicians for online medical marijuana (MMJ) evaluations and physician recommendations through secure video consultations. The company does not cultivate, sell, or dispense cannabis products. Physician-issued recommendations allow qualifying patients to access licensed dispensaries in Vallejo and across California where permitted by law.`,
    "",
    `- Headquartered in ${contactInfo.addressLocality}, ${contactInfo.addressRegion} (${contactInfo.address}).`,
    "- Consultations are conducted entirely online via secure video; most approved patients receive a same-day digital recommendation.",
    "- Fees range from $55 (Essential) to $199 (Premium), depending on the selected plan.",
    "- 100% money-back guarantee if the physician does not approve the patient.",
    "- HIPAA-aligned intake and consultation; physicians are licensed to issue medical marijuana recommendations in California.",
    "- Open Mon–Sun, 9 AM – 6 PM.",
    `- Phone: ${contactInfo.phone}; email: ${contactInfo.email}.`,
    "- Not a dispensary, not a recreational cannabis service, and not an in-person clinic chain.",
    "",
    "",
    "## How It Works",
    "",
    linkLine("/#process"),
    linkLine("/get-your-card/"),
    "",
    "",
    "## Medical Marijuana Card Plans",
    "",
    "Plan options for Vallejo patients seeking a physician recommendation and dispensary access under California medical cannabis rules.",
    "",
    linkLine("/get-your-card/#pricing"),
    `- [Essential Plan](${absoluteUrl("/get-your-card/#pricing")}): Starts at $55; includes an instant digital recommendation copy, dispensary access, and 1-year validity.`,
    `- [Enhanced Plan](${absoluteUrl("/get-your-card/#pricing")}): $99; includes Essential benefits plus a hard copy mailed and an exclusive MMJ ID card.`,
    `- [Premium Plan](${absoluteUrl("/get-your-card/#pricing")}): $199; includes Enhanced benefits plus higher possession limits and legal protection for cultivation where applicable.`,
    "",
    "",
    "## Local Service Area",
    "",
    "Vallejo 420 MD focuses on Vallejo, California residents seeking fast online MMJ evaluations and access to state-licensed dispensaries.",
    "",
    linkLine("/", "Vallejo Medical Marijuana Card"),
    "",
    "",
    "## Company & Legal",
    "",
    linkLine("/about/"),
    linkLine("/contact/"),
    `- [Sitemap](${absoluteUrl("/sitemap.xml")}): XML sitemap listing the main public pages on the site.`,
    "",
    "",
    "---",
    "",
    "*For current pricing, qualifying conditions, or California program rules, consult the linked pages directly, as state cannabis laws change frequently.*",
    "",
    `[XML Sitemap](${absoluteUrl("/sitemap.xml")})`,
    "",
  ];

  return lines.join("\n");
}
