import Image from "next/image";
import React from "react";

const Confirm = () => {
  return (
    <div className="w-full max-w-[872px] pt-[48px] pb-[80px]">
      <div>
        <div className="flex items-center justify-between border-b">
          <h3 className="font-semibold text-2xl leading-[32px] text-gray-800 py-3 ">
            Delivery Address
          </h3>
          <button className="rounded-lg w-fit flex items-center px-4 py-2 border gap-x-2 border-gray-200 ">
            <Image src="/plus.png" alt="" height={18} width={18} />
            <p className="h6 text-[#208B18]">Add new</p>
          </button>
        </div>
      </div>
      <div className=" border-b">
        <div className="border bg-gray-50 rounded-lg my-6 w-full lg:max-w-[424px]">
          <div className="flex items-center justify-between border-b">
            <div className="flex items-center gap-x-3 p-4">
              <Image src="/payment/click.png" alt="" width={24} height={24} />
              <p>Set as default</p>
            </div>
            <Image src="/payment/three_dot.png" alt="" width={24} height={24} />
          </div>
          <div className="flex p-4">
            <div className="w-full lg:max-w-[124px]">
              <p className="h6 py-1">Name:</p>
              <p className="h6 py-1">Phone:</p>
              <p className="h6 py-1">Email:</p>
              <p className="h6 py-1">Address:</p>
            </div>
            <div>
              <p className="h6 py-1">Ashraful Tamim</p>
              <p className="h6 py-1">01712-345678</p>
              <p className="h6 py-1">demo@gmail.com</p>
              <p className="h6 py-1">Rangpur sadar, Rangpur</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px] mb-[24px]">
        <h3 className="font-semibold text-2xl leading-[32px] text-gray-800 py-3 border-b">
          Select payment method
        </h3>

        <div className="mt-6 grid lg:grid-cols-4">
          <div className="w-full max-w-[180px] border py-[14px] px-[30px] hover:border-[#208B18]  border-gray-200 rounded-lg hover:bg-[#EDF6ED] cursor-pointe">
            <Image
              src="/payment/bikash.png"
              alt=""
              width={120}
              height={80}
              className="mx-auto"
            />
            <h5 className="h6 font-semibold text-center">Bkash</h5>
          </div>
          <div className="w-full max-w-[180px] border py-[14px] px-[30px] hover:border-[#208B18] rounded-lg hover:bg-[#EDF6ED] cursor-pointer">
            <Image
              src="/payment/nogod.png"
              alt=""
              width={120}
              height={80}
              className="mx-auto"
            />
            <h5 className="h6 font-semibold text-center">Nagad</h5>
          </div>
          <div className="w-full max-w-[180px] border py-[14px] px-[30px] border-gray-200 hover:border-[#208B18] rounded-lg hover:bg-[#EDF6ED] cursor-pointer">
            <Image
              src="/payment/roket.png"
              alt=""
              width={120}
              height={80}
              className="mx-auto"
            />
            <h5 className="h6 font-semibold text-center">Rocket</h5>
          </div>
          <div className="w-full max-w-[180px] border py-[14px] px-[30px] border-gray-200 hover:border-[#208B18] rounded-lg hover:bg-[#EDF6ED] cursor-pointer">
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
        <h4 className="text-lg font-semibold leading-7">
          Bkash Payment Number
        </h4>
        <div className="flex items-center gap-x-3 pt-3">
          <h5>01712-345678</h5>
          <Image src="/payment/copy.png" alt="" width={24} height={24} />
        </div>
        <div>
          <div className="py-6 flex items-center gap-x-3 mt-[6px]">
            <div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm bg-gray-50 max-w-[424px] "
                  required
                  aria-describedby="email-error"
                  placeholder="Text here"
                />
              </div>
            </div>

            <label
              htmlFor="payment_ss"
              className="py-3 px-4 block w-fit border-2 border-gray-200 rounded-md text-sm bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <Image src="/payment/atach.png" alt="" width={16} height={16} />
                <span>Upload Image</span>
              </div>
              <input id="payment_ss" type="file" className="sr-only" />
            </label>
          </div>
        </div>
        <button className="w-fit px-8 py-3 bg-[#208B18] text-white rounded-md font-medium ">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Confirm;
