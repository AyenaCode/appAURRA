import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Digital | AURRA Communication",
  description: "Solutions complètes de marketing digital pour votre entreprise",
  openGraph: {
    title: "Marketing Digital | AURRA Communication",
    description: "Stratégies marketing digital innovantes et performantes",
    images: ["/marketing-digital-og.jpg"],
  },
};

import { MarketingDigitalPage } from "./MarketingDigitalPage";
export default MarketingDigitalPage;
