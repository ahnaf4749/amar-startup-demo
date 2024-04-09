import Image from "next/image";
import React from "react";

const ThankYouPage = () => {
  return (
    <div className="container flex justify-center py-[90px]">
      <div className="max-w-[544px] w-full text-center ">
        <div className="">
          <Image
            src="/thankyou.png"
            alt=""
            width={120}
            height={120}
            className="mx-auto"
          />
          <h2 className="h2">Thank you</h2>
          <p className="h6 py-2">
            Thank you for your purchase! Your order has been placed and is being
            processed.{" "}
          </p>
          <div className="flex gap-x-6 pt-[40px]">
            <button className="w-full py-3 border  text-center rounded-xl">
              View Order
            </button>
            <button className="w-full py-3 bg-[#208B18] text-white text-center rounded-xl">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
