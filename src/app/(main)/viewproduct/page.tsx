import SideNavBar from "@/components/shared/side_navbar";
import ViewAllProductPage from "@/components/viewprosucts/allProduct";
import AllProductPage from "@/components/viewprosucts/allProduct";
import React from "react";

const ViewProductPage = () => {
  return (
    <div className="container pb-[48px]">
      <div className="text-center py-[64px] bg-[#FAFAFA] ">
        <h5 className="h6 text-neutral-600">
          Home/<span className="text-gray-700">Top selling product</span>
        </h5>
        <h4 className="h4">Top Selling Product</h4>
      </div>
      <div className="flex gap-x-6">
        <SideNavBar />
        <ViewAllProductPage />
      </div>
    </div>
  );
};

export default ViewProductPage;
<div></div>;
