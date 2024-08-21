import React from "react";

const DataContainer = (props) => (
  <div className="data-container pd-top-320 pd-bottom-20 ">
    <div className="container">
      <div>
        <h2>{props?.welcomeSection?.title}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: props?.welcomeSection?.content,
          }}
        ></p>
      </div>
    </div>
  </div>
);

export default DataContainer;
