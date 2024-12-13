"use client";
import { Navbar } from "@/app/_components/elements/Navbar";
import { Span } from "@/app/_components/elements/Span";
import { Footer } from "@/app/_components/pgaeSections/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaBullhorn, FaGlobe, FaShareAlt } from "react-icons/fa";

export const CommunicationPage = () => {
  const services = [
    {
      icon: FaShareAlt,
      title: "Stratégie de communication",
      description:
        "Plans de communication sur mesure alignés avec vos objectifs commerciaux",
      features: [
        "Analyse de marché",
        "Positionnement de marque",
        "Plan de communication",
        "KPIs et mesures de performance",
      ],
    },
    {
      icon: FaBullhorn,
      title: "Contenu et réseaux sociaux",
      description: "Création de contenu engageant pour vos réseaux sociaux",
      features: [
        "Gestion des réseaux sociaux",
        "Création de contenu",
        "Calendrier éditorial",
        "Analyse des performances",
      ],
    },
    {
      icon: FaGlobe,
      title: "Marketing digital",
      description: "Stratégies digitales pour augmenter votre visibilité",
      features: [
        "Campagnes publicitaires",
        "Marketing d'influence",
        "Email marketing",
        "Analytics et reporting",
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
              Services de <Span>Communication</Span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Transformez votre présence digitale avec nos solutions de
              communication stratégiques et personnalisées
            </p>
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-100">
                Demander un devis gratuit
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
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
              Prêt à transformer votre communication ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et
              découvrez comment nous pouvons vous aider.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-violet-600 hover:to-blue-600">
                Commencer maintenant
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
