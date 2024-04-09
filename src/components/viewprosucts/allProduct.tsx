"use client";

import { products } from "@/constants/product";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const ViewAllProductPage = () => {
  const people = [
    { name: "Best selling" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
  ];

  const [selected, setSelected] = useState(people[0]);

  const allProducts = products;

  return (
    <div className="border">
      <div className="border-b px-4 py-[11px] flex items-center justify-between *:w-full">
        <div className="h6">Showing 1-16 of 25 result</div>
        <div className="flex items-center justify-end gap-x-2">
          <span className="block">Short by:</span>
          <div className="w-full max-w-[160px]">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-pointer py-2 pl-3 pr-10 text-left sm:text-sm border">
                  <span className="h6">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-700"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 px-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 gap-y-5 mt-6 mb-10">
        {allProducts.map((item, index) => {
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
                  <div className="flex items-center justify-between">
                    <p className="h6 text-[#E38407] bg-[#FFFBF5] px-2 py-1 rounded-full">
                      In Stock
                    </p>
                    <div className="flex items-center gap-x-1">
                      <h5 className="h6">4.9</h5>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.52733 1.99948C9.56583 1.90107 9.63139 1.81689 9.71567 1.75764C9.79995 1.69839 9.89914 1.66675 10.0006 1.66675C10.1021 1.66675 10.2013 1.69839 10.2856 1.75764C10.3699 1.81689 10.4354 1.90107 10.4739 1.99948L12.4081 6.87477C12.4443 6.96599 12.5038 7.04498 12.5801 7.10304C12.6563 7.16111 12.7464 7.19599 12.8404 7.20386L17.8628 7.62547C18.317 7.66363 18.5008 8.25789 18.1549 8.56791L14.3285 12.0038C14.2571 12.0679 14.2038 12.1514 14.1746 12.2451C14.1453 12.3388 14.1413 12.4391 14.1629 12.5351L15.3325 17.6717C15.356 17.7748 15.3498 17.8828 15.3148 17.9822C15.2797 18.0816 15.2173 18.1679 15.1355 18.2302C15.0537 18.2924 14.9561 18.3279 14.8551 18.332C14.7541 18.3362 14.6542 18.3089 14.5679 18.2536L10.2673 15.5017C10.187 15.4503 10.0947 15.4232 10.0006 15.4232C9.90655 15.4232 9.81428 15.4503 9.73394 15.5017L5.43333 18.2546C5.3471 18.3099 5.24716 18.3372 5.14613 18.333C5.04511 18.3288 4.94752 18.2934 4.86571 18.2311C4.78391 18.1688 4.72154 18.0826 4.68649 17.9832C4.65143 17.8838 4.64527 17.7757 4.66878 17.6727L5.83836 12.5351C5.86006 12.4391 5.85607 12.3388 5.82684 12.245C5.79762 12.1513 5.74428 12.0678 5.67271 12.0038L1.84631 8.56791C1.76968 8.49886 1.71425 8.4076 1.68698 8.30562C1.65971 8.20364 1.66182 8.09549 1.69305 7.99476C1.72427 7.89404 1.78322 7.80524 1.86248 7.73953C1.94173 7.67382 2.03776 7.63414 2.13847 7.62547L7.16086 7.20386C7.25483 7.19599 7.34492 7.16111 7.4212 7.10304C7.49747 7.04498 7.55699 6.96599 7.59319 6.87477L9.52733 1.99948Z"
                          fill="#FFBF0F"
                        />
                      </svg>
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
                    <h6 className="quantity">250 ml</h6>

                    <div className="flex items-center border border-[#E38407] rounded-full w-fit px-3 py-[2px] gap-x-2">
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

export default ViewAllProductPage;
