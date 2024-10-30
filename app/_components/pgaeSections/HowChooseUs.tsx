"use client";
import { Button } from "@/components/ui/button";
import {
  Award,
  Clock,
  HeartHandshake,
  Lightbulb,
  Target,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { Container } from "../elements/Container";
import { Span } from "../elements/Span";

interface Reason {
  icon: React.ElementType;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: Target,
    title: "Expertise Ciblée",
    description:
      "Notre équipe d'experts comprend vos besoins spécifiques et développe des solutions sur mesure pour atteindre vos objectifs.",
  },
  {
    icon: HeartHandshake,
    title: "Engagement Total",
    description:
      "Nous nous investissons pleinement dans votre réussite, en traitant chaque projet comme s'il s'agissait du nôtre.",
  },
  {
    icon: Clock,
    title: "Réactivité 24/7",
    description:
      "Notre équipe est disponible en permanence pour répondre à vos besoins et assurer le succès de vos projets.",
  },
  {
    icon: Award,
    title: "Excellence Reconnue",
    description:
      "Notre travail est reconnu pour sa qualité exceptionnelle et notre capacité à dépasser les attentes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Continue",
    description:
      "Nous restons à la pointe des dernières tendances et technologies pour vous offrir les meilleures solutions.",
  },
  {
    icon: Wallet,
    title: "Rapport Qualité-Prix",
    description:
      "Nous offrons des services premium à des tarifs compétitifs, garantissant un excellent retour sur investissement.",
  },
];

export const HowChooseUs = () => {
  return (
    <Container className="pb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pourquoi Choisir <Span>AURRA</Span> ?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez ce qui fait de nous le partenaire idéal pour propulser votre
          entreprise vers de nouveaux sommets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blueColor to-violetColor rounded-full mr-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{reason.title}</h3>
              </div>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Prêt à transformer votre vision en réalité ? Contactez-nous dès
          aujourd'hui pour une consultation gratuite et découvrez comment nous
          pouvons vous aider à atteindre vos objectifs.
        </p>
        <Link href="/contact">
          <Button className="bg-gradient-to-r from-blueColor to-violetColor hover:from-violetColor hover:to-blueColor text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Commencez Votre Transformation
          </Button>
        </Link>
      </div>
    </Container>
  );
};
