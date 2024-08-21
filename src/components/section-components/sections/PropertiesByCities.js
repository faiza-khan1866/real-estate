import React from "react";
import { Link } from "react-router-dom";
import "./Propertiesbycities.scss";

const PropertiesByCities = (props) => {
  return (
    <div className={"properties-by-cities-area"}>
      <div className="section-title text-center">
        <h2 className="title" style={{ color: "#BA945C" }}>
          PROPERTIES BY EMIRATES
        </h2>
      </div>
      <div className="row">
        {props.emiratesData?.map((item, i) => (
          <div key={i} className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <Link
              to={{
                pathname: "/search-list",
                state: `${item.name}`,
              }}
            >
              <div
                className="buildingDiv"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url('${item.featured_img}')`,
                  cursor: "pointer",
                }}
              >
                <div className="bottom-left">
                  <h4 className="title">
                    {
                      // PropertiesData.length < 1 ? <Link className="btn btn-yellow" to="">Search Now</Link>
                      // :
                      <Link
                        to={{
                          pathname: "/search-list",
                          state: `${item.name}`,
                        }}
                      >
                        {item.name}
                      </Link>
                    }
                  </h4>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesByCities;
