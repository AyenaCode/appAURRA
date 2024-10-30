import PropTypes from "prop-types";

export const TestimonialCard = ({ text, author, role, portrait = null }) => {
  return (
    <div className="bg-base-300 p-8 rounded-lg shadow-lg flex flex-col items-center">
      {portrait && (
        <img
          src={portrait}
          alt={`${author}'s portrait`}
          className="w-24 h-24 rounded-full mb-4 object-cover"
        />
      )}
      <p className="mb-6 text-base-content/70 italic text-center">{text}</p>
      <p className="font-bold text-base-content text-center">
        - {author}, {role}
      </p>
    </div>
  );
};

// Typage des props avec PropTypes
TestimonialCard.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  portrait: PropTypes.string, // Non obligatoire
};
