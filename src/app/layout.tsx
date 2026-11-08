import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "THAZ Decoration — Wedding Decoration Studio", template: "%s | THAZ Decoration" },
  description: siteConfig.description,
  openGraph: { type: "website", title: "THAZ Decoration", description: siteConfig.description, locale: "id_ID" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0c0b0a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><a className="skip-link" href="#main-content">Langsung ke konten</a><SiteHeader /><div id="main-content">{children}</div><SiteFooter /></body></html>;
}
