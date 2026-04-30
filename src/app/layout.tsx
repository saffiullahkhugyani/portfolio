import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { HiveBackground } from "@/components/hive-background";
import { Interactions } from "@/components/interactions";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const THEME_INIT_SCRIPT = `
(() => {
  const key = "portfolio-theme";
  let theme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  const saved = window.localStorage.getItem(key);
  if (saved === "dark" || saved === "light") theme = saved;
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://saffiullah.dev"),
  title: "Saffiullah K. | Mobile, Web & IoT Software Engineer",
  description:
    "Saffiullah K. builds high-performance products across React Native, Flutter, Next.js, and hardware integrations (ESP32/Arduino).",
  keywords: [
    "Saffiullah",
    "Software Engineer",
    "React Native",
    "Flutter",
    "Next.js",
    "TypeScript",
    "ESP32",
    "Arduino",
    "Portfolio",
  ],
  openGraph: {
    title: "Saffiullah K. | Mobile, Web & IoT Software Engineer",
    description:
      "High-performance cross-platform apps and scalable web platforms with hardware integration expertise.",
    type: "website",
    url: "https://saffiullah.dev",
    siteName: "Saffiullah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saffiullah K. | Mobile, Web & IoT Software Engineer",
    description:
      "I build products that connect mobile, web, and real-world hardware systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <HiveBackground />
        <Interactions />
        <div style={{ position: "relative", zIndex: 1, minHeight: "100%" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
