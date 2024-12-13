import React, { useContext, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import DexContext from "./Context";

const Navbar = () => {
  const { ConnectWallet, account, msg } = useContext(DexContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <div className="relative p-4 bg-black border-2 border-black shadow-lg group">
              <div className="absolute inset-0 -translate-y-1 border-2 translate-x-1 border-black bg-white group-hover:bg-gray-200"></div>
              <div className="relative z-10 group-hover:bg-gray-200">
                <Link to="/" className="text-3xl font-mono">
                  <span className="">Dex Aggergator</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              to="/"
              className=" text-center h-12 justify-center flex items-center border-4 border-black bg-black text-white hover:bg-white hover:text-black  hover:border-black btn-wide"
            >
              Home
            </Link>
            <Link
              to="/About"
              className=" text-center h-12 justify-center flex items-center border-4 border-black bg-black text-white hover:bg-white hover:text-black  hover:border-black btn-wide"
            >
              About
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
            <div class="relative p-4 w-44 bg-black border-2 border-black shadow-lg  hover:cursor-pointer group">
              <div class="absolute inset-0 -translate-y-1 -translate-x-1 border-2 border-black bg-orange-400 group-hover:bg-white"></div>

              <div class="relative z-10  group-hover:bg-white">
                <button onClick={ConnectWallet} className="text-center *:">
                  {" "}
                  {msg ? (
                    <p className="text-center">
                      {/* {msg} */}
                      {account.slice(0, 10)}
                    </p>
                  ) : (
                    <p>Connect Wallet</p>
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
