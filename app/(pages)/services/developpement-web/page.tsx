import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Développement Web | AURRA Communication",
  description:
    "Solutions de développement web sur mesure pour votre entreprise",
  openGraph: {
    title: "Développement Web | AURRA Communication",
    description: "Sites web et applications sur mesure",
    images: ["/dev-web-og.jpg"],
  },
};

import { DeveloppementWebPage } from "./DeveloppementWebPage";
export default DeveloppementWebPage;
