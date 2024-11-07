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
  FaCalendarAlt,
  FaUserTie,
  FaHandshake,
  FaGlassCheers,
  FaMicrophone,
  FaCameraRetro,
} from "react-icons/fa";

export const EvenementielPage = () => {
  const services = [
    {
      icon: FaCalendarAlt,
      title: "Événements Corporate",
      description: "Organisation d'événements professionnels",
      features: [
        "Séminaires d'entreprise",
        "Conférences",
        "Lancements de produits",
        "Team building",
      ],
    },
    {
      icon: FaUserTie,
      title: "Événements Networking",
      description: "Création d'opportunités de réseautage",
      features: [
        "Cocktails d'affaires",
        "Soirées networking",
        "Forums professionnels",
        "Rencontres B2B",
      ],
    },
    {
      icon: FaMicrophone,
      title: "Conférences & Workshops",
      description: "Organisation d'événements formatifs",
      features: [
        "Conférences thématiques",
        "Ateliers pratiques",
        "Formations professionnelles",
        "Tables rondes",
      ],
    },
    {
      icon: FaCameraRetro,
      title: "Couverture Médiatique",
      description: "Documentation de vos événements",
      features: [
        "Photographie professionnelle",
        "Captation vidéo",
        "Live streaming",
        "Montage post-événement",
      ],
    },
    {
      icon: FaHandshake,
      title: "Gestion Complète",
      description: "Service clé en main pour vos événements",
      features: [
        "Planification détaillée",
        "Gestion logistique",
        "Coordination fournisseurs",
        "Gestion sur site",
      ],
    },
    {
      icon: FaGlassCheers,
      title: "Événements Sur Mesure",
      description: "Solutions personnalisées selon vos besoins",
      features: [
        "Concepts créatifs",
        "Scénographie",
        "Animation",
        "Expériences uniques",
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
              Services <Span>Événementiels</Span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Créez des moments mémorables et impactants pour votre entreprise
            </p>
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-100">
                Organiser mon événement
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
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

        <section className="py-20 bg-white">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-8">
              Un événement à organiser ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discutons de votre projet et créons ensemble un événement qui
              marquera les esprits.
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
