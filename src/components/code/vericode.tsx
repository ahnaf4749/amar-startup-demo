import React from "react";

const VeriFicationCode = () => {
  return (
    <main className="w-full lg:max-w-[480px] mx-auto py-[96px]">
      <div className="mt-7">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="h4 text-gray-900 font-bold mb-[12px]">
              Enter verification code
            </h1>
            <p className="h6 mb-[24px] text-gray-600 font-normal">
              Enter the code we sent to demo@gmail.com
            </p>
          </div>

          <div className="mt-5">
            <form>
              <div className="grid gap-y-4">
                <div className="flex justify-center gap-2 mb-6">
                  <input
                    className="w-[66.67px] h-[48px] text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    type="text"
                    maxLength={1}
                    pattern="[0-9]"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    required
                  />
                  <input
                    className="w-[66.67px] h-[48px] text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    type="text"
                    maxLength={1}
                    pattern="[0-9]"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    required
                  />
                  <input
                    className="w-[66.67px] h-[48px] text-center border rounded-md shadow-sm focus:border-[#208B18] focus:ring-[#208B18]"
                    type="text"
                    maxLength={1}
                    pattern="[0-9]"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    required
                  />
                  <input
                    className="w-[66.67px] h-[48px] text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    type="text"
                    maxLength={1}
                    pattern="[0-9]"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    required
                  />
                  <input
                    className="w-[66.67px] h-[48px] text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    type="text"
                    maxLength={1}
                    pattern="[0-9]"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    required
                  />
                  <input
                    className="w-[66.67px] h-[48px] text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    type="text"
                    maxLength={1}
                    pattern="[0-9]"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    required
                  />
                </div>
                <h6 className="h6 font-normol text-gray-500">
                  Didn&apos;t receive it?
                  <span className="text-[#208B18] cursor-pointer hover:underline font-normal">
                    {" "}
                    Get another code
                  </span>
                </h6>
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-lg border font-semibold hover:bg-[#1D7E16] bg-[#208B18] text-white"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VeriFicationCode;
