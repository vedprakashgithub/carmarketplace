import React from "react";
import { Button } from "./../components/ui/button";
import { FaCircleUser } from "react-icons/fa6";
import {SignInButton} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function Header() {

  return (
    <div className="flex justify-between p-5 items-center shadow-sm ">
      <Link to={'/'}>
      <img src="/logo.svg" width={180} height={130} className="cursor-pointer"/>
      </Link>
      <ul className="hidden md:flex gap-16">
        <Link to={'/'}>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Home</li>
        </Link>
        <Link to={'/Search'}>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Search</li>
        </Link>
        <Link to={'/Search'}>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">New</li>
        </Link>
        <Link to={'/Search'}>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Preowned</li>
        </Link>
      </ul>
      <div className="flex items-center gap-5">
        <div>
          <SignInButton mode="modal">
            <FaCircleUser className="cursor-pointer text-2xl text-red-500" />
          </SignInButton>
        </div>

        <Link to={'/Profile'}>
        <Button>Submit Listing</Button>
        </Link>
    </div>
    </div>
  );
}

export default Header;
