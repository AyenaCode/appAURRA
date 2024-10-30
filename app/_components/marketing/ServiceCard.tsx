import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  Icon: React.ElementType;
  title: string;
  description: string;
  href: string;
};

export const ServiceCard = ({ Icon, title, description, href }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-secondaryColor to-violetColor rounded-lg shadow-2xl text-white text-center group transition-all duration-300">
      <Icon className="w-16 h-16 bg-gradient-to-r from-blueColor to-tertiaryColor text-white group-hover:from-white group-hover:to-gray-300 group-hover:text-blueColor rounded-full p-2 mb-4 shadow-2xl" />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-sm text-gray-300 my-4">{description}</p>
      <Link
        href={href}
        className="bg-gradient-to-r from-white to-gray-300 text-blueColor px-4 py-2 rounded-full md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300 flex items-center"
      >
        Démarrer
        <ArrowUpRightIcon className="w-6 h-6 ml-2" />
      </Link>
    </div>
  );
};
