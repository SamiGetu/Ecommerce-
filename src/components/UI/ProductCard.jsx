/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/slices/cartslice";
import { FaCirclePlus } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.title,
        Price: item.Price,
        image: item.ProductsImage,
      })
    );
    toast.success("product added successfully");
  };
  return (
    <>
      <>
        <div className="w-[20rem] sm:w-[20rem] md:w-[15rem] lg:w-[17rem] xl:w-[20rem]">
          <motion.div whileHover={{ scale: 0.9 }}>
            <img key={item.id} src={item.ProductsImage} alt="" />
          </motion.div>

          <h3 className="text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium hover:text-green-700">
            {item.title}
          </h3>
          <span className="text-md font-medium">{item.type}</span>
          <div className="text-md font-medium flex justify-between items-center gap-2 w-[75%]">
            <span>{item.Price}</span>

            <span>
              <FaCirclePlus
                size={"2rem"}
                className="text-green-900 active:scale-110"
                whileTap={{ scale: 1.2 }}
                onClick={addToCart}
              />
            </span>
          </div>

          <span>
            <Link to={`/shop/${item.id}`}>
              {" "}
              <FaLongArrowAltRight
                className="text-green-800 hover:pl-10 duration-500"
                size={"2rem"}
              />
            </Link>
          </span>
        </div>
      </>
    </>
  );
};

export default ProductCard;
