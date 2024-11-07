import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Communication | AURRA Communication",
  description:
    "Découvrez nos services de communication digitale et stratégique",
  openGraph: {
    title: "Services de Communication | AURRA Communication",
    description: "Stratégie de communication et gestion des réseaux sociaux",
    images: ["/communication-og.jpg"],
  },
};

import { CommunicationPage } from "./CommunicationPage";
export default CommunicationPage;
