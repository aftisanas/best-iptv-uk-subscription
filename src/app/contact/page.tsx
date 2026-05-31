import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Support — 24/7 British Support Team",
  description:
    "Contact the support team via WhatsApp, email or live chat, 24/7. Named British staff, average first reply under four minutes — setup help, troubleshooting and billing answers on record.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
