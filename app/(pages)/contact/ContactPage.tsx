"use client";
import { Navbar } from "@/app/_components/elements/Navbar";
import { Span } from "@/app/_components/elements/Span";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { toast } from "sonner";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Tous les champs sont obligatoires");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Veuillez entrer une adresse email valide");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message envoyé avec succès!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        toast.error(data.error || "Erreur lors de l'envoi du message");
      }
    } catch (error) {
      console.error("Erreur:", error);
      toast.error("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />

      <section className="hero py-20 pb-2 bg-gradient-to-r from-blue-950 to-violet-950 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Contactez <Span>Nous</Span>
          </h1>
          <p className="text-xl mb-8 p-2">
            Nous sommes là pour répondre à toutes vos questions et vous aider à
            atteindre vos objectifs
          </p>
        </div>
      </section>

      <section className="contact-form p-2">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-r from-blueColor to-violetColor hover:from-violetColor hover:to-blueColor text-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 transition-all duration-300"
            >
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">
                  Nom
                </label>
                <input
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded bg-violet-950 w-full py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:text-white focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  className="shadow appearance-none bg-violet-950 border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:text-white focus:bg-gray-700 focus:shadow-outline"
                  id="message"
                  placeholder="Votre message"
                  rows={6}
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-white text-blueColor hover:bg-gray-100 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
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
              <Link href="mailto:aurracommunication@gmail.com">
                aurracommunication@gmail.com
              </Link>
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
    </div>
  );
};
