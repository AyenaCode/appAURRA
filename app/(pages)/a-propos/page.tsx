"use client";
import { Navbar } from "@/app/_components/elements/Navbar";
import { Span } from "@/app/_components/elements/Span";
import { Footer } from "@/app/_components/pgaeSections/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className = "" }: SectionProps) => {
  return (
    <div className={`transition-all duration-500 ${className}`}>{children}</div>
  );
};

const APropos = () => {
  return (
    <div className="bg-base-100">
      <Navbar />
      <section className="bg-gradient-to-b from-blue-950 to-violet-950 text-white py-20">
        <div className="mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            À Propos de <Span>Nous</Span>
          </h1>
          <p className="text-xl mb-8">
            Découvrez l&apos;équipe passionnée derrière vos succès en marketing
            digital
          </p>
        </div>
      </section>

      <Section className="py-20">
        <div className="mx-auto px-4 md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Qui somme nous ?</h2>
              <p className="mb-4">
                Aurra Communication est une agence innovante spécialisée dans la
                communication, l'organisation événementielle et les services
                d'emploi. Notre équipe de passionnés se consacre à révéler
                l'unicité de chaque marque à travers des stratégies de
                communication créatives et personnalisées.
              </p>
              <p>
                Nous nous distinguons par notre approche authentique et
                créative, visant à établir des connexions durables avec votre
                public cible. En collaboration étroite avec vous, nous élaborons
                des solutions sur mesure qui captivent, engagent et
                convertissent.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Notre Vision</h2>
              <p className="mb-4">
                Notre vision est de transformer la communication des entreprises
                en offrant des compétences concrètes pour obtenir des résultats
                tangibles, en particulier pour les petites entreprises cherchant
                à augmenter leur chiffre d&apos;affaires.
              </p>
              <p>
                Nous croyons en la puissance de la créativité, de la technologie
                et de l&apos;analyse pour créer des campagnes qui génèrent des
                résultats tangibles et durables.
              </p>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Notre équipe</h2>
          <p>
            Nous avons une équipe d'experts passionnés et compétents, prêts à
            répondre à tous vos besoins, qu'ils soient en communication
            digitale, en événementiel, ou en gestion des ressources humaines.
            Chaque membre de notre équipe apporte une expertise unique et un
            savoir-faire éprouvé, garantissant des solutions innovantes et
            efficaces pour votre entreprise. Ensemble, nous travaillons avec
            détermination et créativité pour propulser votre marque vers de
            nouveaux sommets. Une équipe jeune et dynamique, à l’écoute,
            toujours prête à proposer le meilleur au plus simple.
          </p>
        </div>
      </Section>

      <section className="bg-gradient-to-r from-blueColor to-violetColor text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">
            Prêt à travailler avec nous ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Découvrez comment notre expertise peut transformer votre présence en
            ligne.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blueColor hover:bg-gray-100">
              Contactez-nous maintenant
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default APropos;
