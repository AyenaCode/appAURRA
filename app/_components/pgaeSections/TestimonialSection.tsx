import { TestimonialCard } from "../elements/TestimonialCard";

export const TestimonialSection = () => {
  const testimonials = [
    {
      text: "Grâce à leur expertise en SEO, notre trafic organique a augmenté de 200% en seulement 6 mois !",
      author: "Marie D.",
      role: "PDG de TechSolutions",
      portrait: "/t2.webp",
    },
    {
      text: "Leur équipe a transformé notre présence sur les réseaux sociaux. Nos ventes en ligne ont explosé !",
      author: "Thomas L.",
      role: "Directeur Marketing chez FashionBrand",
      portrait: "/t1.webp",
    },
    {
      text: "Un partenaire de confiance qui comprend vraiment nos besoins et livre des résultats exceptionnels.",
      author: "Sophie M.",
      role: "Fondatrice de GreenStartup",
      portrait: "/t3.webp",
    },
  ];

  return (
    <section className="testimonials bg-base-200 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-base-content">
          Ce que disent nos clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              author={testimonial.author}
              role={testimonial.role}
              portrait={testimonial.portrait}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
