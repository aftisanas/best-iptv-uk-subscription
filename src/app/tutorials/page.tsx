import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import TutorialsContent from "./TutorialsContent";

const pageUrl = `${SITE_URL}/tutorials`;

export const metadata: Metadata = {
  title: "Best IPTV UK Setup Guides — Activate On Any Device",
  description:
    "Step-by-step Best IPTV UK activation guides for Firestick, Smart TV (Samsung, LG), Android, iPhone, Apple TV, Windows and Mac. Post-purchase help for Best IPTV UK customers.",
  alternates: { canonical: pageUrl },
  // Post-purchase content — must not compete with the homepage for organic traffic.
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
  openGraph: {
    type: "article",
    locale: "en_GB",
    siteName: SITE_NAME,
    url: pageUrl,
    title: "Best IPTV UK Setup Guides — Activate On Any Device",
    description:
      "Step-by-step Best IPTV UK activation guides for Firestick, Smart TV, Android, iPhone, PC and Mac.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IPTV UK Setup Guides — Activate On Any Device",
    description:
      "Step-by-step Best IPTV UK activation guides for every device — Firestick, Smart TV, Android, iPhone, PC and Mac.",
  },
};

export default function TutorialsPage() {
  return (
    <>
      <TutorialsContent />
    </>
  );
}
