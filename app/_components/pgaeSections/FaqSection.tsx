import { FaqCard } from "../elements/FaqCard";

export const FaqSection = () => {
  const faqs: { question: string; answer: string }[] = [
    {
      question: "Quels services offrez-vous ?",
      answer:
        "Nous proposons une gamme complète de services, y compris le marketing digital, la conception graphique, la gestion des réseaux sociaux...",
    },
    {
      question: "Comment puis-je vous contacter ?",
      answer:
        "Vous pouvez nous contacter via notre formulaire de contact en ligne ou par téléphone au +228 90 42 39 63.",
    },
    {
      question: "Quels sont vos tarifs ?",
      answer:
        "Nos tarifs varient selon les services proposés et les besoins spécifiques de chaque client. Contactez-nous pour un devis personnalisé.",
    },
    {
      question: "Quelle est votre politique de confidentialité ?",
      answer:
        "Notre politique de confidentialité garantit que vos données sont sécurisées et ne seront jamais partagées sans votre consentement.",
    },
  ];

  return (
    <section id="faq" className="px-4 md:px-8 py-8">
      <h2 className="text-center text-2xl font-bold mb-8">
        FAQ - Questions Fréquentes
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FaqCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};
