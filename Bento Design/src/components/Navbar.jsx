import React from "react";
import Logo from "/logo.svg";

const Navbar = () => {
  return (
    <div className="py-5">
      <nav className="container">
        {/* desktop Version */}

        <div className="flex justify-between items-center">
          <div>
            <img src={Logo} alt="" />
          </div>

          <div>
            <ul className="flex justify-between items-center gap-10">
              <li className="text-slate-400 text-base font-medium pr-32 hover:text-slate-950 duration-75">
                work
              </li>
              <li className="text-slate-400 text-base font-medium pr-32 hover:text-slate-950 duration-75">
                about
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
