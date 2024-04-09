import Image from "next/image";
import React from "react";

const SignUp = () => {
  return (
    <section className="py-24">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <a href="/" className="h4 font-bold">
          Sign In
        </a>
        <div className="w-full  rounded-lg   md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="">
            <h6 className="h6 text-center pt-4 pb-10">
              Please sign in to your account.
            </h6>
            <form className="" method="POST" action="/auth/login/">
              <div>
                <label htmlFor="email" className="h6 text-sm">
                  Name
                </label>
                <input
                  type="email"
                  name="login"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-800 sm:text-sm rounded-md block w-full px-2 py-3 mt-[6px]"
                  placeholder="name"
                />
              </div>
              <div className="pt-4">
                <label htmlFor="email" className="h6 text-sm">
                  Phone or Email
                </label>
                <input
                  type="email"
                  name="login"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-800 sm:text-sm rounded-md block w-full px-2 py-3 mt-[6px]"
                  placeholder="name@company.com"
                />
              </div>
              <div className="py-4">
                <label htmlFor="password" className="h6 text-sm ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-800 sm:text-sm rounded-md block w-full px-2 py-3 mt-[6px]"
                />
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-teal-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 h6 font-normal"
                    >
                      Click ‘Sign up’ to agree to our{" "}
                      <span className="text-[#208B18] hover:underline cursor-pointer">
                        {" "}
                        Terms
                      </span>{" "}
                      and
                      <span className="text-[#208B18] hover:underline cursor-pointer">
                        {" "}
                        Privacy Policy.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="text-white hover:bg-[#1D7E16] bg-[#208B18] py-3 px-4  font-bold w-full rounded-md mb-3"
              >
                Sign in
              </button>

              <div className="flex items-center py-6">
                <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                <div className="px-5 text-center text-gray-500 dark:text-gray-400">
                  or
                </div>
                <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="flex items-center space-x-3 border justify-center py-3 rounded-md">
                <Image src="/google.png" alt="" height={24} width={24} />
                <h5 className="h6 font-semibold ">Sign in with Google</h5>
              </div>
              <p className="font-normal h6 text-gray-500 py-3">
                Don’t have an account yet?
                <a
                  href=""
                  className="font-normal h6 text-[#208B18] hover:underline "
                >
                  {" "}
                  Create Account
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
