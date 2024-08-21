import React, { useEffect } from "react";
import TabPanelProperties from "../../layouts/TabPanelProperties";

const PropertyBanner = ({ bannerImg, property }) => {
  useEffect(() => {
    const $ = window.$;
    if ($(".single-select").length) {
      $(".single-select").niceSelect();
    }
  }, []);

  return (
    <div className="property-page">
      {/* banner area start */}
      <div
        className="property-banner banner-area2 jarallax"
        style={{
          backgroundImage: `url(${bannerImg})`,
          marginTop: "7rem",
          height: "700px",
        }}
      >
        <div className="container">
          <div className="banner-inner-wrap">
            <div className="row"></div>
          </div>
        </div>
      </div>
      {/* banner area end */}
      {/* main search area start */}
      <TabPanelProperties property={property} />
      {/* main search area end */}
    </div>
  );
};

export default PropertyBanner;
