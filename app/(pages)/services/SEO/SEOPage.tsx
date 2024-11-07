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
import { FaSearch, FaChartLine, FaLink, FaPencilAlt } from "react-icons/fa";

export const SEOPage = () => {
  const services = [
    {
      icon: FaSearch,
      title: "Audit SEO",
      description: "Analyse complète de votre présence en ligne",
      features: [
        "Analyse technique du site",
        "Étude des mots-clés",
        "Analyse de la concurrence",
        "Recommandations détaillées",
      ],
    },
    {
      icon: FaPencilAlt,
      title: "Optimisation On-Page",
      description: "Optimisation technique de votre site web",
      features: [
        "Structure du site",
        "Optimisation du contenu",
        "Balises meta",
        "Performance technique",
      ],
    },
    {
      icon: FaLink,
      title: "Stratégie de Linking",
      description: "Développement de votre autorité en ligne",
      features: [
        "Netlinking qualitatif",
        "Liens internes",
        "Citations locales",
        "Création de contenu",
      ],
    },
    {
      icon: FaChartLine,
      title: "Suivi et Reporting",
      description: "Analyse et optimisation continue",
      features: [
        "Rapports mensuels",
        "Suivi des positions",
        "Analyse du trafic",
        "Recommandations d'amélioration",
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
              Optimisation <Span>SEO</Span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Améliorez votre visibilité sur les moteurs de recherche et attirez
              plus de visiteurs qualifiés
            </p>
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-100">
                Audit SEO Gratuit
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
              Prêt à améliorer votre visibilité en ligne ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une analyse gratuite de votre site et
              découvrez votre potentiel d'amélioration.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-violet-600 hover:to-blue-600">
                Demander mon audit gratuit
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
