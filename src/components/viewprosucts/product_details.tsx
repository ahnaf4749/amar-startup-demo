import React from "react";
import ProductCarouselPage from "../carousel/product_carousel";

const ProductDeatailsPage = () => {
  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-2">
            <ProductCarouselPage />
          </div>

          <div className="mt-3">
            <div className="flex items-center justify-between">
              <p>5.0</p>
              <div className="-ms-0.5 flex">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  className="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  className="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  className="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  className="h-5 w-5 text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p>Review (12) | Sold 99</p>
              <div className="flex items-center gap-1">
                <img src="" alt="" />
                <p>Wishlist</p>
              </div>
            </div>

            <div className="mt-10">
              <div className="">
                <h1 className="text-xl font-bold lg:text-4xl">
                  Quality Brand Shirt{" "}
                </h1>

                <div className="flex gap-2 mt-7">
                  <h3 className="text-[#A7A7A7] text-xl">$160.00</h3>
                  <div className="border-[#FA541C] border w-[54px] h-[26px]">
                    <h3 className="text-[#FA541C] text-xl rounded-sm">-10%</h3>
                  </div>
                </div>

                <h1 className="text-xl font-bold lg:text-5xl mt-6">$128.00</h1>
              </div>
            </div>
            <div className="flex mt-5 gap-2 items-center bg-[#E2F8E4] p-2 w-[130px] rounded-md justify-center">
              <input
                type="checkbox"
                // checked="checked"
                className="checkbox checkbox-success cursor-default h-4 w-4"
              />
              <p>in Stock</p>
            </div>

            <form className="mt-4">
              <fieldset className="mt-4">
                <legend className="mb-1 text-sm font-medium">Size</legend>

                <div className="flex flex-wrap gap-1 mt-2">
                  <label htmlFor="size_xs" className="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size_xs"
                      className="peer sr-only"
                    />

                    <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                      XS
                    </span>
                  </label>

                  <label htmlFor="size_s" className="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size_s"
                      className="peer sr-only"
                    />

                    <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                      S
                    </span>
                  </label>

                  <label htmlFor="size_m" className="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size_m"
                      className="peer sr-only"
                    />

                    <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                      M
                    </span>
                  </label>

                  <label htmlFor="size_l" className="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size_l"
                      className="peer sr-only"
                    />

                    <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                      L
                    </span>
                  </label>

                  <label htmlFor="size_xl" className="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size_xl"
                      className="peer sr-only"
                    />

                    <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                      XL
                    </span>
                  </label>
                </div>
              </fieldset>

              <div className="mt-7 flex gap-x-4">
                <div className="flex items-center">
                  <h3 className="text-[#637381]">Quantity</h3>
                  <p className="cursor-pointer">-</p>
                  <label htmlFor="quantity" className="sr-only">
                    Qty
                  </label>

                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value="2"
                    className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <p className="cursor-pointer">+</p>
                </div>
              </div>
              <div className="flex justify-between mt-5">
                <button
                  type="submit"
                  className="block rounded bg-[#FA541C] px-5 py-3 text-xs font-bold text-white hover:[#FA541C]"
                >
                  Add Cart
                </button>
                <button
                  type="submit"
                  className="block rounded bg-[#212B36] px-5 py-3 text-xs font-bold text-white hover:[#212B36]"
                >
                  Buy Now
                </button>
                <div className="flex items-center gap-1 border p-2">
                  <img src="" alt="" />
                  <p>55</p>
                </div>
              </div>
            </form>
          </div>

          <div className="lg:col-span-3 mt-14">
            <div className="flex gap-5 ">
              <p className="text-[#FA541C] font-medium text-2xl underline">
                Description
              </p>
              <p className="text-[#383838] font-medium text-2xl">
                Reviews (200)
              </p>
              <p className="text-[#383838] font-medium text-2xl">Overview</p>
            </div>
            <div className="prose max-w-none mt-5">
              <p className="text-[#0d0d0d] font-medium mt-10 text-lg">
                Description
              </p>
              <p className="mt-3">
                The United Colors of Red Quality Shirt is a great choice to wear
                when going for Stylish look. Its comfortable and sleek giving
                the appearance of a more dressy shirt without being too heavy or
                stiff on the body and it looks wonderful. Choosing the best
                quality shirt among the best women shirt brands is a tough
                decision. You need to consider the fabric, style, pattern, and
                fit. After analyzing the customer review, we have seen that
                Diverse women Stylish Shirt is won as the best quality shirt
                among the best women shirt brands. It is one of the luxury shirt
                brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDeatailsPage;
