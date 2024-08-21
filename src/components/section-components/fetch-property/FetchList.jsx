import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./FetchList.scss";

const FetchList = (props) => {
  const location = useLocation();

  const history = useHistory();
  const propertyFilter = useSelector((city) => city.property.filter);

  // const property = history.location.property;

  const searchParams = new URLSearchParams(location?.search);
  const property = searchParams?.get("property");

  const availablePropertyList = useSelector(
    (city) => city.property.availablePropertyList
  );

  const {
    // category_type,
    bedRooms,
    bathRooms,
    property_purpose,
    location_state,
    location_area,
    Property_type,
    propertyPrice,
    propertySize,
  } = propertyFilter;

  const showListing = availablePropertyList.filter((property) => {
    if (property_purpose && property_purpose !== property.property_purpose) {
      return false;
    }
    if (property.bed !== "Studio") {
      // debugger;
      if (bedRooms && bedRooms !== property.bed && bedRooms !== "7+") {
        return false;
      }
    } else {
      if (bedRooms && bedRooms !== property.bed && bedRooms !== "7+") {
        return false;
      }
    }
    // if (bedRooms && bedRooms === "Studio" && bedRooms !== property.Property_type) {
    //     return false;
    // }

    if (bedRooms && bedRooms === "7+" && property.bed < 7) {
      return false;
    }
    if (bathRooms && bathRooms !== property.bathroom && bathRooms !== "7+") {
      return false;
    }
    if (bathRooms && bathRooms === "7+" && property.bathroom < 7) {
      return false;
    }
    if (location_state && location_state !== property.location.city) {
      return false;
    }
    if (location_area && location_area !== property.location.area) {
      return false;
    }
    if (Property_type && Property_type !== property.Property_type) {
      return false;
    }

    if (propertyPrice.from && !propertyPrice.to) {
      propertyPrice.to = JSON.parse(JSON.stringify(propertyPrice.from));
    }

    if (!propertyPrice.from && propertyPrice.to) {
      propertyPrice.from = JSON.parse(JSON.stringify(propertyPrice.to));
    }

    if (propertyPrice.from && propertyPrice.to) {
      // if (property.price > propertyPrice.from && property.price > propertyPrice.to) {
      //     console.log("here 48");
      //     return false;
      // }
      // if (property.end_price < propertyPrice.from) {
      //     console.log("here 52");
      //     return false;
      // }
      // console.log(propertyPrice.from,property.price, propertyPrice.to, property.end_price)
      // if( !(Number(propertyPrice.from) >= Number(property.price) && Number(propertyPrice.from) <= Number(property.end_price) && Number(propertyPrice.to) >= Number(property.price) && Number(propertyPrice.to) <= Number(property.end_price))){
      //     console.log(propertyPrice.from,propertyPrice.to,property.price,property.end_price,"ddd")
      //     return false;

      // }
      property.end_price = property.end_price
        ? property.end_price
        : JSON.parse(JSON.stringify(property.price));
      if (
        !(
          Number(propertyPrice.from) <= Number(property.price) &&
          Number(propertyPrice.to) >= Number(property.end_price)
        )
      ) {
        return false;
      }
    }

    // if (propertyPrice.from && !propertyPrice.to) {
    //     if (property.price > propertyPrice.from) {
    //         return false;
    //     }
    // }

    // if (!propertyPrice.from && propertyPrice.to) {
    //     if (property.end_price < propertyPrice.to) {
    //         return false;
    //     }
    // }

    // if(propertySize.from && propertySize.to){
    //     if( !(propertySize.from >= property.space && propertySize.to >= property.end_area)){
    //         return false;
    //     }
    // }

    if (propertySize.from && !propertySize.to) {
      propertySize.to = JSON.parse(JSON.stringify(propertySize.from));
    }

    if (!propertySize.from && propertySize.to) {
      propertySize.from = JSON.parse(JSON.stringify(propertySize.to));
    }

    if (propertySize.from && propertySize.to) {
      property.end_area = property.end_area
        ? property.end_area
        : JSON.parse(JSON.stringify(property.space));
      if (
        !(
          Number(propertySize.from) <= Number(property.space) &&
          Number(propertySize.to) >= Number(property.end_area)
        )
      ) {
        return false;
      }
      // if (Number(propertySize.from) && Number(propertySize.from) === "1000000+" && Number(property.space) < Number("1000000+")) {
      //     return false;
      // }
      // if (Number(propertySize.to) && Number(propertySize.to) === "1000000+" && Number(property.end_area) < Number("1000000+")) {
      //     return false;
      // }
    }

    // if (!propertySize.from) {
    //     if (+property.space < +propertySize.from) {
    //         return false;
    //     }
    // }
    // if (propertySize.to) {
    //     if (+property.end_area > +propertySize.to) {
    //         return false;
    //     }
    // }
    return true;
  });
  const tabsProperty = showListing.map((property) => {
    return {
      title: property.name,
      image:
        property.featured_image && property.featured_image.length
          ? property.featured_image
          : "assets/img/residential/residential01.jpg",

      url: `/properties/${property?.category_type.toLowerCase()}/${property?.Property_type.toLowerCase()}/${
        property?.slug
      }`,
      location: `${property.location.area}, ${property.location.city} `,
      cat: `${property.location.city.toLowerCase().split(" ").join("-")}`,
      introPage: `${property.category_type.toLowerCase()}`,
      slug: `${property.slug}`,
      price: `${property.price}`,
      end_price: `${property.end_price}`,
      space: `${property.space}`,
      end_area: `${property.end_area}`,
      featured: `${property.featured}`,
      leased_sold_status: `${
        property.leased_sold_status ? property.leased_sold_status : ""
      }`,
    };
  });

  const portfolioFilter = [
    ...new Set(
      availablePropertyList.map(
        (property) =>
          `${property.location.city.toLowerCase().split(" ").join("-")}`
      )
    ),
  ];

  return (
    <div className="property-sort property-area">
      {props.property === "fetch-properties" ? (
        ""
      ) : (
        <div className="property_tab_section custom-gutter">
          <div className="container-mg-30">
            <div className="row">
              <div className="col-lg-12">
                <div className="property-filter-menu-wrap">
                  <div className="property-filter-menu portfolio-filter">
                    {/* <button data-filter="*" className="active">All Properties</button> */}
                    <button className="active" data-filter=".abu-dhabi">
                      Abu Dhabi
                    </button>
                    <button data-filter=".dubai">Dubai</button>
                    <button data-filter=".sharjah" disabled>
                      Sharjah
                    </button>
                    <button data-filter=".ras-al-khaimah">
                      Ras Al Khaimah
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*Property filter Start*/}
      <div
        className={
          props.property === "fetch-properties"
            ? "container-mg-30 mt-4"
            : " container-mg-30"
        }
      >
        {props.property === "fetch-properties" ? (
          <h3>
            Search List{" "}
            <span style={{ fontSize: "15px", margin: "15px 0px" }}>
              {" "}
              {tabsProperty.length > 0
                ? " "
                : "- Currently we have no matching results for your search criteria. You can change the location, refine your search or take a look at the featured properties below."}{" "}
            </span>
          </h3>
        ) : (
          ""
        )}

        <div className="row">
          <div className="gallery-sizer" />
          {/*property item Start*/}

          {tabsProperty.length > 0 ? (
            tabsProperty.length > 0 && property && property !== "properties" ? (
              <>
                <>
                  {tabsProperty
                    .filter(
                      (x) => x.introPage === property && x.featured !== "1"
                    )
                    .map((item, i) => (
                      <div key={i} className={"col-lg-4 col-sm-6 " + item.cat}>
                        <div
                          className="buildingDiv"
                          style={{
                            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url('${item.image}')`,
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            history.push(`${item.url}`);
                          }}
                        >
                          {item?.leased_sold_status && (
                            <div className="icon_div">
                              <span>{item?.leased_sold_status}</span>
                            </div>
                          )}
                          <div className="bottom-left">
                            <h4 className="title">
                              <Link to={`${item.url}`}>{item.title}</Link>
                            </h4>
                            <p className="subtitle">{item.location}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </>
                <br />
                <>
                  <h3
                    style={{
                      width: "100%",
                      padding: "1rem",
                    }}
                  >
                    Get on the Waiting List
                  </h3>
                  <>
                    {tabsProperty
                      .filter(
                        (x) => x.introPage === property && x.featured === "1"
                      )
                      .map((item, i) => (
                        <div
                          key={i}
                          className={"col-lg-4 col-sm-6 " + item.cat}
                        >
                          <div
                            className="buildingDiv"
                            style={{
                              backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url('${item.image}')`,
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              history.push(`${item.url}`);
                            }}
                          >
                            {item?.leased_sold_status && (
                              <div className="icon_div">
                                <span>{item?.leased_sold_status}</span>
                              </div>
                            )}
                            <div className="bottom-left">
                              <h4 className="title">
                                <Link to={`${item.url}`}>{item.title}</Link>
                              </h4>
                              <p className="subtitle">{item.location}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </>
                </>
              </>
            ) : (
              <>
                <>
                  {tabsProperty
                    .filter((x) => x.featured !== "1")
                    .map((item, i) => (
                      <div key={i} className={"col-lg-4 col-sm-6 " + item.cat}>
                        <div
                          className="buildingDiv"
                          style={{
                            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url('${item.image}')`,
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            history.push(`${item.url}`);
                          }}
                        >
                          {item?.leased_sold_status && (
                            <div className="icon_div">
                              <span>{item?.leased_sold_status}</span>
                            </div>
                          )}
                          <div className="bottom-left">
                            <h4 className="title">
                              <Link to={`${item.url}`}>{item.title}</Link>
                            </h4>
                            <p className="subtitle">{item.location}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </>
                <br />
                <>
                  <h3
                    style={{
                      width: "100%",
                      padding: "1rem",
                    }}
                  >
                    Get on the Waiting List
                  </h3>
                  <>
                    {tabsProperty
                      .filter((x) => x.featured === "1")
                      .map((item, i) => (
                        <div
                          key={i}
                          className={"col-lg-4 col-sm-6 " + item.cat}
                        >
                          <div
                            className="buildingDiv"
                            style={{
                              backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url('${item.image}')`,
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              history.push(`${item.url}`);
                            }}
                          >
                            {item?.leased_sold_status && (
                              <div className="icon_div">
                                <span>{item?.leased_sold_status}</span>
                              </div>
                            )}
                            <div className="bottom-left">
                              <h4 className="title">
                                <Link to={`${item.url}`}>{item.title}</Link>
                              </h4>
                              <p className="subtitle">{item.location}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </>
                </>
              </>
            )
          ) : (
            availablePropertyList.map((item, i) => (
              <div key={i} className={"col-lg-4 col-sm-6 " + item.cat}>
                <div
                  className="buildingDiv"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url('${item.featured_image}')`,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    history.push(
                      `/properties/${item?.category_type.toLowerCase()}/${item?.Property_type.toLowerCase()}/${
                        item?.slug
                      }`
                    );
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
                        to={`/properties/${item?.category_type.toLowerCase()}/${item?.Property_type.toLowerCase()}/${
                          item?.slug
                        }`}
                      >
                        {item.title}
                      </Link>
                    </h4>
                    <p className="subtitle">
                      {item.location.city}, {item.location.area}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FetchList;
