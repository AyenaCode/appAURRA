import { Button } from "@/components/ui/button";
import Link from "next/link";

const notFound = () => {
  return (
    <div className="text-muted-foreground bg-primary/10 h-[70vh] flex flex-col items-center justify-center shadow-2xl rounded-xl mt-20 mx-10 md:mx-20 gap-6">
      <h1 className="text-4xl font-bold">Page non trouvée</h1>
      <p className="inline-block">
        Désolé, la page que vous cherchez n'existe pas.
      </p>
      <Link className="mt-4 inline-block" href="/">
        <Button className="shadow-2xl">Retour à l'accueil</Button>
      </Link>
    </div>
  );
};

export default notFound;
