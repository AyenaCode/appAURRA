"use client";
import { Navbar } from "@/app/_components/elements/Navbar";
import { Span } from "@/app/_components/elements/Span";
import { Footer } from "@/app/_components/pgaeSections/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section className="hero py-20 pb-2 bg-gradient-to-r from-blue-950 to-violet-950 text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">
              Contactez <Span>Nous</Span>
            </h1>
            <p className="text-xl mb-8 p-2">
              Nous sommes là pour répondre à toutes vos questions et vous aider
              à atteindre vos objectifs
            </p>
          </div>
        </section>

        <section className="contact-form p-2">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              <form className="bg-gradient-to-r from-blueColor to-violetColor hover:from-violetColor hover:to-blueColor text-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 transition-all duration-300">
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Nom
                  </label>
                  <input
                    className="shadow appearance-none border rounded bg-violet-950 w-full py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:text-white focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none bg-violet-950 border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:text-white focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Votre email"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none bg-violet-950 border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:text-white focus:bg-gray-700 focus:shadow-outline"
                    id="message"
                    placeholder="Votre message"
                    rows={6}
                  ></textarea>
                </div>
                <div className="flex items-center justify-center">
                  <Button className="bg-white text-blueColor hover:bg-gray-100">
                    Envoyer
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="contact-info bg-gradient-to-r from-violet-500 to-violet-900 py-10 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Autres façons de nous contacter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p>aurracommunication@gmail.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
                <div className="flex items-center justify-center gap-2">
                  <Link href="tel:+22890423963">+228 90 42 39 63</Link>
                  <Link href="https://wa.me/22890423963">
                    <FaWhatsapp className="w-6 h-6" />
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                <p>Online et opérationnel 24h/24</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
