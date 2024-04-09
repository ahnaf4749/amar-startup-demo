import { category } from "@/constants/category";
import Image from "next/image";
import React from "react";

const CategoryPage = () => {
  const allCategory = category;
  console.log(allCategory);

  return (
    <div className="container py-section">
      <div className="pb-[16px] border-b">
        <h1 className="h4 text-gray-900 ">Category</h1>
      </div>
      <div className="grid lg:grid-cols-4 gap-x-6">
        {allCategory.map((item, index) => {
          return (
            <div key={index}>
              <div className="pt-[24px]">
                <div>
                  <Image
                    src={item.image}
                    alt=""
                    width={312}
                    height={312}
                    className="bg-[#FCFCFC] rounded-full mb-2 border"
                  />
                </div>
                <h5 className="h5 text-[24px] font-medium text-gray-700 text-center">
                  {item.name}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
