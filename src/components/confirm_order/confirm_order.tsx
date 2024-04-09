import React from "react";
import OrderSummaryPage from "../checkout/order_summary";
import Confirm from "./confirm";

const ConfirmOrderPage = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-center h-[204px] bg-gray-50 border-b">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1 text-sm text-gray-600">
            <li>
              <a href="#" className="h6">
                {" "}
                Home
              </a>
            </li>

            <li className="rtl:rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
              >
                <path
                  d="M1.00005 1C1.00005 1 6.99999 5.41893 7 7.00005C7.00001 8.58116 1 13 1 13"
                  stroke="#87858E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>

            <li>
              <a href="#" className="h6">
                {" "}
                Checkout
              </a>
            </li>
          </ol>
          <h3 className="h4 text-center">Checkout</h3>
        </nav>
      </div>
      <div className="flex gap-x-6">
        <Confirm />
        <OrderSummaryPage />
      </div>
    </div>
  );
};

export default ConfirmOrderPage;
