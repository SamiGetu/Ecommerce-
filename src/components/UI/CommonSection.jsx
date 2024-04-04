/* eslint-disable react/prop-types */
const CommonSection = ({ title }) => {
  return (
    <>
      <div>
        <div className="h-[30vh] bg-[url('/images/section.jpg')] bg-cover bg-center">
          <h2 className="text-5xl text-white text-center font-bold pt-[10rem]">
            {title}
          </h2>
        </div>
      </div>
    </>
  );
};

export default CommonSection;
