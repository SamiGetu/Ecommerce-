/* eslint-disable no-unused-vars */
import { useParams } from "react-router";
import Products from "../Data/Products/Products";
import CommonSection from "./../components/UI/CommonSection";
import Helmet from "./../components/Helmet/Helmet";
import Rating from "../components/Rating/Rating";
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductsList";

const ProductDetail = () => {
  const { id } = useParams();
  const parsedId = parseInt(id);
  const product = Products.find((item) => item.id === parsedId);

  if (!product) {
    return (
      <>
        <div>
          <CommonSection title={"Detail"} />
          <h1 className="flex justify-center text-4xl pt-20">
            Products not Found
          </h1>
        </div>
      </>
    );
  }
  const { ProductsImage, title, shortDesc, Price, reviews, type } = product;
  const relatedProducts = Products.filter((item) => item.type === type);
  return (
    <>
      <Helmet>
        <section>
          <CommonSection title={"Detail"} />
          <div className="flex flex-wrap justify-center gap-10 items-center mt-40">
            <div>
              <img src={ProductsImage} alt="" />
            </div>
            <div className="lg:w-[40%] w-full px-20">
              <h2 className="text-6xl text-[#181848] font-medium">{title}</h2>
              <div className="pb-10">
                <Rating />
              </div>
              <div className="text-md text-gray-500">{shortDesc}</div>
              <div className="text-2xl font-medium pb-20">{Price}</div>
              <motion.button
                whileTap={{ scale: 1.1 }}
                className="px-10 py-2 font-medium text-white bg-[#08081f] rounded-md"
              >
                Add to Cart
              </motion.button>
            </div>
          </div>
        </section>
        <section></section>
        <section className="mt-[5rem]">
          <div className="flex flex-col justify-center">
            <h6 className="text-5xl text-center font-medium">
              You Also Might Like
            </h6>
            <div>
              <ProductsList data={relatedProducts} />
            </div>
          </div>
        </section>
      </Helmet>
    </>
  );
};

export default ProductDetail;
