import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-green-950 py-10 hover:py-20 duration-500">
        <div>
          <div className=" space-y-[3rem]">
            <div className="flex text-2xl text-white   gap-5 mt-4 justify-center items-center sm:mt-0 space-x-3">
              <div className="hover:text-green-600">
                <TiSocialFacebook size={"40px"} />
              </div>
              <div className="hover:text-green-600">
                <TiSocialTwitter size={"40px"} />
              </div>
              <div className="hover:text-green-600">
                <TiSocialLinkedin size={"40px"} />
              </div>
              <div className="hover:text-green-600">
                <TiSocialYoutube size={"40px"} />
              </div>
            </div>
            <div>
              <ul className="flex items-center justify-center space-x-5">
                <li className="cursor-pointer space-x-5 font-medium  relative navLink text-white">
                  <Link to={"/home"}>Home</Link>
                  <Link to={"/shop"}>Shop</Link>
                  <Link to={"/cart"}>Cart</Link>
                </li>
              </ul>
            </div>
            <hr className=" border-neutral-400 w-[80%] absolute left-[10%]" />
          </div>
        </div>
        <h1 className="text-white text-md font-medium flex justify-center p-[3.5rem]">
          Copyright 2024 Website By Amare
        </h1>
      </footer>
    </>
  );
}
