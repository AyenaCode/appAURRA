"use client";
import { Navbar } from "@/app/_components/elements/Navbar";
import { Footer } from "@/app/_components/pgaeSections/Footer";
import { Span } from "@/app/_components/elements/Span";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaCode, FaMobile, FaShoppingCart, FaWordpress } from "react-icons/fa";

export const DeveloppementWebPage = () => {
  const services = [
    {
      icon: FaCode,
      title: "Sites Web Sur Mesure",
      description: "Développement de sites web personnalisés et performants",
      features: [
        "Design responsive",
        "Performance optimisée",
        "Interface utilisateur moderne",
        "Solutions évolutives",
      ],
    },
    {
      icon: FaMobile,
      title: "Applications Web",
      description: "Applications web progressives et dynamiques",
      features: [
        "Applications PWA",
        "Interfaces interactives",
        "Synchronisation en temps réel",
        "Expérience utilisateur optimale",
      ],
    },
    {
      icon: FaShoppingCart,
      title: "E-commerce",
      description: "Solutions e-commerce complètes",
      features: [
        "Boutiques en ligne",
        "Systèmes de paiement",
        "Gestion des stocks",
        "Tableau de bord admin",
      ],
    },
    {
      icon: FaWordpress,
      title: "CMS & Wordpress",
      description: "Sites web avec systèmes de gestion de contenu",
      features: [
        "Sites Wordpress",
        "Thèmes personnalisés",
        "Extensions sur mesure",
        "Maintenance et support",
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-r from-blue-950 to-violet-950 text-white">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solutions de <Span>Développement Web</Span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Des solutions web innovantes et performantes pour digitaliser
              votre entreprise
            </p>
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-100">
                Démarrer votre projet
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-8">
              Prêt à lancer votre projet web ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discutons de votre projet et trouvons la meilleure solution pour
              votre entreprise.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-violet-600 hover:to-blue-600">
                Contactez-nous
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
