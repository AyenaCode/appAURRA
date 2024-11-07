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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  FaBullhorn,
  FaRobot,
  FaLaptopCode,
  FaUsers,
  FaChartLine,
  FaCertificate,
  FaCalendarAlt,
  FaUserGraduate,
} from "react-icons/fa";

export const FormationPage = () => {
  const formationCategories = {
    communication: [
      {
        title: "Communication Digitale",
        duration: "5 jours",
        description: "Maîtrisez les fondamentaux de la communication digitale",
        topics: [
          "Stratégie de communication digitale",
          "Community management",
          "Content marketing",
          "Social media advertising",
        ],
      },
      {
        title: "Relations Publiques",
        duration: "3 jours",
        description: "Développez vos compétences en RP",
        topics: [
          "Stratégies RP",
          "Relations presse",
          "Gestion de crise",
          "Communication corporate",
        ],
      },
      {
        title: "Marketing Digital",
        duration: "5 jours",
        description: "Optimisez votre présence en ligne",
        topics: [
          "SEO/SEA",
          "Email marketing",
          "Analytics",
          "Marketing automation",
        ],
      },
    ],
    ia: [
      {
        title: "IA pour Entreprises",
        duration: "4 jours",
        description: "Intégrez l'IA dans votre stratégie",
        topics: [
          "Fondamentaux de l'IA",
          "ChatGPT pour entreprises",
          "Automatisation intelligente",
          "IA et productivité",
        ],
      },
      {
        title: "Data Science",
        duration: "5 jours",
        description: "Analysez vos données efficacement",
        topics: [
          "Analyse de données",
          "Visualisation",
          "Machine Learning",
          "Prédiction et modélisation",
        ],
      },
      {
        title: "IA et Marketing",
        duration: "3 jours",
        description: "Optimisez votre marketing avec l'IA",
        topics: [
          "Personnalisation",
          "Automation marketing",
          "Chatbots",
          "Analyse prédictive",
        ],
      },
    ],
    tech: [
      {
        title: "Développement Web",
        duration: "10 jours",
        description: "Créez des sites web professionnels",
        topics: ["HTML/CSS", "JavaScript", "React", "Responsive design"],
      },
      {
        title: "Design UI/UX",
        duration: "5 jours",
        description: "Concevez des interfaces utilisateur",
        topics: [
          "Principes du design",
          "Prototypage",
          "Tests utilisateurs",
          "Design system",
        ],
      },
      {
        title: "Outils Digitaux",
        duration: "3 jours",
        description: "Maîtrisez les outils essentiels",
        topics: [
          "Suite Adobe",
          "Outils collaboratifs",
          "CMS",
          "Outils d'analyse",
        ],
      },
    ],
  };

  const benefits = [
    {
      icon: FaUsers,
      title: "Formation Sur Mesure",
      description: "Programmes adaptés aux besoins de votre entreprise",
    },
    {
      icon: FaChartLine,
      title: "Expertise Pratique",
      description: "Formateurs expérimentés et cas pratiques",
    },
    {
      icon: FaCertificate,
      title: "Certification",
      description: "Certificat professionnel à la fin de la formation",
    },
    {
      icon: FaCalendarAlt,
      title: "Flexibilité",
      description: "Formations en présentiel ou à distance",
    },
  ];

  return (
    <div>
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-r from-blue-950 to-violet-950 text-white">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Centre de <Span>Formation</Span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Développez les compétences de vos équipes en communication, IA et
              technologies
            </p>
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-100">
                Demander un programme
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Nos Formations
            </h2>
            <Tabs defaultValue="communication" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="communication">
                  <FaBullhorn className="mr-2" />
                  Communication
                </TabsTrigger>
                <TabsTrigger value="ia">
                  <FaRobot className="mr-2" />
                  Intelligence Artificielle
                </TabsTrigger>
                <TabsTrigger value="tech">
                  <FaLaptopCode className="mr-2" />
                  Technologies
                </TabsTrigger>
              </TabsList>
              {Object.entries(formationCategories).map(
                ([category, formations]) => (
                  <TabsContent key={category} value={category}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {formations.map((formation, index) => (
                        <Card
                          key={index}
                          className="hover:shadow-lg transition-shadow"
                        >
                          <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                              <FaUserGraduate className="w-8 h-8 text-blue-600" />
                              <span className="text-sm text-gray-500">
                                {formation.duration}
                              </span>
                            </div>
                            <CardTitle>{formation.title}</CardTitle>
                            <CardDescription>
                              {formation.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {formation.topics.map((topic, idx) => (
                                <li key={idx} className="flex items-center">
                                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                )
              )}
            </Tabs>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Nos Avantages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-8">Formez vos équipes</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Investissez dans le développement de vos talents avec nos
              formations professionnelles sur mesure.
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
