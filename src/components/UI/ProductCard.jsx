/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/slices/cartslice";
import { FaCirclePlus } from "react-icons/fa6";
import { toast } from "react-toastify";
import Rating from "../Rating/Rating";

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
          <div>
            <Rating />
          </div>
          <h3 className="text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium hover:text-blue-700">
            <Link to={`/shop/${item.id}`}>{item.title}</Link>
          </h3>
          <span className="text-md font-medium">{item.type}</span>
          <div className="text-md font-medium flex justify-between items-center gap-2 w-[75%]">
            <span>{item.Price}</span>

            <span>
              <FaCirclePlus
                size={"2rem"}
                className="text-[#0b0b31] active:scale-110"
                whileTap={{ scale: 1.2 }}
                onClick={addToCart}
              />
            </span>
          </div>
        </div>
      </>
    </>
  );
};

export default ProductCard;
