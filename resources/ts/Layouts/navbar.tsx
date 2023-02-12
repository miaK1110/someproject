import { useState, FC } from "react";
import { BsHandbag, BsHeart, BsSearch } from "react-icons/bs";

interface IProps {}

const NavBar: React.FC<IProps> = () => {
  return (
    <>
      <nav>
        <div className="flex flex-row-reverse p-2 md:w-[80%]">
          <a href="">
            <div className="inline-flex items-center">
              <BsHeart className="mr-1" />
              <p className="text-xs text-black">WishList</p>
            </div>
          </a>
          <a href="">
            <div className="inline-flex items-center">
              <BsHandbag className="mr-1" />
              <p className="mr-5 text-xs text-black">My Bag</p>
            </div>
          </a>
        </div>
        <div className="border"></div>
        <div className="container mx-auto">
          <div className="mx-auto flex justify-between md:w-[80%]">
            {/* logo */}
            <div className="text-2xl font-bold">NONAMEYET</div>
            {/* search input */}
            <div className="relative border-x hover:border hover:border-black focus:border focus:border-black">
              <input
                type="search"
                name="searchProducts"
                className="py-2 pl-10 pr-10 text-sm focus:outline-none"
                placeholder="Search 100+ products"
                autoComplete="off"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button type="submit" className="p-1 focus:outline-none">
                  <BsSearch className="h-4 w-4" />
                </button>
              </span>
            </div>
            {/* sign up and login link */}
            <div className="p-2 text-xs">
              <a href="" className="mr-5">
                Sign up
              </a>
              <a href="">Login</a>
            </div>
          </div>
        </div>
        <div className="border"></div>
      </nav>
    </>
  );
};

export default NavBar;

// className={
//     isSearchInputOnFocus
//       ? `${outlineOnFocus} relative border-x`
//       : "relative border-x hover:border hover:border-black"
//   }
