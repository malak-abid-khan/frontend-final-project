import { assets } from "@/assets/assets";
import { Heart, Search, ShoppingCart, User, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  // Helper to close menu on item click
  const handleMenuItemClick = () => setMenuOpen(false);

  return (
    <header className="bg-primary text-white w-full">
      <div className="container mx-5 md:mx-auto flex flex-wrap md:flex-nowrap justify-between items-center py-2 gap-4 md:gap-10 relative">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={assets.Logo} className="w-8 h-8" alt="logo" />
        </Link>

        {/* Search Bar - hidden on xs, visible on sm+ */}
        <div className="hidden sm:flex flex-1">
          <div className="flex items-center bg-white text-black py-1.5 px-5 rounded-full w-full">
            <input
              type="text"
              placeholder="Search everything we have online"
              className="w-full outline-none text-sm"
            />
            <button className="bg-primary text-white p-2 rounded-full">
              <Search />
            </button>
          </div>
        </div>

        {/* Mobile search icon */}
        <button
          className={`sm:hidden ml-auto ${
            mobileSearchOpen ? "hidden" : "block"
          }`}
          onClick={() => {
            setMobileSearchOpen(true);
            setMenuOpen(false);
          }}
          aria-label="Open search"
        >
          <Search />
        </button>

        {/* Hamburger for mobile */}
        <button
          className={`sm:hidden ${mobileSearchOpen ? "hidden" : "block"}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          <Menu />
        </button>

        {/* Mobile menu overlay */}
        {menuOpen && !mobileSearchOpen && (
          <div className="sm:hidden flex flex-col gap-2 items-center w-full bg-primary absolute left-0 right-0 top-full z-30 p-4 animate-fade-in">
            <button
              className="absolute top-2 right-4 text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X />
            </button>
            <button
              className="flex items-center gap-2 hover:bg-white/10 py-2 px-5 rounded-full w-full"
              onClick={handleMenuItemClick}
            >
              <Heart className="w-4 h-4" />
              <div className="text-start">
                <p className="text-xs">Reorder</p>
                <p className="font-bold">My Items</p>
              </div>
            </button>
            <button
              className="flex items-center gap-2 hover:bg-white/10 py-2 px-5 rounded-full w-full"
              onClick={handleMenuItemClick}
            >
              <User className="w-4 h-4" />
              <div className="text-start">
                <p className="text-xs">Sign In</p>
                <p className="font-bold">Account</p>
              </div>
            </button>
            <button
              className="flex items-center flex-col hover:bg-white/10 py-2 px-5 rounded-full w-full"
              onClick={handleMenuItemClick}
            >
              <span className="relative">
                <span className="absolute bg-yellow-600 flex justify-center items-center -top-2 -right-2 h-4 w-4 text-xs rounded-full">
                  0
                </span>
                <ShoppingCart />
              </span>
              <div>
                <p className="font-bold">$0.00</p>
              </div>
            </button>
          </div>
        )}

        {/* Actions - horizontal on md+ */}
        <div className="hidden sm:flex flex-col sm:flex-row gap-2 items-center w-full sm:w-auto bg-transparent sm:static left-0 top-full z-20 sm:top-auto sm:left-auto p-4 sm:p-0">
          <button className="flex items-center gap-2 hover:bg-white/10 py-2 px-5 rounded-full w-full sm:w-auto">
            <Heart className="w-4 h-4" />
            <div className="text-start">
              <p className="text-xs">Reorder</p>
              <p className="font-bold">My Items</p>
            </div>
          </button>
          <button className="flex items-center gap-2 hover:bg-white/10 py-2 px-5 rounded-full w-full sm:w-auto">
            <User className="w-4 h-4" />
            <div className="text-start">
              <p className="text-xs">Sign In</p>
              <p className="font-bold">Account</p>
            </div>
          </button>
          <button className="flex items-center flex-col hover:bg-white/10 py-2 px-5 rounded-full w-full sm:w-auto">
            <span className="relative">
              <span className="absolute bg-yellow-600 flex justify-center items-center -top-2 -right-2 h-4 w-4 text-xs rounded-full">
                0
              </span>
              <ShoppingCart />
            </span>
            <div>
              <p className="font-bold">$0.00</p>
            </div>
          </button>
        </div>
      </div>
      {/* Mobile search input overlay */}
      {mobileSearchOpen && (
        <div className="sm:hidden pb-2 flex items-center bg-white text-black py-1.5 px-5 rounded-full w-full relative animate-fade-in">
          <input
            type="text"
            placeholder="Search everything we have online"
            className="w-full outline-none text-sm bg-transparent"
            autoFocus
          />
          <button
            className="bg-primary text-white p-2 rounded-full ml-2"
            onClick={() => setMobileSearchOpen(false)}
            aria-label="Close search"
          >
            <X />
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
