"use client";
import { useEffect, useState } from "react";
import { FaCodeBranch, FaStar, FaUsers } from "react-icons/fa";

interface Stat {
  Icon: React.ElementType;
  value: number;
  label: string;
}

const stats: Stat[] = [
  { Icon: FaUsers, value: 530, label: "Clients Satisfaits" },
  { Icon: FaStar, value: 1800, label: "Votes Positifs" },
  { Icon: FaCodeBranch, value: 260, label: "Projets Réussis" },
];

export const StatisticsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const { Icon, value, label } = stats[currentIndex];

  return (
    <div className="mx-auto h-25 shadow-xl overflow-hidden">
      <div className="card mx-auto px-4">
        <h3 className="text-2xl p-2 font-bold text-center text-pink-500">
          Nos Chiffres
        </h3>
        <div className="relative h-40">
          <div className="absolute w-full flex justify-center items-center">
            <div className="text-center">
              <Icon className="text-5xl mb-2 mx-auto" />
              <div className="text-4xl font-bold">{value}+</div>
              <div className="text-xl">{label}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
