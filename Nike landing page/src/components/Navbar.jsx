import React from "react";
import Logo from "../assets/brand_logo.svg";
import { NavLinks } from "./List";
import { Link } from "react-scroll";

const Navbar = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="w-full h-[80px] sticky top-0 bg-slate-200">
      <div className="container flex justify-between items-center p-4">
        <div className="">
          <img src={Logo} alt="" />
        </div>

        <div className="hidden lg:flex justify-center items-center gap-x-4 uppercase">
          {NavLinks.map(({ id, link }) => (
            <ul key={id}>
           
                <Link to={id} smooth={true} offset={50} duration={500} className="hover:text-red-600 duration-100 font-medium text-sm">
                  {link}
                </Link>
        
            </ul>
          ))}
        </div>

        <div>
          <button className="hidden lg:block py-2 px-4 bg-red-600 rounded-md shadow-sm text-sm text-slate-50 font-semibold">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
