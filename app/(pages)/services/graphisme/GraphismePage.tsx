"use client";
import { Footer } from "@/app/_components/pgaeSections/Footer";
import { Navbar } from "@/app/_components/elements/Navbar";
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
  FaBookOpen,
  FaCamera,
  FaFilm,
  FaImage,
  FaLayerGroup,
  FaMicrophone,
  FaMusic,
  FaPalette,
  FaPhotoVideo,
  FaRegObjectGroup,
  FaVideo,
} from "react-icons/fa";
import { ImVideoCamera } from "react-icons/im";

export const GraphismePage = () => {
  const services = {
    graphisme: [
      {
        icon: FaPalette,
        title: "Identité Visuelle",
        description: "Création d'une image de marque distinctive",
        features: [
          "Création de logo",
          "Charte graphique",
          "Typographie",
          "Palette de couleurs",
        ],
      },
      {
        icon: FaImage,
        title: "Design Marketing",
        description: "Supports marketing impactants",
        features: [
          "Posts réseaux sociaux",
          "Bannières publicitaires",
          "Affiches",
          "Flyers et brochures",
        ],
      },
      {
        icon: FaBookOpen,
        title: "Édition",
        description: "Mise en page professionnelle",
        features: [
          "Catalogues produits",
          "Magazines",
          "Rapports annuels",
          "Livres blancs",
        ],
      },
      {
        icon: FaLayerGroup,
        title: "Design UI/UX",
        description: "Interfaces utilisateur modernes",
        features: [
          "Design d'applications",
          "Interfaces web",
          "Prototypage",
          "Design responsive",
        ],
      },
    ],
    video: [
      {
        icon: FaVideo,
        title: "Production Vidéo",
        description: "Création de contenu vidéo professionnel",
        features: [
          "Films d'entreprise",
          "Spots publicitaires",
          "Vidéos promotionnelles",
          "Teasers",
        ],
      },
      {
        icon: FaFilm,
        title: "Montage Vidéo",
        description: "Post-production et montage",
        features: [
          "Montage créatif",
          "Effets spéciaux",
          "Color grading",
          "Sound design",
        ],
      },
      {
        icon: ImVideoCamera,
        title: "Prises de Vue",
        description: "Captation vidéo professionnelle",
        features: [
          "Prises de vue drone",
          "Caméra 4K/8K",
          "Slow motion",
          "Time-lapse",
        ],
      },
      {
        icon: FaMicrophone,
        title: "Production Audio",
        description: "Solutions audio complètes",
        features: [
          "Voix off",
          "Sound design",
          "Musique originale",
          "Mix audio",
        ],
      },
    ],
    animation: [
      {
        icon: FaPhotoVideo,
        title: "Motion Design",
        description: "Animation et contenu dynamique",
        features: [
          "Animations logo",
          "Stories Instagram",
          "Posts animés",
          "Vidéos explicatives",
        ],
      },
      {
        icon: FaRegObjectGroup,
        title: "Animation 2D/3D",
        description: "Créations animées",
        features: [
          "Animation 2D",
          "Modélisation 3D",
          "Character animation",
          "Effets visuels",
        ],
      },
      {
        icon: FaMusic,
        title: "Animation Social Media",
        description: "Contenu animé pour réseaux sociaux",
        features: ["Reels Instagram", "TikTok", "Stories animées", "GIFs"],
      },
      {
        icon: FaCamera,
        title: "Stop Motion",
        description: "Animation image par image",
        features: [
          "Animation produits",
          "Vidéos créatives",
          "Contenu original",
          "Storytelling visuel",
        ],
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-r from-blue-950 to-violet-950 text-white">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Studio <Span>Créatif</Span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              De la conception graphique à la production audiovisuelle, donnez
              vie à vos projets créatifs
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
            <h2 className="text-3xl font-bold mb-12 text-center">
              Nos Services Créatifs
            </h2>
            <Tabs defaultValue="graphisme" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="graphisme">
                  <FaPalette className="mr-2" />
                  Design Graphique
                </TabsTrigger>
                <TabsTrigger value="video">
                  <FaVideo className="mr-2" />
                  Production Vidéo
                </TabsTrigger>
                <TabsTrigger value="animation">
                  <FaPhotoVideo className="mr-2" />
                  Animation
                </TabsTrigger>
              </TabsList>

              {Object.entries(services).map(([category, items]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((service, index) => (
                      <Card
                        key={index}
                        className="hover:shadow-lg transition-shadow"
                      >
                        <CardHeader>
                          <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                          <CardTitle>{service.title}</CardTitle>
                          <CardDescription>
                            {service.description}
                          </CardDescription>
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
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-8">
              Un Projet Créatif en Tête ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              De la conception à la réalisation, notre équipe vous accompagne
              dans tous vos projets créatifs.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-violet-600 hover:to-blue-600">
                Discuter de votre projet
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
