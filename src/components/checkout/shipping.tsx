import Image from "next/image";
import React from "react";

const Shipping = () => {
  return (
    <div className="w-full max-w-[872px] pt-[48px] pb-[80px]">
      <form>
        <div className="pt-[24px] grid lg:grid-cols-2">
          <div>
            <label htmlFor="email" className="input_label">
              Full Name
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm bg-gray-50 max-w-[424px] mt-[6px]"
                required
                aria-describedby="email-error"
                placeholder="Ashraful Tamim"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="input_label">
              Phone Number
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm bg-gray-50 max-w-[424px] mt-[6px]"
                required
                aria-describedby="email-error"
                placeholder="01712-345678"
              />
            </div>
          </div>
          <div className="pt-6">
            <label htmlFor="email" className="input_label">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm bg-gray-50 max-w-[424px] mt-[6px]"
                required
                aria-describedby="email-error"
                placeholder="demo@gmail.com"
              />
            </div>
            <label htmlFor="email" className="input_label text-gray-600">
              Not necessary
            </label>
          </div>
          <div className="pt-6">
            <label htmlFor="email" className="input_label">
              Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm bg-gray-50 max-w-[424px] mt-[6px]"
                required
                aria-describedby="email-error"
                placeholder="Rangpur sadar, Rangpur"
              />
            </div>
          </div>
        </div>
        <div className="border-b pb-4">
          <div className="flex items-center gap-x-2 mt-6">
            <input
              type="checkbox"
              className="checkbox checkbox-success cursor-default h-4 w-4"
            />
            <p>Set as default</p>
          </div>
          <button className="w-fit px-8 py-3 bg-[#208B18] text-white rounded-md font-medium mt-5 ">
            Save Address
          </button>
        </div>
      </form>

      <div className="mt-[40px] mb-[24px]">
        {" "}
        <h3 className="font-semibold text-2xl leading-[32px] text-gray-800 py-3 border-b">
          Payment
        </h3>
        <p className="h6 pt-2 text-gray-600">Select payment method</p>
        <div className="mt-6 grid lg:grid-cols-4">
          <div className="w-full max-w-[180px] border py-[14px] px-[30px] border-gray-200 rounded-lg hover:bg-gray-100 cursor-pointer">
            <Image
              src="/payment/bikash.png"
              alt=""
              width={120}
              height={80}
              className="mx-auto"
            />
            <h5 className="h6 font-semibold text-center">Bkash</h5>
          </div>
          <div className="w-full max-w-[180px] border py-[14px] px-[30px] border-gray-200 rounded-lg hover:bg-gray-100 cursor-pointer">
            <Image
              src="/payment/nogod.png"
              alt=""
              width={120}
              height={80}
              className="mx-auto"
            />
            <h5 className="h6 font-semibold text-center">Nagad</h5>
          </div>
          <div className="w-full max-w-[180px] border py-[14px] px-[30px] border-gray-200 rounded-lg hover:bg-gray-100 cursor-pointer">
            <Image
              src="/payment/roket.png"
              alt=""
              width={120}
              height={80}
              className="mx-auto"
            />
            <h5 className="h6 font-semibold text-center">Rocket</h5>
          </div>
          <div className="w-full max-w-[180px] border py-[14px] px-[30px] border-gray-200 rounded-lg hover:bg-gray-100 cursor-pointer">
            <Image
              src="/payment/cash_on.png"
              alt=""
              width={120}
              height={80}
              className="mx-auto"
            />
            <h5 className="h6 font-semibold text-center">Cash On Delivery</h5>
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-50 rounded-lg">
        <h6 className="price ">
          Please ensure the following before you proceed:
        </h6>
        <p className="h6">1. You have an activated Account</p>
        <p className="h6">
          2. Ensure you have sufficient balance in your Bkash account to cover
          the total cost of the order
        </p>
        <p className="h6">
          3. Ensure you can receive your OTP (one-time-password) on your mobile
          and have a PIN
        </p>
        <button className="w-fit px-8 py-3 bg-[#208B18] text-white rounded-md font-medium mt-[40px] lg:w-[312px]">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Shipping;
