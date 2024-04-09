import AllProductsPage from "@/components/home/all_product";
import BannerPage from "@/components/home/banner";
import CategoryPage from "@/components/home/category";
import FlashProducts from "@/components/home/flash_sale";
import MiddleBennarPage from "@/components/home/middle_bennar";
import PopularProducts from "@/components/home/popular_products";
import TopProductPage from "@/components/home/top_product";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <BannerPage />
      <CategoryPage />
      <TopProductPage />
      <PopularProducts />
      <MiddleBennarPage />
      <FlashProducts />
      <AllProductsPage />
    </Fragment>
  );
}
