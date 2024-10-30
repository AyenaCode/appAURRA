export const siteConfig = {
  name: "AURRA Communication",
  description:
    "Agence de communication digitale, événementielle et services d'emploi",
  url: "https://aurracommunication.com",
  ogImage: "/og.jpg", // Ajoutez une image OG par défaut
  links: {
    facebook: "https://www.facebook.com/people/AURRA-COM/61562884277635",
    twitter: "https://x.com/Aurracom",
    linkedin: "http://www.linkedin.com/in/aurra-com-6930b7327",
    instagram: "https://www.instagram.com/aurra.com228",
    youtube: "https://www.youtube.com/@aurracommunication",
    pinterest: "https://pin.it/313mw4C1b",
    whatsapp: "https://wa.me/22890423963",
  },
};

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "communication digitale",
    "marketing digital",
    "événementiel",
    "recrutement",
    "formation",
    "Togo",
    "Afrique",
  ],
  authors: [{ name: "AURRA Communication" }],
  creator: "AURRA Communication",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@Aurracom",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
