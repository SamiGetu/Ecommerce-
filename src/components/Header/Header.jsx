import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Links = [
  { Name: "Home", Path: "home" },
  { Name: "Shop", Path: "shop" },
  { Name: "Cart", Path: "cart" },
];

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuanitity);

  const [activeLink, setActiveLink] = useState(false);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [change, setchange] = useState(false);
  const [open, setOpen] = useState(false);

  const ChangeColor = () => {
    if (window.scrollY >= 80) {
      setchange(true);
    } else {
      setchange(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(ChangeColor);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <nav
          className={`${
            change
              ? "h-[5rem] bg-white text-black font-medium fixed w-full z-10 duration-[1s]"
              : "h-[5rem]"
          }`}
        >
          {open && (
            <div>
              <div className="bg-black/50 absolute h-[70vh] w-full backdrop-blur-[7px]  pt-20 z-10">
                <span className="absolute right-20">
                  <HiMiniXMark
                    size={"3rem"}
                    className=" cursor-pointer bg-black text-white px-2 rounded-full"
                    onClick={() => setOpen(false)}
                  />
                </span>
                {Links.map((item) => (
                  <>
                    <ul className="text-4xl text-white font-bold text-center mt-[3rem]">
                      <Link to={item.Path}>{item.Name}</Link>
                    </ul>
                  </>
                ))}
              </div>
            </div>
          )}
          <div className="flex absolute xl:left-20 left-2 pt-5   cursor-pointer">
            <div className="text-2xl font-bold text-green-600">
              <h1>Logo</h1>
            </div>
          </div>
          <div className="flex justify-evenly items-center gap-10 pt-5">
            {/* links */}
            <div className="flex justify-center gap-6">
              {Links.map((link, index) => (
                <>
                  <ul className="text-lg text-gray-500 font-medium md:block hidden cursor-pointer">
                    <li
                      key={index}
                      className={`nav-link ${
                        activeLink === link.Name
                          ? "text-[#0c0c2e] font-bold"
                          : ""
                      }`}
                      onClick={() => handleLinkClick(link.Name)}
                    >
                      <NavLink to={link.Path}>{link.Name}</NavLink>
                    </li>
                  </ul>
                </>
              ))}
            </div>
            {/* icons */}
            <div className="flex space-x-10 absolute xl:right-[15rem] right-[4rem] top-6">
              <span>
                <FaShoppingBag size={"1.3rem"} />
                <p className="absolute top-[-1rem] ml-3 text-center px-2 text-[14px] bg-green-600 text-white font-bold rounded-full">
                  {totalQuantity}
                </p>
              </span>
            </div>
          </div>
          <span className="absolute xl:right-20 right-1 top-5">
            <IoMenu
              size={"2rem"}
              className=" cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </span>
        </nav>
      </header>
    </>
  );
};

export default Header;
