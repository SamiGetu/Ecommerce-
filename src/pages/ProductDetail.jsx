/* eslint-disable no-unused-vars */
import { useParams } from "react-router";
import Products from "../Data/Products/Products";
import CommonSection from "./../components/UI/CommonSection";
import Helmet from "./../components/Helmet/Helmet";
import Rating from "../components/Rating/Rating";
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductsList";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../Redux/slices/cartslice";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const [rating, setRating] = useState(0);
  const reviewUser = useRef("");
  const reviewMessage = useRef("");
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        productName: title,
        Price: Price,
        image: ProductsImage,
      })
    );
    toast.success("product added successfully");
  };

  const [rev, setRev] = useState(false);
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

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMessage = reviewMessage.current.value;
    console.log(reviewUserName, reviewUserMessage, rating);

    toast.success("Succssfully Submited");
  };

  return (
    <>
      <Helmet title="ProductDetails">
        <section>
          <CommonSection title={"Detail"} />
          <div className="flex flex-wrap justify-center items-center mt-10">
            <div className="">
              <img src={ProductsImage} alt="" />
            </div>
            {/*  */}
            <div className="lg:w-[40%] w-full px-20">
              <h2 className="text-6xl text-green-900 font-medium">{title}</h2>
              <div className="pb-10">
                <Rating />
              </div>
              <div className="text-md text-gray-500">{shortDesc}</div>
              <div className="text-2xl font-medium pb-5">{Price}</div>
              <motion.button
                whileTap={{ scale: 1.1 }}
                className="px-10 py-2 font-medium text-white bg-green-950 rounded-md"
                onClick={addToCart}
              >
                Add to Cart
              </motion.button>
            </div>
          </div>
        </section>

        <section className="px-20">
          <div className="flex flex-wrap justify-evenly mt-10">
            <div className="">
              <h2
                className="text-2xl font-medium text-green-900 mb-5 cursor-pointer"
                onClick={() => setRev(true)}
              >
                Reviews({reviews.length})
              </h2>
              {rev && (
                <>
                  <ul className="pb-20">
                    {reviews.map((item, index) => (
                      <>
                        <li key={index}>
                          <h3 className="font-medium text-lg">Sami Getu</h3>
                          <p className="text-green-600 font-medium">
                            {item.rating}(Rating)
                          </p>
                          <p className="text-gray-500 font-medium">
                            {item.text}
                          </p>
                        </li>
                      </>
                    ))}
                  </ul>
                </>
              )}

              <div className="flex justify-center">
                <form action="" onSubmit={submitHandler} className="space-y-5">
                  <h4 className="text-3xl font-medium text-neutral-800">
                    Share us your Experience
                  </h4>
                  <div>
                    <input
                      className="xl:px-[30rem] lg:px-[20rem] md:px-[10rem] pl-10 border-[1px] py-2 rounded-md border-green-600 font-medium  focus:outline-none text-start"
                      type="text"
                      placeholder="Enter name"
                      ref={reviewUser}
                    />
                  </div>
                  <div>
                    <span>
                      <Rating rating={rating} setRating={setRating} />
                    </span>
                  </div>
                  <div>
                    <textarea
                      className="xl:px-[30rem] lg:px-[20rem] md:px-[10rem] pl-10 border-[1px] py-10 rounded-md border-green-600 font-medium focus:outline-none text-start"
                      type="text"
                      placeholder="Message..."
                      ref={reviewMessage}
                    />
                  </div>
                  <input
                    type="submit"
                    className="bg-green-950 rounded-md text-white font-medium px-10 py-2"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[5rem]">
          <div className="flex flex-col justify-center">
            <h6 className="text-5xl text-neutral-800 text-center font-medium">
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
