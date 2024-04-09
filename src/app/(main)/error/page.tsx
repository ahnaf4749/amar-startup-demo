import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="py-[96px]">
      <div className="w-full lg:max-w-[480px] mx-auto">
        <Image src="/error.png" alt="" height={388} width={480} />
        <div className="text-center">
          <h4 className="h4 pb-4">Page not found!</h4>
          <p className="h6 font-normal text-gray-600 mb-6">
            We&apos;re sorry! This page is currently unavailable. We request you
            to please try again later.
          </p>
        </div>
        <Link href="/">
          <button
            type="submit"
            className="py-3 px-4 w-full flex justify-center items-center gap-2 rounded-lg border font-semibold bg-[#28AD1F] text-white hover:bg-[#208B18]"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
