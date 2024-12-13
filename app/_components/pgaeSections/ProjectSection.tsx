"use client";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState, type JSX } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Card } from "../elements/Card";
import { Span } from "../elements/Span";
import { StatisticsSection } from "../marketing/Satatistic";

interface Project {
  title: string;
  description: JSX.Element;
  image: string;
}

const projects: Project[] = [
  {
    title: "Campagne de marketing digital : +50% de ventes en 3 mois",
    description: (
      <>
        Découvrez comment nous avons propulsé les ventes de{" "}
        <Span className="font-semibold">TechInnovate</Span> grâce à une
        stratégie multi-canal innovante, combinant SEO, publicité ciblée et
        marketing de contenu. Résultat : une augmentation spectaculaire des
        ventes de 50% en seulement un trimestre.
      </>
    ),
    image: "/img4.jpg",
  },
  {
    title: "Refonte de site web : Trafic x3 et taux de conversion doublé",
    description: (
      <>
        Notre refonte complète du site de{" "}
        <Span className="font-semibold">GreenEco Solutions</Span> a non
        seulement triplé le trafic organique, mais a aussi doublé le taux de
        conversion. Apprenez comment notre approche centrée sur
        l&apos;utilisateur et optimisée pour le SEO a transformé leur présence
        en ligne.
      </>
    ),
    image: "/img-site.webp",
  },
  {
    title: "Stratégie de contenu : Engagement client multiplié par 5",
    description: (
      <>
        Grâce à notre stratégie de contenu sur mesure,{" "}
        <Span className="font-semibold">FitLife Nutrition</Span> a vu son
        engagement client exploser. Découvrez comment notre approche data-driven
        a permis de créer du contenu viral, augmentant la visibilité de la
        marque et générant un flux constant de leads qualifiés.
      </>
    ),
    image: "/contenu.webp",
  },
  {
    title: "Communication mode : De marque locale à icône nationale",
    description: (
      <>
        Voyez comment nous avons transformé{" "}
        <Span className="font-semibold">Urban Chic</Span>, une marque de mode
        locale, en un nom reconnu nationalement. Notre campagne intégrée, mêlant
        influenceurs, événements exclusifs et contenu engageant, a propulsé
        Urban Chic sur le devant de la scène fashion.
      </>
    ),
    image: "/fashion.webp",
  },
  {
    title: "App mobile : 1 million de téléchargements en 6 mois",
    description: (
      <>
        De la conception à la stratégie de lancement, découvrez comment notre
        expertise a permis à l&apos;application de{" "}
        <Span className="font-semibold">MindfulMoments</Span> d&apos;atteindre
        le million de téléchargements en un temps record. Un cas d&apos;étude
        parfait sur l&apos;importance d&apos;une UX fluide et d&apos;un
        marketing d&apos;app performant.
      </>
    ),
    image: "/out-0.webp",
  },
  {
    title: "Campagne B2B : +200% de leads qualifiés",
    description: (
      <>
        Notre approche sur mesure pour{" "}
        <Span className="font-semibold">IndustrialPro Solutions</Span> a
        révolutionné leur pipeline de vente B2B. Apprenez comment notre mix de
        marketing de contenu, d&apos;automation et de nurturing a plus que
        doublé leur génération de leads qualifiés, transformant leur processus
        de vente.
      </>
    ),
    image: "/img9.jpg",
  },
];

const useAutoSlide = (
  totalSlides: number,
  slidesToShow: number,
  interval: number,
  isPaused: boolean
) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesToShow >= totalSlides ? 0 : prevIndex + 1
    );
  }, [totalSlides, slidesToShow]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [nextSlide, interval, isPaused]);

  return { currentIndex, setCurrentIndex, nextSlide };
};

export const ProjectSection = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const { currentIndex, setCurrentIndex, nextSlide } = useAutoSlide(
    projects.length,
    slidesToShow,
    3000,
    isPaused
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - slidesToShow : prevIndex - 1
    );
  };

  return (
    <section
      id="projects"
      className="py-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <StatisticsSection />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 relative inline-block pt-8">
            Nos Réalisations Exceptionnelles
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 mt-4">
            Plongez dans nos success stories et découvrez comment nous
            transformons les défis en opportunités de croissance.
          </p>
        </div>

        <div
          className="mt-16 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / slidesToShow)
                }%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="px-2">
                    <Card
                      title={project.title}
                      description={project.description}
                      image={project.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        <div className="text-center mt-16">
          <Button className="bg-blueColor/80 hover:bg-blueColor p-5 rounded-none">
            Propulsez Votre Projet avec Nous
          </Button>
        </div>
      </div>

      {/* Éléments de design en arrière-plan */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-blueColor rounded-full opacity-20" />
      <div className="absolute opacity-0 md:opacity-20 bottom-3/4 -right-10 w-64 h-64 bg-blueColor rounded-full" />
      <div className="absolute opacity-0 md:opacity-20 bottom-30 left-10 w-32 h-32 bg-blueColor rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violetColor opacity-20 rounded-full" />
    </section>
  );
};
