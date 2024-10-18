import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  description: React.ReactNode;
  image: string;
}

export const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="card bg-white rounded-lg shadow-md overflow-hidden">
      <figure className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={100}
        />
      </figure>
      <div className="card-body p-6">
        <h3 className="card-title text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <div className="text-gray-600 text-sm">{description}</div>
      </div>
    </div>
  );
};
