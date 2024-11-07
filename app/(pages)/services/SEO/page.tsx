import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO | AURRA Communication",
  description: "Optimisation SEO et visibilité sur les moteurs de recherche",
  openGraph: {
    title: "Services SEO | AURRA Communication",
    description:
      "Améliorez votre référencement naturel et votre visibilité en ligne",
    images: ["/seo-og.jpg"],
  },
};

import { SEOPage } from "./SEOPage";
export default SEOPage;
