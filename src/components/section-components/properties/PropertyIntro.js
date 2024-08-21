import React from "react";

const PropertyIntro = ({ propertyIntro }) => {
  return (
    <div className="PropertyIntro-area">
      <div className="container-mg-30">
        <div className="section-title text-center">
          <h2 className="title">{propertyIntro?.title}</h2>
          <p
            className="sub-title generalDiv"
            dangerouslySetInnerHTML={{
              __html: propertyIntro?.content,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyIntro;