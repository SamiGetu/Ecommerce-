/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { cartActions } from "../Redux/slices/cartslice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <>
      <Helmet title="Cart">
        <CommonSection title={"Cart"} />
        <section className="flex flex-col items-center justify-center overflow-hidden px-5">
          {cartItems.length === 0 ? (
            <h2 className="text-3xl font-bold text-green-800 m-10">
              NO ITEMS ADDED TO THE CART
            </h2>
          ) : (
            <table className="min-w-[80vw] divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="md:px-6 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="md:px-6 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="md:px-6 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="md:px-6 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="md:px-6 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <>
                    <Tr item={item} key={index} />
                  </>
                ))}
              </tbody>
            </table>
          )}
          <table className="min-w-[80vw] divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="md:px-6 px-2 py-3 font-bold text-black uppercase tracking-wider"
                >
                  Subtotal
                </th>
                <th
                  scope="col"
                  className="md:px-6 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="font-semibold">
                    <b>{totalAmount} </b>Birr
                  </div>
                </th>

                <th
                  scope="col"
                  className="md:px-6 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <button className="px-10 py-2 bg-green-600 border-none text-white rounded-md">
                    <Link to={"/shop"}>Continue</Link>
                  </button>
                </th>
                <th
                  scope="col"
                  className="md:px-6 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <button className="px-10 py-2 bg-green-600 border-none text-white rounded-md">
                    <Link to={"/checkout"}>Checkout</Link>
                  </button>
                </th>
              </tr>
            </thead>
          </table>
        </section>
      </Helmet>
    </>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <>
      <tr>
        <td className="md:px-6 px-2 py-4 whitespace-nowrap">
          <img
            src={item.ProductsImage}
            alt={""}
            className="h-10 w-10 rounded-full"
          />
        </td>
        <td className="md:px-6 px-2 py-4 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">{item.title}</div>
        </td>
        <td className="md:px-6 px-2 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{item.Price} Birr</div>
        </td>
        <td className="md:px-6 px-2 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{item.quantity}</div>
        </td>
        <td className="md:px-6 px-2 py-4 whitespace-nowrap">
          <button
            onClick={deleteProduct}
            className="text-sm font-medium text-red-600 hover:text-red-900"
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};

export default Cart;
