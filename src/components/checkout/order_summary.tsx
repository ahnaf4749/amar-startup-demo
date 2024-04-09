import Image from "next/image";
import React from "react";

const OrderSummaryPage = () => {
  return (
    <div className="mt-[48px] w-full lg:max-w-[424px]">
      <div className=" border border-gray-200 rounded">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold text-2xl leading-[32px] text-gray-800">
            Order Summary
          </h3>
          <h6 className="h6 text-[#F89D26]">4 Items</h6>
        </div>
        <div className="flex items-center gap-x-4 p-4 border-b">
          <Image
            src="/honney.png"
            alt=""
            className="rounded-xl object-cover border"
            width={88}
            height={88}
          />

          <div>
            <h3 className="price">Natural Honey 250ml Honey</h3>

            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
              <div>
                <dt className="h6">Categories: Honey</dt>
                <dd className="h6">Weight: 250ml</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="flex items-center gap-x-4 p-4 border-b">
          <Image
            src="/honney.png"
            alt=""
            className="rounded-xl object-cover border"
            width={88}
            height={88}
          />

          <div>
            <h3 className="price">Natural Honey 250ml Honey</h3>

            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
              <div>
                <dt className="h6">Categories: Honey</dt>
                <dd className="h6">Weight: 250ml</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="flex items-center gap-x-4 p-4 border-b">
          <Image
            src="/honney.png"
            alt=""
            className="rounded-xl object-cover border"
            width={88}
            height={88}
          />

          <div>
            <h3 className="price">Natural Honey 250ml Honey</h3>

            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
              <div>
                <dt className="h6">Categories: Honey</dt>
                <dd className="h6">Weight: 250ml</dd>
              </div>
            </dl>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between py-3 px-4">
            <h6 className="h6 font-semibold">Subtotal</h6>
            <h6 className="h6 font-semibold">1996.00 Tk</h6>
          </div>
          <div className="flex items-center justify-between py-3 px-4">
            <h6 className="h6 ">Promo code?</h6>
            <h6 className="h6 ">1996.00 Tk</h6>
          </div>
          <div className="flex items-center justify-between py-3 px-4">
            <h6 className="h6 ">Promo code discount</h6>
            <h6 className="h6 ">00.00Tk</h6>
          </div>
          <div className="flex items-center justify-between py-3 px-4 border-b">
            <h6 className="h6 ">Shipping fee</h6>
            <h6 className="h6 ">70.00 Tk</h6>
          </div>
          <div className="flex items-center justify-between py-3 px-4 border-b">
            <h6 className="h6 font-semibold">Total</h6>
            <h6 className="h6 font-semibold">2066.00 Tk</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
