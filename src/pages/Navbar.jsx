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
            <Link to="/" className="text-3xl font-mono">
              <span className="">Dex Aggergator</span>
            </Link>
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
            <Link to="/" className="btn btn-outline btn-wide">
              Home
            </Link>
            <Link to="/About" className="btn btn-outline btn-wide btn-primary">
              About
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              className="btn btn-outline btn-wide text-orange-500 hover:bg-orange-400 hover:text-black hover:border-orange-500"
              onClick={ConnectWallet}
            >
              {msg ? <p>Connect Wallet</p> : <p>{msg}</p>}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
