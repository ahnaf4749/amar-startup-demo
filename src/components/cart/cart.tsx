import Image from "next/image";
import React from "react";
import RelatedItemsPage from "../related_items/related_items";
import Link from "next/link";

const CartPage = () => {
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
                Cart
              </a>
            </li>
          </ol>
          <h3 className="h4 text-center">Cart</h3>
        </nav>
      </div>
      <div className="flex gap-x-6 py-section">
        <div className="overflow-x-auto rounded-lg max-w-[872px] w-full ">
          <table className="min-w-full bg-white text-sm ">
            <thead>
              <tr className="border">
                <th className="h6 text-gray-800 py-[16px] text-left px-4">
                  Name
                </th>
                <th className="h6 text-gray-800 text-left">Quantity</th>
                <th className="h6 text-gray-800">Total</th>
                <th className="h6 text-gray-800">Action</th>
              </tr>
            </thead>

            <tbody className="border">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  <div className="flex items-center gap-x-4 py-5">
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
                </td>
                <td className="">
                  <div className="flex items-center rounded border border-gray-200 w-[100px]">
                    <button
                      type="button"
                      className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                    >
                      &minus;
                    </button>

                    <input
                      type="number"
                      id="Quantity"
                      value="1"
                      className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />

                    <button
                      type="button"
                      className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="h6 text-gray-800 font-medium text-center">
                  $998.00
                </td>
                <td className="text-center">
                  <button className="transition text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                    >
                      <path
                        d="M15.7462 4.15039L15.1884 13.173C15.0459 15.4783 14.9747 16.6309 14.3968 17.4595C14.1112 17.8693 13.7433 18.215 13.3168 18.4749C12.4541 19.0005 11.2992 19.0005 8.9896 19.0005C6.67693 19.0005 5.52059 19.0005 4.65726 18.4739C4.23043 18.2136 3.8625 17.8672 3.57692 17.4568C2.99929 16.6268 2.92961 15.4726 2.79024 13.1641L2.24609 4.15039"
                        stroke="#EF3B2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M0.898438 4.15002H17.0985M12.6487 4.15002L12.0343 2.88257C11.6261 2.04064 11.4221 1.61967 11.07 1.35713C10.992 1.29889 10.9093 1.24709 10.8228 1.20223C10.433 1 9.9652 1 9.02956 1C8.07043 1 7.59086 1 7.19459 1.21071C7.10676 1.25741 7.02296 1.31131 6.94404 1.37185C6.58795 1.64503 6.38904 2.0814 5.99121 2.95414L5.4461 4.15002"
                        stroke="#EF3B2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M6.74609 14.0508L6.74609 8.65075"
                        stroke="#EF3B2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M11.25 14.0504L11.25 8.65039"
                        stroke="#EF3B2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody className="border">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  <div className="flex items-center gap-x-4 py-5">
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
                </td>
                <td className="">
                  <div className="flex items-center rounded border border-gray-200 w-[100px]">
                    <button
                      type="button"
                      className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                    >
                      &minus;
                    </button>

                    <input
                      type="number"
                      id="Quantity"
                      value="1"
                      className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />

                    <button
                      type="button"
                      className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="h6 text-gray-800 font-medium text-center">
                  $998.00
                </td>
                <td className="text-center">
                  <button className="transition text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                    >
                      <path
                        d="M15.7462 4.15039L15.1884 13.173C15.0459 15.4783 14.9747 16.6309 14.3968 17.4595C14.1112 17.8693 13.7433 18.215 13.3168 18.4749C12.4541 19.0005 11.2992 19.0005 8.9896 19.0005C6.67693 19.0005 5.52059 19.0005 4.65726 18.4739C4.23043 18.2136 3.8625 17.8672 3.57692 17.4568C2.99929 16.6268 2.92961 15.4726 2.79024 13.1641L2.24609 4.15039"
                        stroke="#EF3B2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M0.898438 4.15002H17.0985M12.6487 4.15002L12.0343 2.88257C11.6261 2.04064 11.4221 1.61967 11.07 1.35713C10.992 1.29889 10.9093 1.24709 10.8228 1.20223C10.433 1 9.9652 1 9.02956 1C8.07043 1 7.59086 1 7.19459 1.21071C7.10676 1.25741 7.02296 1.31131 6.94404 1.37185C6.58795 1.64503 6.38904 2.0814 5.99121 2.95414L5.4461 4.15002"
                        stroke="#EF3B2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M6.74609 14.0508L6.74609 8.65075"
                        stroke="#EF3B2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M11.25 14.0504L11.25 8.65039"
                        stroke="#EF3B2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full max-w-[392px] border rounded-xl p-4">
          <div>
            <h3 className="text-2xl font-bold leading-8 text-gray-800 py-4 border-b">
              Order Summary
            </h3>
            <div className="flex items-center justify-between py-4">
              <h6 className="h6">4 Items</h6>
              <h6 className="h6">$2,000.00</h6>
            </div>
            <div className="flex items-center justify-between py-4">
              <h6 className="h6">Discount</h6>
              <h6 className="h6">-$20.00</h6>
            </div>
            <div className="flex items-center justify-between py-4">
              <h6 className="h6">Subtotal</h6>
              <h6 className="h6">$1,980.00</h6>
            </div>
            <Link href="/thankyou">
              <button className="w-full py-3 bg-[#208B18] text-white text-center rounded-xl">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      <RelatedItemsPage />
    </div>
  );
};

export default CartPage;
