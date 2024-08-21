import React from "react";

const AgentRegisterDataContainer = ({ intro }) => {
  return (
    <div className="investment-data-container pd-top-60 pd-bottom-35 ">
      <div class="container">
        <div>
          <h3>{intro?.title}</h3>
          <p
            className="generalDiv"
            dangerouslySetInnerHTML={{
              __html: intro?.subtitle,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AgentRegisterDataContainer;
