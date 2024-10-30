import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Découvrez l'équipe passionnée d'AURRA Communication, votre partenaire en communication digitale au Togo.",
  openGraph: {
    title: "À Propos | AURRA Communication",
    description: "Une équipe passionnée au service de votre communication",
    images: ["/about-og.jpg"],
  },
};

import { AProposPage } from "./AProposPage";
export default AProposPage;
