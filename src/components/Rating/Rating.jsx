import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const totalStars = 5;

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <svg
            key={index}
            className={`h-5 w-5 fill-current ${
              starValue <= rating ? "text-yellow-300" : "text-gray-400"
            }`}
            onClick={() => handleClick(starValue)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M17.73 7.648a1 1 0 01.575 1.705l-4.096 3.997  .964 5.632a.998.998 0 01-1.453 1.054L10 16.69l-5.118 2.346a.998.998 0 01-1.453-1.054l.964-5.632L.696 9.353a1 1 0 01.574-1.705l5.64-.822L9.82 2.36a1 1 0 011.882 0l2.91 5.466 5.641.822z"
              clipRule="evenodd"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default Rating;
