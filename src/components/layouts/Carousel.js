import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeIntroduction from "../section-components/homepage/HomeIntroduction";

export default (props) => (
  <Carousel
    dynamicHeight={false}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
    infiniteLoop={true}
    autoPlay={true}
    emulateTouch={true}
    className="homepage-carousel"
  >
    {props?.carouselData?.map((x, index) => (
      <div>
        <HomeIntroduction
          image={x.background_image}
          title={x.title}
          subtitle={x.subtitle}
          content={x.content}
        />
      </div>
    ))}
  </Carousel>
);
