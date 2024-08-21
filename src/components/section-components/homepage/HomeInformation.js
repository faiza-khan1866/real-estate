import React from "react";
import HomeMenu from "./HomeMenu";
import Carousel from "../../layouts/Carousel";

let publicUrl = process.env.PUBLIC_URL;
const HomeInformation = (props) => (
  <div className="homepage-wrapper">
    <div className={"logoDiv"}>
      <div className="site-logo">
        <img
          src={publicUrl + "/assets/img/Makeen_Logo.png"}
          alt="makeen logo"
          height={106}
          width={170}
        />
        <h6>A REAL ESTATE OF MIND </h6>
        <p>A Ghobash Group Company</p>
      </div>
      <Carousel carouselData={props?.sliderData} />
    </div>
    <HomeMenu />
  </div>
);

export default HomeInformation;
