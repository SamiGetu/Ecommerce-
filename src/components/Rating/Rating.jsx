import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 cursor-pointer ${
            index < rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => handleStarClick(index)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l-4 2.5 1-4-3-2.5h4l2-4 2 4h4l-3 2.5 1 4z"
          />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
