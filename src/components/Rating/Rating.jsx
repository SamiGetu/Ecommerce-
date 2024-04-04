/* eslint-disable react/prop-types */
const Rating = ({ rating, setRating }) => {
  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-10 w-10 cursor-pointer ${
              index < rating ? "text-yellow-500" : "text-gray-700"
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
          <span className="ml-1 text-xl text-green-600 font-medium">
            {index + 1}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Rating;
