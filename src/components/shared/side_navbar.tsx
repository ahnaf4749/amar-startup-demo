"use client";
import React from "react";
import Rating from "react-rating";

const SideNavBar = () => {
  interface SVGIconProps {
    className?: string;
    href: string;
  }

  const SVGIcon: React.FC<SVGIconProps> = ({ className, href }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.52733 1.99924C9.56583 1.90083 9.63139 1.81664 9.71567 1.75739C9.79995 1.69814 9.89914 1.6665 10.0006 1.6665C10.1021 1.6665 10.2013 1.69814 10.2856 1.75739C10.3699 1.81664 10.4354 1.90083 10.4739 1.99924L12.4081 6.87452C12.4443 6.96575 12.5038 7.04474 12.5801 7.1028C12.6563 7.16086 12.7464 7.19575 12.8404 7.20361L17.8628 7.62523C18.317 7.66338 18.5008 8.25765 18.1549 8.56766L14.3285 12.0035C14.2571 12.0676 14.2038 12.1511 14.1746 12.2448C14.1453 12.3385 14.1413 12.4389 14.1629 12.5349L15.3325 17.6715C15.356 17.7746 15.3498 17.8826 15.3148 17.982C15.2797 18.0814 15.2173 18.1676 15.1355 18.2299C15.0537 18.2922 14.9561 18.3276 14.8551 18.3318C14.7541 18.336 14.6542 18.3087 14.5679 18.2534L10.2673 15.5014C10.187 15.4501 10.0947 15.423 10.0006 15.423C9.90655 15.423 9.81428 15.4501 9.73394 15.5014L5.43333 18.2543C5.3471 18.3096 5.24716 18.3369 5.14613 18.3328C5.04511 18.3286 4.94752 18.2931 4.86571 18.2309C4.78391 18.1686 4.72154 18.0823 4.68649 17.9829C4.65143 17.8836 4.64527 17.7755 4.66878 17.6724L5.83836 12.5349C5.86006 12.4389 5.85607 12.3385 5.82684 12.2448C5.79762 12.151 5.74428 12.0676 5.67271 12.0035L1.84631 8.56766C1.76968 8.49861 1.71425 8.40736 1.68698 8.30538C1.65971 8.2034 1.66182 8.09524 1.69305 7.99452C1.72427 7.89379 1.78322 7.80499 1.86248 7.73928C1.94173 7.67357 2.03776 7.63389 2.13847 7.62523L7.16086 7.20361C7.25483 7.19575 7.34492 7.16086 7.4212 7.1028C7.49747 7.04474 7.55699 6.96575 7.59319 6.87452L9.52733 1.99924Z"
        fill="#FFBF0F"
      />
    </svg>
  );
  return (
    <div>
      <div className="">
        <div className="space-y-2 w-full max-w-[240px]">
          <div className="overflow-hidden mb-6">
            <summary className="flex  items-center justify-between gap-2 bg-white py-2 text-gray-900 transition">
              <span className="h5 text-gray-800"> Price </span>
            </summary>

            <div className="border-t border-gray-200 bg-white">
              <header className="flex items-center justify-between py-3">
                <span className="text-sm text-gray-700">
                  The highest price is 2550 Tk
                </span>
              </header>

              <div className="border-t border-gray-200 py-4">
                <div className="flex justify-between gap-4">
                  <label
                    htmlFor="FilterPriceFrom"
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm text-gray-600">Tk</span>

                    <input
                      type="number"
                      id="FilterPriceFrom"
                      placeholder="From"
                      className="w-full rounded-md border border-gray-300 shadow-sm sm:text-sm py-[6px] px-[10px]"
                    />
                  </label>

                  <label
                    htmlFor="FilterPriceTo"
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm text-gray-600">Tk</span>

                    <input
                      type="number"
                      id="FilterPriceFrom"
                      placeholder="To"
                      className="w-full rounded-md border border-gray-300 shadow-sm sm:text-sm py-[6px] px-[10px] input-bo"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <summary className="flex items-center justify-between gap-2 bg-white pb-2 text-gray-900 transition">
              <span className="h5 text-gray-800"> Availability </span>
            </summary>

            <div className="border-t border-gray-200 bg-white">
              <ul className="space-y-1  py-4">
                <li>
                  <label
                    htmlFor="FilterInStock"
                    className="inline-flex items-center gap-2"
                  >
                    <input type="checkbox" id="FilterInStock" className="h6" />

                    <span className="h6"> In Stock (5+) </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterPreOrder"
                    className="inline-flex items-center gap-2"
                  >
                    <input type="checkbox" id="FilterPreOrder" className="h6" />

                    <span className="h6"> Pre Order (3+) </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterOutOfStock"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterOutOfStock"
                      className="h6"
                    />

                    <span className="h6"> Out of Stock (10+) </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="overflow-hidden">
            <summary className="flex items-center justify-between gap-2 bg-white pb-2 text-gray-900 transition">
              <span className="h5 text-gray-800"> Rating </span>
            </summary>

            <div className="border-t border-gray-200 bg-white ">
              {/* ts-ignore */}
              <Rating
                emptySymbol={
                  <SVGIcon href="#icon-star-empty" className="icon" />
                }
                fullSymbol={<SVGIcon href="#icon-star-full" className="icon" />}
                readonly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
