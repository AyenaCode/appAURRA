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
  FaUserTie,
  FaSearch,
  FaClipboardCheck,
  FaChartLine,
  FaGraduationCap,
  FaHandshake,
} from "react-icons/fa";

export const RecrutementPage = () => {
  const services = [
    {
      icon: FaSearch,
      title: "Recherche de Talents",
      description: "Identification des meilleurs profils",
      features: [
        "Analyse des besoins",
        "Sourcing ciblé",
        "Présélection rigoureuse",
        "Base de données qualifiée",
      ],
    },
    {
      icon: FaClipboardCheck,
      title: "Processus de Sélection",
      description: "Évaluation approfondie des candidats",
      features: [
        "Entretiens structurés",
        "Tests de compétences",
        "Vérification des références",
        "Évaluation comportementale",
      ],
    },
    {
      icon: FaUserTie,
      title: "Recrutement Cadres",
      description: "Recrutement de profils stratégiques",
      features: [
        "Chasse de têtes",
        "Approche directe",
        "Postes de direction",
        "Profils experts",
      ],
    },
    {
      icon: FaGraduationCap,
      title: "Recrutement Jeunes Diplômés",
      description: "Identification des talents émergents",
      features: [
        "Partenariats écoles",
        "Stages qualifiants",
        "Programmes graduates",
        "Assessment center",
      ],
    },
    {
      icon: FaHandshake,
      title: "Accompagnement RH",
      description: "Support complet en ressources humaines",
      features: [
        "Conseil RH",
        "Définition de poste",
        "Grilles salariales",
        "Intégration",
      ],
    },
    {
      icon: FaChartLine,
      title: "Suivi & Reporting",
      description: "Pilotage des recrutements",
      features: [
        "Tableaux de bord",
        "KPIs de recrutement",
        "Suivi de performance",
        "Rapports détaillés",
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
              Services de <Span>Recrutement</Span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Trouvez les talents qui feront la différence pour votre entreprise
            </p>
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-100">
                Démarrer un recrutement
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
              Besoin de renforcer vos équipes ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discutons de vos besoins en recrutement et trouvons ensemble les
              talents qui correspondent à votre entreprise
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
