import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import craft from "../assets/image/craft.png";
const Cart = () => {
  return (
    <>
      <Helmet title="Cart">
        <CommonSection title={"Cart"} />
        <section className="flex justify-center overflow-hidden">
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
              <tr key={""}>
                <td className="md:px-6 px-2 py-4 whitespace-nowrap">
                  <img
                    src={craft}
                    alt={""}
                    className="h-10 w-10 rounded-full"
                  />
                </td>
                <td className="md:px-6 px-2 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">pikok</div>
                </td>
                <td className="md:px-6 px-2 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">$225</div>
                </td>
                <td className="md:px-6 px-2 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">5</div>
                </td>
                <td className="md:px-6 px-2 py-4 whitespace-nowrap">
                  <button
                    onClick={""}
                    className="text-sm font-medium text-red-600 hover:text-red-900"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </Helmet>
    </>
  );
};

export default Cart;
