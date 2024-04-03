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
            <div className="lg:w-[40%] w-full">
              <img src={ProductsImage} alt="" />
            </div>
            {/*  */}
            <div className="lg:w-[40%] w-full px-20">
              <h2 className="text-6xl text-green-900 font-medium">{title}</h2>
              <div className="pb-10">
                <Rating />
              </div>
              <div className="text-md text-gray-500">{shortDesc}</div>
              <div className="text-2xl font-medium pb-20">{Price}</div>
              <motion.button
                whileTap={{ scale: 1.1 }}
                className="px-10 py-2 font-medium text-white bg-green-800 rounded-md"
              >
                Add to Cart
              </motion.button>
            </div>
          </div>
        </section>

        <section className="px-20">
          <div className="flex flex-wrap justify-evenly mt-10">
            <div className="">
              <h2 className="text-2xl font-medium text-green-900 mb-5">
                Reviews
              </h2>
              <ul className="pb-20">
                {reviews.map((item, index) => (
                  <>
                    <li key={index}>
                      <h3 className="font-medium text-lg">Sami Getu</h3>
                      <p className="text-green-600 font-medium">
                        {item.rating}(Rating)
                      </p>
                      <p className="text-gray-500 font-medium">{item.text}</p>
                    </li>
                  </>
                ))}
              </ul>
              <div className="flex justify-center">
                <form action="" className="space-y-5">
                  <h4 className="text-3xl font-medium">
                    Share us your Experience
                  </h4>
                  <div>
                    <input
                      className="xl:px-[30rem] lg:px-[20rem] md:px-[10rem] pl-10 border-2 py-2 rounded-md font-medium  focus:outline-none text-start"
                      type="text"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <span>
                      <Rating />
                    </span>
                  </div>
                  <div>
                    <textarea
                      className="xl:px-[30rem] lg:px-[20rem] md:px-[10rem] pl-10 border-2 py-10 rounded-md font-medium focus:outline-none text-start"
                      type="text"
                      placeholder="Message..."
                    />
                  </div>
                  <input
                    type="submit"
                    className="bg-green-600 text-white font-medium px-10 py-2"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>

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
