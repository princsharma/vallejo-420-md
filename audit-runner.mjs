import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const routes = [
  { name: "Home", path: "/" },
  { name: "Get Your Card", path: "/get-your-card/" },
  { name: "About Us", path: "/about/" },
  { name: "Contact Us", path: "/contact/" },
  { name: "Privacy Policy", path: "/privacy-policy/" },
  { name: "Terms of Use", path: "/terms-of-use/" },
  { name: "HIPAA Compliance", path: "/hipaa-compliance-policy/" },
  { name: "Consent for Telehealth", path: "/consent-to-telehealth/" },
  { name: "Refund Policy", path: "/refund-policy/" },
  { name: "Accessibility Statement", path: "/accessibility-statement/" },
  { name: "Editorial Policy", path: "/editorial-policy/" },
  { name: "Disclaimer", path: "/disclaimer/" },
  { name: "Shipping Policy", path: "/shipping-policy/" },
];

const results = [];
const tmpDir = path.resolve("./scratch-reports");
if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });

console.log(`Starting Lighthouse audits for ${routes.length} pages across Desktop and Mobile...\n`);

for (const route of routes) {
  const url = `http://localhost:3005${route.path}`;
  const slug = route.path === "/" ? "home" : route.path.replace(/\//g, "-").replace(/^-|-$/g, "");
  
  console.log(`Auditing: ${route.name} (${route.path})`);

  // Mobile Audit
  const mobileJsonPath = path.join(tmpDir, `${slug}-mobile.json`);
  try {
    execSync(
      `npx lighthouse "${url}" --output=json --output-path="${mobileJsonPath}" --chrome-flags="--headless" --only-categories=performance,accessibility,best-practices,seo --quiet`,
      { stdio: "ignore" }
    );
  } catch (err) {
    // Lighthouse writes json before temp cleanup, so we can ignore cleanup exit code
  }

  // Desktop Audit
  const desktopJsonPath = path.join(tmpDir, `${slug}-desktop.json`);
  try {
    execSync(
      `npx lighthouse "${url}" --preset=desktop --output=json --output-path="${desktopJsonPath}" --chrome-flags="--headless" --only-categories=performance,accessibility,best-practices,seo --quiet`,
      { stdio: "ignore" }
    );
  } catch (err) {
    // Ignore cleanup exit code
  }

  let mobileScores = { perf: 0, a11y: 0, bp: 0, seo: 0, fcp: "-", lcp: "-", tbt: "-", cls: "-" };
  let desktopScores = { perf: 0, a11y: 0, bp: 0, seo: 0, fcp: "-", lcp: "-", tbt: "-", cls: "-" };

  if (fs.existsSync(mobileJsonPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(mobileJsonPath, "utf8"));
      mobileScores = {
        perf: Math.round((data.categories.performance?.score || 0) * 100),
        a11y: Math.round((data.categories.accessibility?.score || 0) * 100),
        bp: Math.round((data.categories["best-practices"]?.score || 0) * 100),
        seo: Math.round((data.categories.seo?.score || 0) * 100),
        fcp: data.audits["first-contentful-paint"]?.displayValue || "-",
        lcp: data.audits["largest-contentful-paint"]?.displayValue || "-",
        tbt: data.audits["total-blocking-time"]?.displayValue || "-",
        cls: data.audits["cumulative-layout-shift"]?.displayValue || "-",
      };
    } catch (e) {}
  }

  if (fs.existsSync(desktopJsonPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(desktopJsonPath, "utf8"));
      desktopScores = {
        perf: Math.round((data.categories.performance?.score || 0) * 100),
        a11y: Math.round((data.categories.accessibility?.score || 0) * 100),
        bp: Math.round((data.categories["best-practices"]?.score || 0) * 100),
        seo: Math.round((data.categories.seo?.score || 0) * 100),
        fcp: data.audits["first-contentful-paint"]?.displayValue || "-",
        lcp: data.audits["largest-contentful-paint"]?.displayValue || "-",
        tbt: data.audits["total-blocking-time"]?.displayValue || "-",
        cls: data.audits["cumulative-layout-shift"]?.displayValue || "-",
      };
    } catch (e) {}
  }

  console.log(`  -> Mobile  : Perf: ${mobileScores.perf} | A11y: ${mobileScores.a11y} | BP: ${mobileScores.bp} | SEO: ${mobileScores.seo} (FCP: ${mobileScores.fcp}, LCP: ${mobileScores.lcp}, TBT: ${mobileScores.tbt}, CLS: ${mobileScores.cls})`);
  console.log(`  -> Desktop : Perf: ${desktopScores.perf} | A11y: ${desktopScores.a11y} | BP: ${desktopScores.bp} | SEO: ${desktopScores.seo} (FCP: ${desktopScores.fcp}, LCP: ${desktopScores.lcp}, TBT: ${desktopScores.tbt}, CLS: ${desktopScores.cls})`);

  results.push({
    name: route.name,
    path: route.path,
    mobile: mobileScores,
    desktop: desktopScores,
  });
}

fs.writeFileSync("./lighthouse-results.json", JSON.stringify(results, null, 2));
console.log("\nAll audits completed! Results saved to ./lighthouse-results.json");
