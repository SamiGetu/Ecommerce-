/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

const ProductsList = ({ data }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {data?.map((item, index) => (
            <>
              <ProductCard item={item} key={index} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
