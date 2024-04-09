import Image from "next/image";
import React from "react";
import location from "@/assest/location.png";
import cart from "@/assest/cart.png";
import profile from "@/assest/profile.png";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div className="container pt-[30px] pb-[24px] border-b">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <div className="flex items-center justify-around">
                <div className="flex items-center gap-x-2">
                  <Image src={location} alt="" />
                  <p className="text-[12px] font-normal leading-4">
                    Delivery to <br />
                    <span className="text-[16px] font-medium leading-6 text-gray-700">
                      Location
                    </span>
                  </p>
                </div>
                <div className="relative w-[614px] ml-[32px]">
                  <input
                    className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    type="search"
                    placeholder="Search for anything..."
                  />
                  <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    Search
                    <svg
                      className="h-5 w-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex gap-x-4">
              <Image src={cart} alt="" />
              <Image src={profile} alt="" />
            </div>
            <p className="text-[12px] font-normal leading-4">
              Sign in <br />
              <span className="text-[16px] font-medium leading-6 text-gray-700">
                Account
              </span>
            </p>
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
