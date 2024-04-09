import React from "react";

const ForgetPassword = () => {
  return (
    <main className="w-full lg:max-w-[480px] mx-auto py-[96px]">
      <div className="mt-7">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="h4 text-gray-900 font-bold mb-[16px]">
              Forgot Your Password
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 mb-[40px]">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn&apos;t anything embarrassing hidden in the middle
              of text.
            </p>
          </div>

          <div className="mt-5">
            <form>
              <div className="grid gap-y-4">
                <div>
                  <label htmlFor="email" className="quantity">
                    Phone or Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full border-2 border-gray-200 bg-gray-50 rounded-md text-sm"
                      required
                      aria-describedby="email-error"
                      placeholder="Text here..."
                    />
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="email-error"
                  >
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-lg border font-semibold hover:bg-[#1D7E16] bg-[#208B18] text-white"
                >
                  Continue
                </button>
                <p className="h6 font-medium text-gray-500">
                  Remember your password?
                  <a
                    className="text-[#208B18] hover:underline font-medium"
                    href="#"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgetPassword;
