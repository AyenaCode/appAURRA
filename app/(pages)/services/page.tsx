"use client";
import { Navbar } from "@/app/_components/elements/Navbar";
import { ServiceCardElement } from "@/app/_components/elements/ServiceCard";
import { Span } from "@/app/_components/elements/Span";
import { Footer } from "@/app/_components/pgaeSections/Footer";
import { services } from "@/app/modules/Setting";
import Link from "next/link";
import { FaChartLine, FaRocket, FaUsers } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-r from-blue-950 to-violet-950 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Nos <Span>solutions</Span> sur mesure
            </h1>
            <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
              Propulsez votre entreprise vers de nouveaux sommets avec nos
              solutions de marketing digital expertes et personnalisées.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
              >
                Obtenez votre stratégie personnalisée
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Nos Services Détaillés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <ServiceCardElement
                    key={index}
                    title={service.title}
                    description={service.description}
                    Icon={IconComponent}
                    detailLink={`/services/${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Pourquoi choisir nos services ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FaRocket,
                  title: "Expertise Pointue",
                  description:
                    "Notre équipe d'experts maîtrise les dernières tendances et technologies du marketing digital.",
                },
                {
                  icon: FaChartLine,
                  title: "Résultats Mesurables",
                  description:
                    "Nous nous engageons à fournir des résultats concrets et mesurables pour votre entreprise.",
                },
                {
                  icon: FaUsers,
                  title: "Approche Personnalisée",
                  description:
                    "Chaque stratégie est conçue sur mesure pour répondre à vos objectifs spécifiques.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-1"
                >
                  <item.icon className="text-5xl mb-4 text-blue-600 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à transformer votre présence en ligne ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ne laissez pas passer l&apos;opportunité de dominer votre marché.
              Contactez-nous dès aujourd&apos;hui pour une consultation gratuite
              et découvrez comment nos services peuvent propulser votre
              entreprise vers le succès.
            </p>
            <div>
              <Link
                href="/contact"
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
              >
                Commencez votre transformation digitale
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
