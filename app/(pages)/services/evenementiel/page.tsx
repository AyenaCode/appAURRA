import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Événementiel | AURRA Communication",
  description: "Organisation et gestion d'événements professionnels",
  openGraph: {
    title: "Services Événementiels | AURRA Communication",
    description:
      "Des événements mémorables et impactants pour votre entreprise",
    images: ["/event-og.jpg"],
  },
};

import { EvenementielPage } from "./EvenementielPage";
export default EvenementielPage;
