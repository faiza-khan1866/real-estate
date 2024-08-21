import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../properties/PropertySort.scss";
const SearchGrid = ({ buildingData, item, cityName }) => {
  const [items, setItems] = useState(buildingData);

  useEffect(() => {
    setItems(buildingData);
  }, [buildingData]);

  return (
    <div className="property-sort property-area">
      {/*Property filter Start*/}
      {buildingData ? (
        <h3 className={"searchTitle container-mg-30"}>Search List</h3>
      ) : (
        <h3 className={"searchTitle container-mg-30"}>
          <span>{cityName}</span> Properties
        </h3>
      )}
      {cityName && (
        <div className="container-mg-30">
          <div className="row">
            <div className="gallery-sizer" />
            {/*property item Start*/}
            {item
              ?.filter((x) => x.city === cityName)
              ?.map((item, i) => (
                <div key={i} className={"col-lg-4 col-sm-6 "}>
                  <Link
                    to={`/properties/${item?.properties?.category_type.toLowerCase()}/${item?.properties?.Property_type.toLowerCase()}/${
                      item?.properties?.slug
                    }`}
                  >
                    <div
                      className="buildingDiv"
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url('${item?.featured_img}')`,
                      }}
                    >
                      {item?.leased_sold_status && (
                        <div className="icon_div">
                          <span>{item?.leased_sold_status}</span>
                        </div>
                      )}
                      <div className="bottom-left">
                        <h4 className="title">
                          <Link
                            to={`/properties/${item?.properties?.category_type.toLowerCase()}/${item?.properties?.Property_type.toLowerCase()}/${
                              item?.properties?.slug
                            }`}
                          >
                            {item?.name}
                          </Link>
                        </h4>
                        <p className="subtitle">
                          {item?.area},&nbsp; {item?.city}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}
      {buildingData && (
        <div className="container-mg-30">
          <div className="row">
            <div className="gallery-sizer" />
            {/*property item Start*/}
            {items?.map((item, i) => (
              <div key={i} className={"col-lg-4 col-sm-6 "}>
                <Link
                  to={`/properties/${item?.properties?.category_type.toLowerCase()}/${item?.properties?.Property_type.toLowerCase()}/${
                    item?.properties?.slug
                  }`}
                >
                  <div
                    className="buildingDiv"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url('${item.featured_img}')`,
                    }}
                  >
                    {item?.leased_sold_status && (
                      <div className="icon_div">
                        <span>{item?.leased_sold_status}</span>
                      </div>
                    )}
                    <div className="bottom-left">
                      <h4 className="title">
                        <Link
                          to={`/properties/${item?.properties?.category_type.toLowerCase()}/${item?.properties?.Property_type.toLowerCase()}/${
                            item?.properties?.slug
                          }`}
                        >
                          {item?.name}
                        </Link>
                      </h4>
                      <p className="subtitle">
                        {item?.area},&nbsp; {item?.city}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchGrid;
