import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { useSelector } from "react-redux";
import CommonSection from "./../components/UI/CommonSection";

const Checkout = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    shippingOption: "standard",
  });

  const shippingCost = formData.shippingOption === "express" ? 100 : 50; // Simple fixed shipping cost example
  const totalIncludingShipping = totalAmount + shippingCost;
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "Submitting Order:",
      formData,
      cartItems,
      `Total including shipping: ${totalIncludingShipping}`
    );
    alert("Check console for order details.");
  };

  return (
    <>
      <Helmet title="Checkout">
        <CommonSection title={"Checkout"} />
        <section className="overflow-hidden mt-[10rem]">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto grid md:grid-cols-2 gap-4">
              <div className="space-y-4 p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* User Info Inputs */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ></textarea>
                  </div>
                  {/* Shipping Options */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Shipping
                    </label>
                    <select
                      name="shippingOption"
                      value={formData.shippingOption}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="standard">Standard - 50 Birr</option>
                      <option value="express">Express - 100 Birr</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit Order
                  </button>
                </form>
              </div>

              <div className="bg-green-700 text-white p-10 font-semibold">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Order Summary
                </h2>
                <div className="flex justify-between items-center">
                  <p className="text-lg">Total Items:</p>
                  <p>{totalItems}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold">Subtotal:</p>
                  <p>{totalAmount} Birr</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg">Shipping:</p>
                  <p>{shippingCost} Birr</p>
                </div>
                <div className="flex justify-between items-center mt-10 bg-white text-black py-2">
                  <p className="text-xl font-bold">Total:</p>
                  <p>{totalIncludingShipping} Birr</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Helmet>
    </>
  );
};

export default Checkout;
