import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import $ from "jquery";
import "./PropertySort.scss";

const PropertySort = ({ property, buildingData }) => {
  const history = useHistory();

  $(document).ready(function () {
    $(".selector").click(function () {
      $(".selector.active").removeClass("active");
      $(this).addClass("active");
    });
  });

  const [items, setItems] = useState(buildingData);

  const filterItem = (categItem) => {
    let updatedItems = {};
    if (categItem === "all") {
      updatedItems = buildingData?.filter((currElement) => {
        return true;
      });
    } else {
      updatedItems = buildingData?.filter((currElement) => {
        return currElement.city === categItem;
      });
    }

    setItems(updatedItems);
  };

  useEffect(() => {
    setItems(buildingData);
  }, [buildingData]);

  const AbuDhabidata = buildingData.filter(
    (item) => item.city === "Abu Dhabi" && item.category_type === property
  );
  const AbuDhabidataPPage = buildingData.filter(
    (item) => item.city === "Abu Dhabi" && property === "properties"
  );

  const Dubaidata = buildingData.filter(
    (item) => item.city === "Dubai" && item.category_type === property
  );
  const DubaidataPPage = buildingData.filter(
    (item) => item.city === "Dubai" && property === "properties"
  );

  const rakdata = buildingData.filter(
    (item) => item.city === "Ras Al Khaimah" && item.category_type === property
  );
  const rakdataPPage = buildingData.filter(
    (item) => item.city === "Ras Al Khaimah" && property === "properties"
  );

  const sharjahData = buildingData.filter(
    (item) => item.city === "Sharjah" && item.category_type === property
  );
  const sharjahDataPPage = buildingData.filter(
    (item) => item.city === "Sharjah" && property === "properties"
  );

  const AjmanData = buildingData.filter(
    (item) => item.city === "Ajman" && item.category_type === property
  );
  const AjmanDataPPage = buildingData.filter(
    (item) => item.city === "Ajman" && property === "properties"
  );

  const FujairahData = buildingData.filter(
    (item) => item.city === "Fujairah" && item.category_type === property
  );
  const FujairahDataPPage = buildingData.filter(
    (item) => item.city === "Fujairah" && property === "properties"
  );

  const UmmAlQuwainData = buildingData.filter(
    (item) => item.city === "Umm Al Quwain" && item.category_type === property
  );
  const UmmAlQuwainDataPPage = buildingData.filter(
    (item) => item.city === "Umm Al Quwain" && property === "properties"
  );

  return (
    <div className="property-sort property-area">
      <div className="property_tab_section custom-gutter">
        <div className="container-mg-30">
          <div className="row">
            <div className="col-lg-12">
              <div className="property-filter-menu-wrap">
                <div className="property-filter-menu portfolio-filter myDIV">
                  <button
                    className="selector active"
                    onClick={() => filterItem("all")}
                  >
                    All
                  </button>
                  {AbuDhabidata.length > 0 && (
                    <button
                      className="selector"
                      onClick={() => filterItem("Abu Dhabi")}
                    >
                      Abu Dhabi
                    </button>
                  )}
                  {AbuDhabidataPPage.length > 0 && (
                    <button
                      className="selector"
                      onClick={() => filterItem("Abu Dhabi")}
                    >
                      Abu Dhabi
                    </button>
                  )}

                  {Dubaidata.length > 0 && (
                    <button
                      className="selector "
                      onClick={() => filterItem("Dubai")}
                    >
                      Dubai
                    </button>
                  )}
                  {DubaidataPPage.length > 0 && (
                    <button
                      className="selector "
                      onClick={() => filterItem("Dubai")}
                    >
                      Dubai
                    </button>
                  )}
                  {sharjahData.length > 0 && (
                    <button
                      className="selector"
                      onClick={() => filterItem("Sharjah")}
                    >
                      Sharjah
                    </button>
                  )}
                  {sharjahDataPPage.length > 0 && (
                    <button
                      className="selector"
                      onClick={() => filterItem("Sharjah")}
                    >
                      Sharjah
                    </button>
                  )}
                  {rakdata.length > 0 && (
                    <button
                      className="selector"
                      onClick={() => filterItem("Ras Al Khaimah")}
                    >
                      Ras Al Khaimah
                    </button>
                  )}
                  {rakdataPPage.length > 0 && (
                    <button
                      className="selector"
                      onClick={() => filterItem("Ras Al Khaimah")}
                    >
                      Ras Al Khaimah
                    </button>
                  )}
                  {AjmanData.length > 0 && (
                    <button
                      className="selector"
                      onClick={() => filterItem("Ajman")}
                    >
                      Ajman
                    </button>
                  )}
                  {AjmanDataPPage.length > 0 && (
                    <button
                      className="selector"
                      onClick={() => filterItem("Ajman")}
                    >
                      Ajman
                    </button>
                  )}
                  {FujairahData.length > 0 && (
                    <button
                      className="selector"
                      onClick={() => filterItem("Fujairah")}
                    >
                      Fujairah
                    </button>
                  )}
                  {FujairahDataPPage.length > 0 && (
                    <button
                      className="selector"
                      onClick={() => filterItem("Fujairah")}
                    >
                      Fujairah
                    </button>
                  )}
                  {UmmAlQuwainData.length > 0 && (
                    <button
                      className="selector"
                      onClick={() => filterItem("Umm Al Quwain")}
                    >
                      Umm Al Quwain
                    </button>
                  )}
                  {UmmAlQuwainDataPPage.length > 0 && (
                    <button
                      className="selector"
                      onClick={() => filterItem("Umm Al Quwain")}
                    >
                      Umm Al Quwain
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Property filter Start*/}
      <div className="container-mg-30">
        <div className="row">
          <div className="gallery-sizer" />
          {/*property item Start*/}
          {property === "properties"
            ? items?.map((item, i) => (
                <div key={i} className={"col-lg-6 col-sm-6 "}>
                  {item?.properties?.slug === undefined ? (
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
                          {item?.properties?.slug === undefined ? (
                            `${item.name}`
                          ) : (
                            <Link
                              to={{
                                pathname: `/properties/${item?.properties?.category_type.toLowerCase()}/${item?.properties?.Property_type.toLowerCase()}/${
                                  item?.properties?.slug
                                }`,
                                state: `${item.name}`,
                              }}
                            >
                              {item.name}
                            </Link>
                          )}
                        </h4>
                        <p className="subtitle">
                          {item.area},&nbsp;{item.city}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={{
                        pathname: `/properties/${item?.properties?.category_type.toLowerCase()}/${item?.properties?.Property_type.toLowerCase()}/${
                          item?.properties?.slug
                        }`,
                        state: `${item.name}`,
                      }}
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
                            {item?.properties?.slug === undefined ? (
                              `${item.name}`
                            ) : (
                              <Link
                                to={{
                                  pathname: `/properties/${item?.properties?.category_type.toLowerCase()}/${item?.properties?.Property_type.toLowerCase()}/${
                                    item?.properties?.slug
                                  }`,
                                  state: `${item.name}`,
                                }}
                              >
                                {item.name}
                              </Link>
                            )}
                          </h4>
                          <p className="subtitle">
                            {item.area},&nbsp;{item.city}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              ))
            : items
                ?.filter((x) => x.category_type === property)
                ?.map((item, i) => (
                  <div key={i} className={"col-lg-6 col-sm-6 "}>
                    {item?.properties?.slug === undefined ? (
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
                            {item?.properties?.slug === undefined ? (
                              `${item.name}`
                            ) : (
                              <Link
                                to={{
                                  pathname: `/properties/${item?.properties?.category_type.toLowerCase()}/${item?.properties?.Property_type.toLowerCase()}/${
                                    item?.properties?.slug
                                  }`,
                                  state: `${item.name}`,
                                }}
                              >
                                {item.name}
                              </Link>
                            )}
                          </h4>
                          <p className="subtitle">
                            {item.area},&nbsp;{item.city}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={{
                          pathname: `/properties/${item?.properties?.category_type.toLowerCase()}/${item?.properties?.Property_type.toLowerCase()}/${
                            item?.properties?.slug
                          }`,
                          state: `${item.name}`,
                        }}
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
                              {item?.properties?.slug === undefined ? (
                                `${item.name}`
                              ) : (
                                <Link
                                  to={{
                                    pathname: `/properties/${item?.properties?.category_type.toLowerCase()}/${item?.properties?.Property_type.toLowerCase()}/${
                                      item?.properties?.slug
                                    }`,
                                    state: `${item.name}`,
                                  }}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </h4>
                            <p className="subtitle">
                              {item.area},&nbsp;{item.city}
                            </p>
                          </div>
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
        </div>
      </div>
    </div>
  );
};

export default PropertySort;
