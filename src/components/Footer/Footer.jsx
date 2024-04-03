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
      <footer>
        <div>
          <div className=" space-y-[3rem]">
            <div className="flex text-2xl text-neutral-900 hover:text-black gap-5 mt-4 justify-center items-center sm:mt-0 space-x-3">
              <div className="border border-neutral-800 hover:border-yellow-300  rounded-full">
                <TiSocialFacebook size={"40px"} />
              </div>
              <div className="border border-neutral-800 hover:border-yellow-300  rounded-full">
                <TiSocialTwitter size={"40px"} />
              </div>
              <div className="border border-neutral-800 hover:border-yellow-300  rounded-full">
                <TiSocialLinkedin size={"40px"} />
              </div>
              <div className="border border-neutral-800 hover:border-yellow-300  rounded-full">
                <TiSocialYoutube size={"40px"} />
              </div>
            </div>
            <div>
              <ul className="flex items-center justify-center space-x-5">
                <li className="cursor-pointer space-x-5 font-medium  relative navLink hover:text-black">
                  <Link to={"/home"}>Home</Link>
                  <Link to={"/shop"}>Shop</Link>
                  <Link to={"/cart"}>Cart</Link>
                </li>
              </ul>
            </div>
            <hr className=" border-neutral-400 w-[80%] absolute left-[10%]" />
          </div>
        </div>
        <h1 className="text-black text-md font-medium flex justify-center p-[3.5rem]">
          Copyright 2024 Website By Sami
        </h1>
      </footer>
    </>
  );
}
