import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Découvrez nos services de communication digitale, événementielle et de recrutement. Solutions sur mesure pour votre entreprise.",
  openGraph: {
    title: "Services | AURRA Communication",
    description:
      "Solutions de communication digitale, événementielle et services d'emploi sur mesure",
    images: ["/services-og.jpg"],
  },
};

import { ServicesPage } from "./ServicesPage";
export default ServicesPage;
