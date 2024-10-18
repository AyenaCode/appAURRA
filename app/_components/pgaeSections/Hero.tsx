import { Span } from "@/app/_components/elements/Span";
import bgImage from "@/app/assets/BgImages/background.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Overlay sombre pour améliorer la lisibilité du texte */}
    <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
    <div className="absolute inset-0">
      <Image
        src={bgImage}
        alt="AURRA Communication background"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />
    </div>
    <div className="container mx-auto text-center relative z-20 px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl px-10 font-extrabold mb-6 leading-tight text-white">
        AURRA{" "}
        <Span className="text-transparent brightness-150">Communication</Span>,
        votre Marketing{" "}
        <Span className="text-transparent brightness-150">digital </Span>
        réussi
      </h1>
      <div>
        <p className="text-lg shadowText sm:text-xl md:text-2xl text-gray-100">
          Propulsez votre entreprise vers de nouveaux sommets avec nos solutions
          de marketing digital sur mesure
        </p>
        <div className="mt-4">
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-blueColor to-violetColor p-6 text-lg">
              Obtenez votre devis gratuit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
