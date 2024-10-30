import Image from "next/image";
interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
  portrait: string | null;
}

export const TestimonialCard = ({
  text,
  author,
  role,
  portrait = null,
}: TestimonialCardProps) => {
  return (
    <div className="bg-base-300 p-8 rounded-lg shadow-lg flex flex-col items-center">
      {portrait && (
        <Image
          src={portrait}
          alt={`${author}'s portrait`}
          className="w-24 h-24 rounded-full mb-4 object-cover"
          width={100}
          height={100}
        />
      )}
      <p className="mb-6 text-base-content/70 italic text-center">{text}</p>
      <p className="font-bold text-base-content text-center">
        - {author}, {role}
      </p>
    </div>
  );
};
