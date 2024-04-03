import Helmet from "../components/Helmet/Helmet";
import hero from "../assets/image/hero.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../components/Services";
import ProductsList from "../components/UI/ProductsList";
import Products from "../Data/Products/Products";
import Clock from "../components/UI/Clock";
import nake from "../assets/image/nake3.png";

const Home = () => {
  const year = new Date().getFullYear();

  const [trendingProducts, settrendingProducts] = useState(Products);
  const [bestSelling, setbestSelling] = useState(Products);
  const [newArived, setNewArived] = useState(Products);

  useEffect(() => {
    const filiterdTrandingProducts = Products.filter(
      (item) => item.Categories === "TrandingProducts"
    );

    const filiterdSellingProducts = Products.filter(
      (item) => item.Categories === "SellingProducts"
    );
    const filiterdNewArivedProducts = Products.filter(
      (item) => item.Categories === "NewArived"
    );
    settrendingProducts(filiterdTrandingProducts);
    setbestSelling(filiterdSellingProducts);
    setNewArived(filiterdNewArivedProducts);
  }, []);

  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, Seteconds] = useState();

  let intreval;
  const countDown = () => {
    const destnation = new Date("May 1, 2024");

    intreval = setInterval(() => {
      const now = new Date().getTime();
      const different = destnation - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);
      if (destnation < 0) clearInterval(intreval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        Seteconds(seconds);
      }
    });
  };
  useEffect(() => {
    countDown();
  });

  return (
    <>
      <div className=" overflow-hidden">
        <Helmet title={"Home"}>
          <section className="flex flex-wrap justify-evenly bg-gray-200 items-center">
            <div className="space-y-5 px-10 py-10 md:w-[50%] mt-20">
              <p className="md:text-lg text-sm text-gray-500 font-medium">
                Tranding Products in {year}
              </p>
              <h2 className="text-5xl font-semibold text-neutral-800">
                Modernize your interior with our sleek wall paint
              </h2>
              <p className="text-lg text-gray-500 font-medium ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                quisquam neque praesentium quos tempore rem pariatur eveniet
                quis sequi aspernatur.
              </p>
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="px-10 py-3 bg-green-600 text-white  rounded-lg"
              >
                <Link to={"shop"}>SHOP NOW</Link>
              </motion.button>
            </div>
            <img className="w-[40rem]" src={hero} alt="" />
          </section>
          <div className="flex flex-wrap justify-center pt-20 gap-10">
            <Services />
          </div>
          {/*Tranding Products*/}
          <section className="mt-24">
            <h2 className="text-6xl font-serif  text-green-900 font-medium text-center">
              Tranding Products
            </h2>
            <ProductsList data={trendingProducts} />
          </section>
          {/* Best Selling Products */}
          <section className="mt-24">
            <h3 className="text-6xl font-serif  text-green-900 font-medium text-center">
              Best Sales
            </h3>
            <ProductsList data={bestSelling} />
          </section>
          {/*Time Counter*/}
          <section className="flex flex-wrap justify-center 2xl:gap-[30rem] gap-0 items-center mt-[10rem] bg-green-100">
            <div className="text-black pt-10 md:text-start text-center">
              <h4 className="text-lg font-medium">Limited Offers</h4>
              <h3 className="text-4xl font-medium">Ring</h3>
              <div className="flex flex-wrap  mt-10 gap-20">
                <Clock Amount={days} Date={"Days"} />
                <Clock Amount={hours} Date={"Houres"} />
                <Clock Amount={minutes} Date={"Minuts"} />
                <Clock Amount={seconds} Date={"Seconds"} />
              </div>
              <span>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="px-10 py-2 bg-green-600 text-white font-bold rounded-lg mt-[5rem]"
                >
                  <Link to={"shop"}>Visit Store</Link>
                </motion.button>
              </span>
            </div>
            <img className="md:w-[30%] w-full" src={nake} alt="" />
          </section>
          {/* New Arivales */}
          <section className="mt-24">
            <h2 className="text-6xl font-serif  text-green-900 font-medium text-center">
              New Arivales
            </h2>
            <ProductsList data={newArived} />
          </section>
        </Helmet>
      </div>
    </>
  );
};

export default Home;
