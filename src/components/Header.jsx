import React, { useState } from "react";
import { Button } from "./../components/ui/button";
import { FaCircleUser, FaBars } from "react-icons/fa6";
import { SignInButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between p-5 items-center shadow-sm">
      {/* Logo */}
      <Link to={'/'}>
        <img src="/logo.svg" width={140} height={100} className="cursor-pointer" />
      </Link>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <FaBars
          className="text-2xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Links - Desktop */}
      <ul className="hidden md:flex gap-8 lg:gap-16">
        <Link to={'/'}>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Home
          </li>
        </Link>
        <Link to={'/Search'}>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Search
          </li>
        </Link>
        <Link to={'/Search'}>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            New
          </li>
        </Link>
        <Link to={'/Search'}>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Preowned
          </li>
        </Link>
      </ul>

      {/* Links - Mobile */}
      {isMenuOpen && (
        <ul className="absolute top-16 right-5 bg-white shadow-lg rounded-lg p-5 space-y-4 z-10 md:hidden">
          <Link to={'/'}>
            <li
              className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </li>
          </Link>
          <Link to={'/Search'}>
            <li
              className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Search
            </li>
          </Link>
          <Link to={'/Search'}>
            <li
              className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              New
            </li>
          </Link>
          <Link to={'/Search'}>
            <li
              className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Preowned
            </li>
          </Link>
        </ul>
      )}

      {/* Profile and Submit Listing Button */}
      <div className="flex items-center gap-3 md:gap-5">
        <SignInButton mode="modal">
          <FaCircleUser className="cursor-pointer text-2xl text-red-500" />
        </SignInButton>

        <Link to={'/Profile'}>
          <Button>Submit Listing</Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
