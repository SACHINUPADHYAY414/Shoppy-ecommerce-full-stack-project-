import React from "react";

import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { mens_kurta } from "../Data/Men/men_kurta";
// import { lengha_page1 } from "../Data/Women/LenghaCholi";
import SubscribePage from "./HomePages/Galaxy S21 Ultra 5G";
import Collection from "./HomePages/Collection";
import SummerSaleproductAd from "./HomePages/SummerProductAd";
import SummerSaleproduct from "./HomePages/SummerSaleproduct";
import Page3 from "./HomePages/page3";
import CoustemerReview from "./HomePages/CoustmerReview";
import ProjectStatus from "./HomePages/ProjectStatus";
import AboutShoppy from "./HomePages/AboutShoppy";
import ShoppyAppDownload from "./HomePages/ShoppyAppDownload";
import BudgetBazaar from "../customer/Components/Home/BudgetBazaarCard";


const Homepage = () => {
  return (
  <div>
    
      <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />
        <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} />
        {/* <HomeProductSection data={lengha_page1} section={"Lengha Choli"} /> */}
        <HomeProductSection data={sareePage1} section={"Saree"} />
        <HomeProductSection data={dressPage1} section={"Dress"} />
        <HomeProductSection data={gounsPage1} section={"Women's Gouns"} />
        <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} />
        <BudgetBazaar/>
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
      </div>
      
    </div>
      <SubscribePage />
      <Collection />
      <SummerSaleproductAd/>
      <SummerSaleproduct />
      <Page3 />
      <CoustemerReview /> 
      <ProjectStatus />
     <AboutShoppy />
     <ShoppyAppDownload/>
  </div>
  );
};

export default Homepage;
