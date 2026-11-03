import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

export const alt = "Vallejo 420 MD - Get Your Medical Marijuana Card in Vallejo Today";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const [logoWebp, photoWebp] = await Promise.all([
    readFile(join(process.cwd(), "public/vallejo420md-logo.webp")),
    readFile(join(process.cwd(), "public/hero-section.webp")),
  ]);
  const [logoPng, photoPng] = await Promise.all([
    sharp(logoWebp).png().toBuffer(),
    sharp(photoWebp).png().toBuffer(),
  ]);
  const logoSrc = `data:image/png;base64,${logoPng.toString("base64")}`;
  const photoSrc = `data:image/png;base64,${photoPng.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#dcefdf",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "62%",
            height: "100%",
            padding: "60px 56px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} height={56} style={{ objectFit: "contain" }} />
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#0d3f2e",
            }}
          >
            Get Your Medical Marijuana Card in Vallejo Today!
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 28,
              lineHeight: 1.4,
              color: "#3d5346",
            }}
          >
            Fast, hassle-free online approval with same-day certification
            from licensed doctors.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            width: "38%",
            height: "100%",
            background: "#0d3f2e",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            height={630}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
