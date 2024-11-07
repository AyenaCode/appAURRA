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
import {
  FaSearchDollar,
  FaEnvelope,
  FaChartLine,
  FaBullhorn,
  FaMobileAlt,
  FaRegChartBar,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

export const MarketingDigitalPage = () => {
  const services = [
    {
      icon: FaSearchDollar,
      title: "SEA & Google Ads",
      description: "Campagnes publicitaires performantes",
      features: [
        "Stratégie de mots-clés",
        "Optimisation des conversions",
        "Gestion des enchères",
        "Retargeting",
      ],
    },
    {
      icon: FaBullhorn,
      title: "Social Media Ads",
      description: "Publicités sur réseaux sociaux",
      features: [
        "Facebook & Instagram Ads",
        "LinkedIn Ads",
        "Ciblage précis",
        "Optimisation ROI",
      ],
    },
    {
      icon: FaEnvelope,
      title: "Email Marketing",
      description: "Stratégies d'emailing efficaces",
      features: [
        "Newsletters personnalisées",
        "Automation marketing",
        "Segmentation",
        "A/B testing",
      ],
    },
    {
      icon: FaMobileAlt,
      title: "Marketing Mobile",
      description: "Solutions marketing mobile",
      features: [
        "SMS Marketing",
        "Push notifications",
        "App marketing",
        "Géolocalisation",
      ],
    },
    {
      icon: FaRegChartBar,
      title: "Analytics & Data",
      description: "Analyse et optimisation",
      features: [
        "Google Analytics",
        "Rapports personnalisés",
        "KPIs tracking",
        "Recommandations",
      ],
    },
    {
      icon: FaChartLine,
      title: "Growth Marketing",
      description: "Stratégies de croissance",
      features: [
        "Acquisition clients",
        "Optimisation conversion",
        "Fidélisation",
        "Marketing automation",
      ],
    },
  ];

  const processSteps = [
    {
      icon: FaUsers,
      title: "Analyse & Audit",
      description:
        "Étude approfondie de votre marché, concurrence et objectifs",
    },
    {
      icon: FaChartLine,
      title: "Stratégie",
      description: "Élaboration d'une stratégie marketing personnalisée",
    },
    {
      icon: FaBullhorn,
      title: "Déploiement",
      description: "Mise en place des campagnes et actions marketing",
    },
    {
      icon: FaRocket,
      title: "Optimisation",
      description: "Suivi, analyse et optimisation continue des performances",
    },
  ];

  return (
    <div>
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-r from-blue-950 to-violet-950 text-white">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Marketing <Span>Digital</Span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Boostez votre présence en ligne et maximisez vos conversions avec
              nos stratégies marketing digitales
            </p>
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-100">
                Démarrer votre stratégie
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Nos Services Marketing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Notre Processus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow relative"
                >
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-600" />
                  )}
                  <CardHeader>
                    <step.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600 to-violet-600 text-white">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-8">
              Prêt à Booster Votre Présence Digitale ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Obtenez une stratégie marketing personnalisée qui correspond à vos
              objectifs commerciaux.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-100">
                Demander un audit gratuit
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-8">
              Pourquoi Choisir Notre Expertise ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  +150%
                </div>
                <p>Augmentation moyenne du trafic</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  +80%
                </div>
                <p>Amélioration du taux de conversion</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  +200%
                </div>
                <p>Retour sur investissement moyen</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
