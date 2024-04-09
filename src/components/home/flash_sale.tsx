import { products } from "@/constants/product";
import Image from "next/image";
import React from "react";

const FlashProducts = () => {
  const allProducts = products;

  const flashProducts = allProducts.filter((product) =>
    product.sub.includes("flash")
  );

  return (
    <div className="container py-section">
      <div className="pb-[16px] border-b flex items-center justify-between">
        <h1 className="h4 text-gray-900 ">Flash Sale</h1>
        <div className="flex">
          <h4 className="text-[#E38407] h6 font-medium">View All</h4>
          <Image src="/right-arrow.png" alt="" width={24} height={24} />
        </div>
      </div>
      <div className="grid lg:grid-cols-5 gap-y-5 mt-6">
        {flashProducts.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full h-full max-w-[264px] relative border-r ${
                index === 4 || index === 9 || index === 13 ? "border-none" : ""
              }`}
            >
              <div className="py-4 px-[38px]">
                <Image
                  src={item.image}
                  alt=""
                  width={188}
                  height={188}
                  className="mx-auto"
                />
              </div>

              <div className="flex flex-col justify-between p-6">
                <div className="py-8">
                  <div className=" flex justify-center items-center px-2 ">
                    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                      <div className="py-4 px-6">
                        <div className="flex flex-wrap gap-4 justify-center items-center">
                          <div className="border rounded-lg px-4 py-2">
                            <div
                              id="days"
                              className="font-bold font-mono text-2xl text-gray-800"
                            ></div>
                          </div>
                          <div className="border rounded-lg px-4 py-2">
                            <div
                              id="hours"
                              className="font-bold font-mono text-2xl text-gray-800"
                            ></div>
                          </div>
                          <div className="border rounded-lg px-4 py-2">
                            <div
                              id="minutes"
                              className="font-bold font-mono text-2xl text-gray-800"
                            ></div>
                          </div>
                          <div className="border rounded-lg px-4 py-2">
                            <div
                              id="seconds"
                              className="font-bold font-mono text-2xl text-gray-800"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="h5 pb-2 pt-[14px]">{item.name}</h3>
                  <div className="flex items-center gap-x-4">
                    <h5 className="price">499 Tk</h5>
                    <h5 className="price font-normal text-base text-gray-400 line-through">
                      599 Tk
                    </h5>
                  </div>
                </div>
                <div className="absolute bottom-0 left-6 right-6 ">
                  <div className="flex justify-between items-center">
                    <div>
                      <h6 className="quantity">250 ml</h6>
                      <h6 className="h6 text-red-500">21 in stock</h6>
                    </div>
                    <div className="flex items-center border rounded-full w-fit px-3 py-[2px] gap-x-2 border-[#E38407]">
                      <Image src="/plus.png" alt="" height={16} width={16} />
                      <p className="h6 text-[#E38407]">Add</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlashProducts;
