import { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import { IoMdSearch } from "react-icons/io";
import Products from "./../Data/Products/Products";
import ProductsList from "./../components/UI/ProductsList";

const Shop = () => {
  const [productData, setProductData] = useState(Products);
  const handleFiliter = (e) => {
    const filiterValue = e.target.value;
    if (filiterValue === "all") {
      const filiterdproducts = Products;
      setProductData(filiterdproducts);
    }
    if (filiterValue === "wall paint") {
      const filiterdproducts = Products.filter(
        (item) => item.type === "Wall Paint"
      );
      setProductData(filiterdproducts);
    }
    if (filiterValue === "artifact") {
      const filiterdproducts = Products.filter((item) => item.type === "Craft");
      setProductData(filiterdproducts);
    }
    if (filiterValue === "jewllery") {
      const filiterdproducts = Products.filter(
        (item) => item.type === "Jewelry"
      );
      setProductData(filiterdproducts);
    }
  };
  const handleSearch = (e) => {
    const searchItem = e.target.value;

    const searchProducts = Products.filter((item) =>
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setProductData(searchProducts);
  };
  return (
    <>
      <CommonSection title={"Products"} />
      <section>
        <div className="flex flex-wrap lg:justify-center justify-start lg:pl-0 pl-10 lg:gap-[6rem] gap-10 mt-[5rem]">
          <div>
            <select
              className="px-10 py-2 bg-[#09092c] text-white rounded-lg"
              onChange={handleFiliter}
            >
              <option>Filter By Catagory</option>
              <option value="all">All</option>
              <option value="wall paint">Wall Paint</option>
              <option value="artifact">Artifact</option>
              <option value="jewllery">Jewllery</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input
              className="md:px-[15rem] px-10 py-2 border-[0.1px] rounded-md"
              type="text"
              placeholder="Search..."
              onChange={handleSearch}
            />
            <span>
              <IoMdSearch size={"2rem"} />
            </span>
          </div>
        </div>
      </section>
      <section>
        <div>
          {productData.length === 0 ? (
            <h1 className="text-3xl font-medium text-center m-20">
              No Products Found
            </h1>
          ) : (
            <ProductsList data={productData} />
          )}
        </div>
      </section>
    </>
  );
};

export default Shop;
