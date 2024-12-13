import { services } from "@/app/modules/Setting";
import { Container } from "../elements/Container";
import { Span } from "../elements/Span";
import { ServiceCard } from "../marketing/ServiceCard";

export const ServiceSection = () => {
  return (
    <Container>
      <div className="my-12 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Nos <Span>Spécialités</Span>
        </h2>
        <p className="text-md md:text-xl py-4">
          Explorez notre univers et découvrez comment nous pouvons transformer
          votre communication pour révéler l'essence unique de votre marque.
          Ensemble, faisons briller votre entreprise comme jamais auparavant.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              Icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
