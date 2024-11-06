import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez AURRA Communication pour vos projets de communication digitale, événementielle et de recrutement.",
  openGraph: {
    title: "Contact | AURRA Communication",
    description: "Prenez contact avec notre équipe d'experts",
    images: ["/contact-og.jpg"],
  },
};

import { ContactPage } from "./ContactPage";
export default function Page() {
  return <ContactPage />;
}
