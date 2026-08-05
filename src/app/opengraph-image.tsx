import { ImageResponse } from "next/og";

export const alt = "Saffiullah K. — Mobile, Web & IoT Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ponytail: default font, brand tokens hardcoded (CSS vars don't exist here)
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#04050f",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(129,140,248,0.25), transparent 50%), radial-gradient(circle at 85% 80%, rgba(34,211,238,0.18), transparent 50%)",
          color: "#eef2ff",
          fontSize: 32,
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#8b98c8" }}>
          SAFFIULLAH K. · SOFTWARE ENGINEER
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            marginTop: 24,
            lineHeight: 1.15,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Building Mobile, Web & IoT</span>
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #818cf8, #22d3ee)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            products that ship.
          </span>
        </div>
        <div style={{ fontSize: 30, color: "#8b98c8", marginTop: 32 }}>
          React Native · Flutter · Next.js · ESP32
        </div>
      </div>
    ),
    { ...size }
  );
}
