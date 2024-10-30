import { ImageResponse } from "@vercel/og";
import { siteConfig } from "./metadata";

export const runtime = "edge";

export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to right, #4f46e5, #7c3aed)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            color: "white",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          {siteConfig.name}
        </h1>
        <p
          style={{
            fontSize: "32px",
            color: "white",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          {siteConfig.description}
        </p>
      </div>
    ),
    size
  );
}
