import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formation Professionnelle | AURRA Communication",
  description: "Formation professionnelle en communication, IA et technologies",
  openGraph: {
    title: "Formation | AURRA Communication",
    description:
      "Développez vos compétences avec nos formations professionnelles",
    images: ["/formation-og.jpg"],
  },
};

import { FormationPage } from "./FormationPage";
export default FormationPage;
