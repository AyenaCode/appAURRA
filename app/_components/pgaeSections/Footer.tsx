import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

interface SocialMediaProps {
  className?: string;
  size?: number;
}

export const SocialMedia = ({ className, size }: SocialMediaProps) => {
  return (
    <div className={`flex justify-center space-x-4 ${className}`}>
      <Link
        href="https://www.facebook.com/people/AURRA-COM/61562884277635/?mibextid=ZbWKwL"
        target="_blank"
        className="hover:text-blue-400"
      >
        <FaFacebook size={size} />
      </Link>
      <Link
        href="https://x.com/Aurracom"
        target="_blank"
        className="hover:text-blue-400"
      >
        <FaTwitter size={size} />
      </Link>
      <Link
        href="http://www.linkedin.com/in/aurra-com-6930b7327"
        target="_blank"
        className="hover:text-blue-400"
      >
        <FaLinkedin size={size} />
      </Link>
      <Link
        href="https://www.instagram.com/aurra.com228/?igsh=MTJ0NzNjZ3R3eWY4Mg%3D%3D"
        target="_blank"
        className="hover:text-blue-400"
      >
        <FaInstagram size={size} />
      </Link>
      <Link
        href="https://www.youtube.com/@aurracommunication?si=Qq67vHrp9VaIctmb"
        target="_blank"
        className="hover:text-blue-400"
      >
        <FaYoutube size={size} />
      </Link>
      <Link
        href="https://pin.it/313mw4C1b"
        target="_blank"
        className="hover:text-blue-400"
      >
        <FaPinterest size={size} />
      </Link>
      <Link
        href="https://wa.me/22890423963"
        target="_blank"
        className="hover:text-blue-400"
      >
        <FaWhatsapp size={size} />
      </Link>
    </div>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear(); // Récupère l'année actuelle
  return (
    <footer className="bg-gray-800 text-white py-12 ">
      <div className="md:flex justify-around">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Contacts</h3>
          <div>
            <p>Adresse : Online</p>
            <p>Email : aurracommunication@gmail.com</p>
            <p>Téléphone : +228 90 42 39 63</p>
            <p>Ouvert : 24h/24</p>
          </div>
        </div>
        <div className="my-8 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services" className="hover:text-blue-400">
                Nos solutions
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-blue-400">
                La foire aux questions
              </Link>
            </li>
            <li>
              <Link
                href="/conditions-generales"
                className="hover:text-blue-400"
              >
                Conditions generales
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="hover:text-blue-400">
                Politques de confidentialité
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">
            Suivez-nous
          </h3>

          <SocialMedia size={24} />
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; {currentYear} AURRA COM. Tous droits réservés.</p>
      </div>
    </footer>
  );
};
