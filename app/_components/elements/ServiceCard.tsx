"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
  detailLink: string;
}

export const ServiceCardElement = ({
  title,
  description,
  Icon,
  detailLink,
}: ServiceCardProps) => {
  return (
    <div className="bg-white m-1 rounded-xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1 group">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blueColor to-violetColor rounded-full flex items-center justify-center mr-4 group-hover:from-violetColor group-hover:to-blueColor transition-all duration-300">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>

        <Link
          href={detailLink}
          className="w-full py-2 px-4 bg-gradient-to-r from-blueColor to-violetColor text-white text-center rounded-full transition-all duration-300 hover:from-violetColor hover:to-blueColor transform hover:scale-[1.02] flex items-center justify-center gap-2 group-hover:shadow-lg"
        >
          Plus de détails
          <FaArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </div>
    </div>
  );
};
