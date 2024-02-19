import React, { useState } from "react";
import Logo from "/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="py-5 relative">
      <nav className="container">
        <div className="flex justify-between items-center">
          {/* left side */}
          <div>
            <img src={Logo} alt="" />
          </div>

          {/* right side */}
          <div className="hidden md:flex justify-between items-center gap-5">
            <a
              href=""
              className="pr-32 text-slate-600 hover:text-slate-900 duration-75"
            >
              work
            </a>
            <a
              href=""
              className="pr-32 text-slate-600 hover:text-slate-900 duration-75"
            >
              about
            </a>
          </div>

          {/* mobile navbar */}
          <div className="md:hidden" onClick={handleMenu}>
            <div className="z-50 absolute top-7 right-8">
              {menu ? <MdOutlineClose /> : <GiHamburgerMenu />}
            </div>

            <div className="-z-20">
              {menu ? (
                <div className="flex flex-col gap-5 py-52 p-5 absolute top-0 right-0 shadow-md h-screen w-[200px] bg-white">
                  <a
                    href=""
                    className="pr-32 text-slate-600 hover:text-slate-900 duration-75"
                  >
                    work
                  </a>
                  <a
                    href=""
                    className="pr-32 text-slate-600 hover:text-slate-900 duration-75"
                  >
                    about
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
