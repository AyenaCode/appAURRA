import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Graphique | AURRA Communication",
  description:
    "Services de design graphique et création visuelle professionnelle",
  openGraph: {
    title: "Services de Design Graphique | AURRA Communication",
    description: "Solutions créatives pour votre identité visuelle",
    images: ["/graphisme-og.jpg"],
  },
};

import { GraphismePage } from "./GraphismePage";
export default GraphismePage;
