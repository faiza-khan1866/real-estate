import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePropertyFilter } from "../actions/property-actions";
import { FROM_IS_MORE, TO_IS_LESS } from "../variable-string";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";

// bedrooms
const bedDropdownValue = ["Studio", 1, 2, 3, 4, 5, 6, 7, "7+"];

// bathrooms
const bathDropdownValue = [1, 2, 3, 4, 5, 6, 7, "7+"];

// min max sizes
const sizeMinDropdownValue = [
  500,
  600,
  700,
  800,
  900,
  1000,
  1200,
  1400,
  1600,
  1800,
  2000,
  2200,
  2400,
  2600,
  2800,
  3000,
  3200,
  3400,
  3600,
  3800,
  4000,
  5000,
  6000,
  7000,
  8000,
  9000,
  10000,
  15000,
  20000,
  25000,
  30000,
  35000,
  40000,
  45000,
  50000,
  100000,
  200000,
  300000,
  400000,
  500000,
  600000,
  700000,
  800000,
  900000,
  1000000,
  "1000000+",
];

const sizeMaxDropdownValue = [
  500,
  600,
  700,
  800,
  900,
  1000,
  1200,
  1400,
  1600,
  1800,
  2000,
  2200,
  2400,
  2600,
  2800,
  3000,
  3200,
  3400,
  3600,
  3800,
  4000,
  5000,
  6000,
  7000,
  8000,
  9000,
  10000,
  15000,
  20000,
  25000,
  30000,
  35000,
  40000,
  45000,
  50000,
  100000,
  200000,
  300000,
  400000,
  500000,
  600000,
  700000,
  800000,
  900000,
  1000000,
  "1000000+",
];

// min max prices Rent

const priceMinRentDropdownValue = [
  500, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 15000,
  20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000,
  75000, 80000, 85000, 90000, 95000, 100000, 110000, 120000, 130000, 140000,
  150000, 160000, 170000, 180000, 190000, 200000, 300000, 350000, 400000,
  500000, 1000000,
];

const priceMaxRentDropdownValue = [
  500, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 15000,
  20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000,
  75000, 80000, 85000, 90000, 95000, 100000, 110000, 120000, 130000, 140000,
  150000, 160000, 170000, 180000, 190000, 200000, 300000, 350000, 400000,
  500000, 1000000,
];

// min max price Buy
const priceMinBuyDropdownValue = [
  300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 1100000,
  1200000, 1300000, 1400000, 1500000, 1600000, 1700000, 1800000, 1900000,
  2000000, 2100000, 2200000, 2300000, 2400000, 2500000, 2600000, 2700000,
  2800000, 2900000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000,
  9000000, 10000000, 250000000, 500000000,
];

const priceMaxBuyDropdownValue = [
  300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 1100000,
  1200000, 1300000, 1400000, 1500000, 1600000, 1700000, 1800000, 1900000,
  2000000, 2100000, 2200000, 2300000, 2400000, 2500000, 2600000, 2700000,
  2800000, 2900000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000,
  9000000, 10000000, 250000000, 500000000,
];

const TabPanelProperties = (props) => {
  const location = useLocation();
  // const { property } = props;
  const property = location?.pathname?.split("/")?.[1];

  // const history = useHistory();
  // const propertyTab = history.location.property;

  const searchParams = new URLSearchParams(location?.search);
  const propertyTab = searchParams?.get("property");

  const dispatch = useDispatch();
  const propertyFilter = useSelector((city) => city.property.filter);
  const availablePropertyList = useSelector(
    (city) => city.property.availablePropertyList
  );

  const [locationDropDownValue, setLocationDropDownValue] = useState([]);
  const [propertyTypeDropDownValue, setPropertyTypeDropDownValue] = useState(
    []
  );
  const [areaDropDownValue, setAreaDropDownValue] = useState([]);
  const [priceError, setPriceError] = useState(null);
  const [sizeError, setSizeError] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [selectedFromPrice, setSelectedFromPrice] = useState(0);
  const [isPriceMinBuyDropdownValue, setIspriceMinBuyDropdownValue] = useState(
    priceMaxRentDropdownValue
  );
  const [ispriceMaxBuyDropdownValue, setIspriceMaxBuyDropdownValue] = useState(
    priceMaxBuyDropdownValue
  );
  const [issizeMaxDropdownValue, setIssizeMaxDropdownValue] =
    useState(sizeMaxDropdownValue);

  const {
    bedRooms,
    property_purpose,
    location_state,
    propertyPrice,
    propertySize,
  } = propertyFilter;

  // CategoryType is stored in Redux filter as per selected Page and /properties Page type is assumed as residential
  useEffect(() => {
    let categoryType = "Residential";
    if (property === "commercial") {
      categoryType = "Commercial";
    } else if (property === "industrial") {
      categoryType = "Industrial";
    }
    dispatch(updatePropertyFilter({ category_type: categoryType }));
  }, [property, propertyTab]);

  // Area DropDown values are fetched from Property List according to selected Location (location state)
  useEffect(() => {
    if (availablePropertyList?.length > 0) {
      let areaDropDown = [];
      availablePropertyList.map((property) => {
        if (property?.location?.city === location_state) {
          areaDropDown.push(property.location?.area);
        }
      });
      setAreaDropDownValue([...new Set(areaDropDown)]);
    }
  }, [availablePropertyList, location_state]);

  // Property Type DropDown values are fetched from Property List
  useEffect(() => {
    let category = props?.property;
    category = category.charAt(0).toUpperCase() + category.slice(1);

    if (availablePropertyList?.length > 0) {
      let propertyDropDown = [];
      availablePropertyList.map((property) => {
        if (property.Property_type && property.category_type === category) {
          propertyDropDown.push(property.Property_type);
        }
        if (props.property === "properties") {
          propertyDropDown.push(property.Property_type);
        }
        if (propertyTab && propertyTab !== "properties") {
          let propertyCat = propertyTab;
          propertyCat =
            propertyCat.charAt(0).toUpperCase() + propertyCat.slice(1);
          if (
            propertyCat &&
            property.Property_type &&
            property.category_type === propertyCat
          ) {
            propertyDropDown.push(property.Property_type);
          }
        } else {
          if (props.property === "fetch-properties") {
            propertyDropDown.push(property.Property_type);
          }
        }
      });
      setPropertyTypeDropDownValue(
        [...new Set(propertyDropDown)].sort((a, b) => a.localeCompare(b))
      );
    }
  }, [props, propertyTab, props.property]);

  // Location DropDown values are fetched from Property List
  useEffect(() => {
    if (availablePropertyList?.length > 0) {
      let locationDropDown = [];
      availablePropertyList.map((location) => {
        if (location.location.city) {
          locationDropDown.push(location.location.city);
        }
      });
      setLocationDropDownValue([...new Set(locationDropDown)]);
    }
  }, [availablePropertyList]);

  // DropDown values or any other filter values are stored in Redux store filter
  const handleChange = (changeObj) => {
    dispatch(updatePropertyFilter(changeObj));
  };

  const handlePropertyPrice = (value, filterFieldName) => {
    // debugger;

    if (filterFieldName === "from") {
      let a = priceMaxRentDropdownValue.filter(
        (element, index) => index > value
      );
      setIspriceMinBuyDropdownValue(a);

      let b = priceMaxBuyDropdownValue.filter(
        (element, index) => index > value
      );
      setIspriceMaxBuyDropdownValue(b);

      let val = Number(value) + 1000;
      if (Number(propertyPrice.to) < val) {
        handleChange({
          propertyPrice: {
            ...propertyPrice,
            [filterFieldName]: value,
            ["to"]: Number(value) + 1000,
          },
        });
        return setPriceError(FROM_IS_MORE);
      } else {
        handleChange({
          propertyPrice: { ...propertyPrice, [filterFieldName]: value },
        });
      }

      setSelectedFromPrice(value);
    } else if (filterFieldName === "to") {
      if (Number(propertyPrice.from) > Number(value)) {
        return setPriceError(TO_IS_LESS);
      } else {
        handleChange({
          propertyPrice: { ...propertyPrice, [filterFieldName]: value },
        });
      }
    }
    setPriceError(null);
  };

  const handlePropertySize = (value, filterFieldName) => {
    if (filterFieldName === "from") {
      let b = sizeMaxDropdownValue.filter((element, index) => index > value);
      setIssizeMaxDropdownValue(b);

      let val = Number(value) + 100;
      if (Number(propertySize.to) < val) {
        handleChange({
          propertySize: {
            ...propertySize,
            [filterFieldName]: value,
            ["to"]: Number(value) + 100,
          },
        });
        return setSizeError(FROM_IS_MORE);
      } else {
        handleChange({
          propertySize: { ...propertySize, [filterFieldName]: value },
        });
      }
    } else if (filterFieldName === "to") {
      if (Number(propertySize.from) > Number(value)) {
        return setSizeError(TO_IS_LESS);
      } else {
        handleChange({
          propertySize: { ...propertySize, [filterFieldName]: value },
        });
      }
    }
    setSizeError(null);
  };

  return (
    <div className="main-search-area">
      <div className="container-mg-30">
        <div className="tab-panel-properties banner-search-wrap">
          {props?.property === "fetch-properties" && propertyTab ? (
            <ul className="nav nav-tabs rld-banner-tab">
              <li className="nav-item">
                <Link
                  className={`nav-link residentialhover ${
                    "residential" === propertyTab ? " active" : " disabled"
                  }`}
                  to={"/residential"}
                >
                  Residential
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link commercialhover ${
                    "commercial" === propertyTab ? " active" : " disabled"
                  }`}
                  to={"/commercial"}
                >
                  Commercial
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link industrialhover ${
                    "industrial" === propertyTab ? " active" : " disabled"
                  }`}
                  to={"/industrial"}
                >
                  Industrial
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="nav nav-tabs rld-banner-tab">
              <li className="nav-item">
                <Link
                  className={`nav-link residentialhover ${
                    "residential" == property ? " active" : " disabled"
                  }`}
                  to={"/residential"}
                >
                  Residential
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link commercialhover ${
                    "commercial" == property ? " active" : " disabled"
                  }`}
                  to={"/commercial"}
                >
                  Commercial
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link industrialhover ${
                    "industrial" == property ? " active" : " disabled"
                  }`}
                  to={"/industrial"}
                >
                  Industrial
                </Link>
              </li>
            </ul>
          )}
          <div className="tab-content">
            <div className="tab-pane fade show active" id={"#tab_1"}>
              <div className="widget widget-sidebar-search-wrap">
                <div className="row">
                  <div className="search-column mg-20 col-xl-4 col-lg-4 col-md-4">
                    <div className="widget-sidebar-item-wrap btn-area">
                      <div className="title">Purpose</div>
                      <button
                        className={`btn purpose rent_buy ${
                          property_purpose === "Rent" && "active"
                        }`}
                        type="button"
                        onClick={() =>
                          handleChange({ property_purpose: "Rent" })
                        }
                      >
                        Rent
                      </button>
                      <button
                        className={`btn purpose rent_buy ${
                          property_purpose === "Buy" && "active"
                        }`}
                        type="button"
                        onClick={() =>
                          handleChange({ property_purpose: "Buy" })
                        }
                      >
                        Buy
                      </button>
                    </div>
                    <div className="widget-sidebar-item-wrap rld-single-select-wrap">
                      <div className="title mt-20 mb-10 pt-2">
                        Property type
                      </div>
                      <div className="rld-single-select">
                        <select
                          name="PropertyType"
                          className="select r-single-select"
                          onChange={(e) =>
                            handleChange({ Property_type: e.target.value })
                          }
                        >
                          <option value="">Select a type of property</option>
                          {propertyTypeDropDownValue.length === 0 ? (
                            <option disabled>Loading...</option>
                          ) : (
                            <>
                              {propertyTypeDropDownValue?.map(
                                (propertyType, index) => (
                                  <option key={index} value={propertyType}>
                                    {propertyType}
                                  </option>
                                )
                              )}
                            </>
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="search-column col-xl-4 col-lg-4 col-md-4">
                    <div className="widget-sidebar-item-wrap rld-single-select-wrap">
                      <div className="title mb-0 pt-2">Price range (AED)</div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="widget-sidebar-item-wrap rld-single-select-wrap">
                            <div className="rld-single-select">
                              <select
                                name="PropertyPrice"
                                className="select r-single-select"
                                onChange={(e) =>
                                  handlePropertyPrice(e.target.value, "from")
                                }
                              >
                                {property_purpose === "Rent" ? (
                                  <>
                                    <option value="">Min. Price (AED)</option>
                                    {priceMinRentDropdownValue?.map(
                                      (priceMin, index) => (
                                        <option key={index} value={index}>
                                          {priceMin} AED
                                        </option>
                                      )
                                    )}
                                  </>
                                ) : (
                                  <>
                                    <option value="">Min. Price (AED)</option>
                                    {priceMinBuyDropdownValue?.map(
                                      (priceMin, index) => (
                                        <option key={index} value={index}>
                                          {priceMin} AED
                                        </option>
                                      )
                                    )}
                                  </>
                                )}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="widget-sidebar-item-wrap rld-single-select-wrap">
                            <div className="rld-single-select">
                              <select
                                name="PropertyPrice"
                                className="select r-single-select"
                                onChange={(e) =>
                                  handlePropertyPrice(e.target.value, "to")
                                }
                              >
                                {property_purpose === "Rent" ? (
                                  <>
                                    <option value="">Max. Price ( AED)</option>
                                    {isPriceMinBuyDropdownValue?.map(
                                      (priceMax, index) => (
                                        <option key={index} value={priceMax}>
                                          {priceMax} AED
                                        </option>
                                      )
                                    )}
                                  </>
                                ) : (
                                  <>
                                    <option value="">Max. Price ( AED)</option>
                                    {ispriceMaxBuyDropdownValue?.map(
                                      (priceMax, index) => (
                                        <option key={index} value={priceMax}>
                                          {priceMax} AED
                                        </option>
                                      )
                                    )}
                                  </>
                                )}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-sidebar-item-wrap rld-single-select-wrap">
                      <div className="title mb-0 pt-2">
                        Property size Sq. Ft
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="widget-sidebar-item-wrap rld-single-select-wrap">
                            <div className="rld-single-select">
                              <select
                                name="propertySize"
                                className="select r-single-select"
                                onChange={(e) =>
                                  handlePropertySize(e.target.value, "from")
                                }
                              >
                                <option value="">Min. Area</option>
                                {sizeMinDropdownValue?.map((sizeMin, index) => (
                                  <option key={index} value={index}>
                                    {sizeMin} Sq. Ft
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="widget-sidebar-item-wrap rld-single-select-wrap">
                            <div className="rld-single-select">
                              <select
                                name="propertySize"
                                className="select r-single-select"
                                onChange={(e) =>
                                  handlePropertySize(e.target.value, "to")
                                }
                              >
                                <option value="">Max. Area</option>
                                {issizeMaxDropdownValue?.map(
                                  (sizeMax, index) => (
                                    <option key={index} value={sizeMax}>
                                      {sizeMax} Sq. Ft
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {property !== "commercial" &&
                    property !== "industrial" &&
                    propertyTab !== "commercial" &&
                    propertyTab !== "industrial" ? (
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="widget-sidebar-item-wrap rld-single-select-wrap">
                            <div className="title mb-0 pt-2">Bedroom</div>
                            <div className="rld-single-select">
                              <select
                                name="bedRooms"
                                className="select r-single-select"
                                onChange={(e) =>
                                  handleChange({ bedRooms: e.target.value })
                                }
                              >
                                <option value="">Select Bedroom</option>
                                {bedDropdownValue?.map((bed, index) => (
                                  <option key={index} value={bed}>
                                    {bed}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="widget-sidebar-item-wrap rld-single-select-wrap">
                            <div className="title mb-0 pt-2">Bathroom</div>
                            <div className="rld-single-select">
                              <select
                                name="bathRooms"
                                className="select r-single-select"
                                onChange={(e) =>
                                  handleChange({ bathRooms: e.target.value })
                                }
                              >
                                <option value="">Select Bathroom</option>
                                {bathDropdownValue?.map((bath, index) => (
                                  <option key={index} value={bath}>
                                    {bath}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      " "
                    )}
                  </div>
                  <div className="search-column col-xl-4 col-lg-4 col-md-4">
                    <div className="widget-sidebar-item-wrap rld-single-select-wrap">
                      <div className="title mb-10 pt-2">Choose location</div>
                      <div className="rld-single-select location_selection">
                        <select
                          name="location_state"
                          className="select r-single-select"
                          onChange={(e) =>
                            handleChange({
                              location_state: e.target.value,
                              location_area: "",
                            })
                          }
                        >
                          <option value="">Select a location</option>
                          {locationDropDownValue.length === 0 ? (
                            <option disabled>Loading...</option>
                          ) : (
                            <>
                              {locationDropDownValue
                                ?.sort((a, b) => a.localeCompare(b))
                                ?.map((location, index) => (
                                  <option key={index} value={location}>
                                    {location}
                                  </option>
                                ))}
                            </>
                          )}
                        </select>
                      </div>
                    </div>
                    <div className="widget-sidebar-item-wrap mg-20 rld-single-select-wrap">
                      <div className="title mt-20 mb-10 pt-2">Area</div>
                      <div className="rld-single-select">
                        <select
                          className="select r-single-select"
                          disabled={location_state === ""}
                          onChange={(e) =>
                            handleChange({ location_area: e.target.value })
                          }
                        >
                          <option value="">Select an area</option>
                          {areaDropDownValue
                            ?.sort((a, b) => a.localeCompare(b))
                            ?.map((area, index) => (
                              <option key={index} value={area}>
                                {area}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"d-flex justify-content-end align-items-center"}>
              {property === "fetch-properties" ? (
                ""
              ) : (
                <Link to={`/fetch-properties?property=${property}`}>
                  <button
                    className="btn btn-yellow m-3"
                    style={
                      property === "commercial"
                        ? { backgroundColor: "#BA945C" }
                        : { backgroundColor: "#215C4F" } &&
                          property === "industrial"
                        ? { backgroundColor: "#FF6E6E" }
                        : { backgroundColor: "#215C4F" }
                    }
                  >
                    Search
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPanelProperties;
