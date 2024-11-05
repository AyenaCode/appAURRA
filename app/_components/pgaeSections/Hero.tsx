"use client";
import { Span } from "@/app/_components/elements/Span";
import bgImage from "@/app/assets/BgImages/background.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10" />
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="AURRA Communication background"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-20 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl px-10 font-extrabold mb-6 leading-tight text-white animate-fadeIn">
          AURRA <Span className="brightness-150">Communication</Span>, votre
          Marketing <Span className="brightness-150">digital </Span>
          réussi
        </h1>

        <div
          className="max-w-4xl mx-auto my-16 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative min-h-[200px] md:min-h-[150px]">
            {/* Premier paragraphe */}
            <div
              className={`absolute inset-0 p-6 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 
                transition-all duration-500 ease-in-out
                ${
                  isHovered
                    ? "opacity-0 translate-y-[-20px]"
                    : "opacity-100 translate-y-0"
                }`}
            >
              <p className="md:text-xl text-gray-100 leading-relaxed">
                Nous sommes ravis de vous accueillir sur notre site. Chez Aurra{" "}
                <Span className="font-semibold">Communication</Span>, nous
                croyons en la magie de chaque marque et nous nous engageons à
                illuminer la présence de la vôtre.
              </p>
            </div>

            {/* Second paragraphe */}
            <div
              className={`absolute inset-0 p-6 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 
                transition-all duration-500 ease-in-out
                ${
                  isHovered
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[20px]"
                }`}
            >
              <p className="md:text-xl text-gray-100 leading-relaxed">
                Notre équipe passionnée et dévouée travaille sans relâche pour
                créer des stratégies de communication{" "}
                <Span className="font-semibold">innovantes</Span> et
                personnalisées , conçues pour captiver votre public et renforcer
                votre position sur le marché.
              </p>
            </div>
          </div>
        </div>

        <Link href="/contact">
          <Button
            className="bg-gradient-to-r from-blueColor to-violetColor p-6 text-lg 
              transform hover:scale-105 transition-all duration-500 
              hover:shadow-lg hover:shadow-violetColor/20
              animate-slideUp"
          >
            Obtenez votre devis gratuit
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
