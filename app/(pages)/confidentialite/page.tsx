import { Navbar } from "@/app/_components/elements/Navbar";
import { Span } from "@/app/_components/elements/Span";
import { Footer } from "@/app/_components/pgaeSections/Footer";

const Confidentialite = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-r from-blue-950 to-violet-950 text-white">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Politique de <Span>Confidentialité</Span>
            </h1>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="mb-8 text-gray-700">
              Aurra Communication s&apos;engage à protéger la confidentialité et
              la sécurité des informations personnelles de ses clients,
              partenaires, et utilisateurs de son site web. Cette politique de
              confidentialité décrit comment nous collectons, utilisons,
              stockons, et partageons vos informations, ainsi que vos droits
              concernant vos données personnelles.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  a. Collecte des Informations
                </h2>
                <p className="text-gray-700">
                  Nous collectons des informations personnelles lorsque vous
                  interagissez avec nous, que ce soit via notre site web, par
                  e-mail, ou lors de la fourniture de nos services. Ces
                  informations peuvent inclure :
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 ml-4">
                  <li>
                    Nom, prénom, et coordonnées (adresse, e-mail, numéro de
                    téléphone)
                  </li>
                  <li>Informations professionnelles (titre, entreprise)</li>
                  <li>
                    Données financières pour la facturation et le paiement
                  </li>
                  <li>
                    Données de navigation sur notre site (cookies, adresses IP)
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  b. Utilisation des Informations
                </h2>
                <p className="text-gray-700">
                  Les informations collectées sont utilisées pour :
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 ml-4">
                  <li>Fournir et personnaliser nos services</li>
                  <li>Gérer la relation client et communiquer avec vous</li>
                  <li>Traiter les paiements et gérer les comptes</li>
                  <li>Améliorer nos services et notre site web</li>
                  <li>Vous informer des actualités, offres, et événements</li>
                </ul>
              </div>

              {/* Continuez avec les autres sections... */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  c. Partage des Informations
                </h2>
                <p className="text-gray-700">
                  Aurra Communication ne partage vos informations personnelles
                  qu&apos;avec votre consentement ou lorsque cela est nécessaire
                  pour :
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 ml-4">
                  <li>
                    Fournir nos services (par exemple, avec des partenaires ou
                    prestataires)
                  </li>
                  <li>
                    Se conformer aux obligations légales ou réglementaires
                  </li>
                  <li>
                    Protéger les droits, la sécurité, ou la propriété
                    d&apos;Aurra Communication ou d&apos;autres parties
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  d. Protection des Informations
                </h2>
                <p className="text-gray-700">
                  Nous prenons des mesures de sécurité appropriées pour protéger
                  vos informations contre l&apos;accès non autorisé, la
                  divulgation, la modification ou la destruction. Cela inclut
                  des protections techniques, administratives, et physiques.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  e. Cookies et Technologies Similaires
                </h2>
                <p className="text-gray-700">
                  Nous utilisons des cookies et des technologies similaires pour
                  améliorer l&apos;expérience utilisateur sur notre site web.
                  Vous pouvez configurer votre navigateur pour refuser les
                  cookies, bien que cela puisse affecter certaines
                  fonctionnalités du site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  f. Vos Droits
                </h2>
                <p className="text-gray-700">Vous avez le droit de :</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 ml-4">
                  <li>
                    Accéder à vos informations personnelles que nous détenons
                  </li>
                  <li>
                    Demander la correction de données inexactes ou incomplètes
                  </li>
                  <li>
                    Demander la suppression de vos informations personnelles
                  </li>
                  <li>
                    Retirer votre consentement au traitement de vos données
                  </li>
                  <li>
                    S&apos;opposer à l&apos;utilisation de vos données
                    personnelles à des fins de marketing direct
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  g. Modifications de la Politique de Confidentialité
                </h2>
                <p className="text-gray-700">
                  Cette politique de confidentialité peut être mise à jour
                  occasionnellement pour refléter les changements dans nos
                  pratiques ou les exigences légales. Nous vous informerons de
                  toute modification significative.
                </p>
              </div>

              <div className="mt-12 p-6 bg-gray-100 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Contact
                </h2>
                <p className="text-gray-700">
                  Pour toute question ou demande concernant cette politique de
                  confidentialité, veuillez nous contacter à :
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

export default Confidentialite;
