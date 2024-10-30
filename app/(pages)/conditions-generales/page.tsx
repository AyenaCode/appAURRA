import { Navbar } from "@/app/_components/elements/Navbar";
import { Span } from "@/app/_components/elements/Span";
import { Footer } from "@/app/_components/pgaeSections/Footer";

const ConditionsGenerales = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-r from-blue-950 to-violet-950 text-white">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Conditions <Span>Générales</Span>
            </h1>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="mb-8 text-gray-700">
              Les présentes conditions générales régissent l&apos;utilisation
              des services fournis par Aurra Communication. En utilisant nos
              services, vous acceptez d&apos;être lié par ces conditions.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  1. Services Proposés
                </h2>
                <p className="text-gray-700">
                  Aurra Communication propose des services de communication,
                  marketing digital, et événementiel. La nature exacte des
                  services sera détaillée dans un devis ou une proposition
                  commerciale spécifique pour chaque client.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  2. Tarifs et Facturation
                </h2>
                <ul className="list-disc list-inside mt-2 text-gray-700 ml-4">
                  <li>Les prix sont indiqués en FCFA/Euro hors taxes</li>
                  <li>
                    Un acompte de 50% est requis pour confirmer toute commande
                  </li>
                  <li>
                    Le solde est payable selon les conditions spécifiées dans le
                    devis
                  </li>
                  <li>
                    Les frais supplémentaires non prévus seront facturés après
                    accord du client
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  3. Propriété Intellectuelle
                </h2>
                <p className="text-gray-700">
                  Tous les contenus créés par Aurra Communication restent sa
                  propriété jusqu&apos;au paiement intégral des services. Après
                  paiement, le client reçoit une licence d&apos;utilisation
                  selon les termes convenus.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  4. Responsabilités
                </h2>
                <ul className="list-disc list-inside mt-2 text-gray-700 ml-4">
                  <li>
                    Le client s&apos;engage à fournir des informations exactes
                    et complètes
                  </li>
                  <li>
                    Aurra Communication s&apos;engage à respecter les délais
                    convenus
                  </li>
                  <li>
                    Le client est responsable de la validation finale des
                    contenus
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  5. Confidentialité
                </h2>
                <p className="text-gray-700">
                  Aurra Communication s&apos;engage à maintenir la
                  confidentialité des informations fournies par le client.
                  Référez-vous à notre politique de confidentialité pour plus de
                  détails.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  6. Résiliation
                </h2>
                <p className="text-gray-700">
                  Chaque partie peut résilier le contrat en cas de manquement
                  grave aux obligations, avec un préavis écrit de 30 jours. Les
                  sommes dues restent exigibles.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  7. Modifications
                </h2>
                <p className="text-gray-700">
                  Aurra Communication se réserve le droit de modifier ces
                  conditions générales à tout moment. Les clients seront
                  informés des modifications substantielles.
                </p>
              </div>

              <div className="mt-12 p-6 bg-gray-100 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Contact
                </h2>
                <p className="text-gray-700">
                  Pour toute question concernant ces conditions générales,
                  veuillez nous contacter à :
                </p>
                <div className="mt-4">
                  <p className="font-bold">Aurra Communication</p>
                  <p>Email: aurracommunication@gmail.com</p>
                  <p>Téléphone:</p>
                  <ul className="list-none ml-4">
                    <li>+228 90 42 39 63</li>
                    <li>+228 97 21 06 14</li>
                    <li>+228 71 24 89 23</li>
                    <li>+261 38 19 51 617</li>
                  </ul>
                  <p>Adresse postale: Lomé Togo</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ConditionsGenerales;
