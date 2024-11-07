import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recrutement | AURRA Communication",
  description: "Services de recrutement et solutions RH pour votre entreprise",
  openGraph: {
    title: "Services de Recrutement | AURRA Communication",
    description: "Solutions de recrutement innovantes et efficaces",
    images: ["/recrutement-og.jpg"],
  },
};

import { RecrutementPage } from "./RecrutementPage";
export default RecrutementPage;
