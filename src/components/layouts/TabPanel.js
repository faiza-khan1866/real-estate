import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TabPanel = ({ residentialData, commercialData, industrialData, PropertiesData, handleFilterLocation, handleFilterProperties, handleFilterArea, handleFilterPrice, handleFilterCommLocation, handleFilterCommProperties, handleFilterCommArea, handleFilterCommPrice, handleFilterIndusLocation, handleFilterIndusProperties, handleFilterIndusArea, handleFilterIndusPrice, reslocations, commlocations, induslocations }) => {
  const [filters, setFilters] = useState({
    residentialLocation: "",
    residentialProperties: "",
    residentialArea: "",
    residentialPrice: "",
    commercialLocation: "",
    commercialProperties: "",
    commercialArea: "",
    commercialPrice: "",
    industrialLocation: "",
    industrialProperties: "",
    industrialArea: "",
    industrialPrice: ""
  })
  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "residentialLocation":
        handleFilterLocation(value)
        break;
      case "residentialProperties":
        handleFilterProperties(value)
        break;
      case "residentialArea":
        handleFilterArea(value)
        break;
      case "residentialPrice":
        handleFilterPrice(value)
        break;
      case "commercialLocation":
        handleFilterCommLocation(value)
        break;
      case "commercialProperties":
        handleFilterCommProperties(value)
        break;
      case "commercialArea":
        handleFilterCommArea(value)
        break;
      case "commercialPrice":
        handleFilterCommPrice(value)
        break;
      case "industrialLocation":
        handleFilterIndusLocation(value)
        break;
      case "industrialProperties":
        handleFilterIndusProperties(value)
        break;
      case "industrialArea":
        handleFilterIndusArea(value)
        break;
      case "industrialPrice":
        handleFilterIndusPrice(value)
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    let publicUrl = process.env.PUBLIC_URL
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);
  }, [])

  return (
    <div className="tab-panel banner-search-wrap">
      <ul className="nav nav-tabs rld-banner-tab">
        <li className="nav-item">
          <a className="nav-link active residentialhover" data-toggle="tab" href="#tabs_1">Residential</a>
        </li>
        <li className="nav-item">
          <a className="nav-link commercialhover" data-toggle="tab" href="#tabs_2">Commercial</a>
        </li>
        <li className="nav-item">
          <a className="nav-link industrialhover" data-toggle="tab" href="#tabs_3">Industrial</a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="tabs_1">
          <div className="rld-main-search">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="rld-single-select left-icon">
                  <select className="select r-single-select"
                    disabled={reslocations.length < 1}
                    onChange={handleInput("residentialLocation")}
                  >
                    <option value="">Enter Location</option>
                    {reslocations?.sort((a, b) => a.localeCompare(b))?.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6">
                <div className="rld-single-select">
                  <select className="select r-single-select"
                    disabled={residentialData.filter((x) => x.city === filters.residentialLocation).length < 1}
                    onChange={handleInput("residentialProperties")}
                  >
                    <option value="">All Properties</option>
                    {residentialData.filter((x) => x.city === filters.residentialLocation)?.map(
                      (property, index) => (
                        <option key={index} value={property.name}>
                          {property.name}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4">
                <div className="rld-single-select">
                  <select className="select r-single-select"
                    disabled={residentialData.filter((x) => x.name === filters.residentialProperties).length < 1}
                    onChange={handleInput("residentialArea")}
                  >
                    <option value="">Area Sq. Ft</option>
                    {
                      residentialData.filter((x) => x.name === filters.residentialProperties)?.map((item, index) => (
                        <option key={index} value={item.properties.space}>{item.properties.space} {item.properties?.end_area ? " - " + item.properties?.end_area : ""}  Sq. Ft</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4">
                <div className="rld-single-select">
                  <select className="select r-single-select"
                    disabled={residentialData.filter((x) => x.name === filters.residentialProperties).length < 1}
                    onChange={handleInput("residentialPrice")}
                  >
                    <option value="">Price</option>
                    {
                      residentialData.filter((x) => x.name === filters.residentialProperties)?.map((item, index) => (
                        <option key={index} value={item.properties.price}>{item.properties.price} {item.properties.end_price ? " - " + item.properties.end_price : ""} AED</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4"
              >
                {
                  PropertiesData.length < 1 ? <button className="btn btn-yellow" disabled>Search Now</button>
                    : <Link className="btn btn-yellow" to={{
                      pathname: "/search-list",
                      state: { PropertiesData }
                    }}>Search Now</Link>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="tabs_2">
          <div className="rld-main-search">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="rld-single-select left-icon">
                  <select className="select r-single-select"
                    disabled={commlocations.length < 1}
                    onChange={handleInput("commercialLocation")}
                  >
                    <option value="">Enter Location</option>
                    {commlocations?.sort((a, b) => a.localeCompare(b))?.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6">
                <div className="rld-single-select">
                  <select className="select r-single-select"
                    disabled={commercialData.filter((x) => x.city === filters.commercialLocation).length < 1}
                    onChange={handleInput("commercialProperties")}
                  >
                    <option value="">All Properties</option>
                    {commercialData.filter((x) => x.city === filters.commercialLocation)?.map(
                      (property, index) => (
                        <option key={index} value={property.name}>
                          {property.name}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4">
                <div className="rld-single-select">
                  <select className="select r-single-select"
                    disabled={commercialData.filter((x) => x.name === filters.commercialProperties).length < 1}
                    onChange={handleInput("commercialArea")}
                  >
                    <option value="">Area Sq. Ft</option>

                    {
                      commercialData.filter((x) => x.name === filters.commercialProperties)?.map((item, index) => (
                        <option key={index} value={item.properties.space}>{item.properties.space} Sq. Ft</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4">
                <div className="rld-single-select">
                  <select className="select r-single-select"
                    disabled={commercialData.filter((x) => x.name === filters.commercialProperties).length < 1}
                    onChange={handleInput("commercialPrice")}
                  >
                    <option value="">Price</option>
                    {
                      commercialData.filter((x) => x.name === filters.commercialProperties)?.map((item, index) => (
                        <option key={index} value={item.properties.price}>{item.properties.price} {item.properties.end_price ? " - " + item.properties.end_price : ""} AED</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4">
                {
                  PropertiesData.length < 1 ? <button className="btn btn-yellow" style={{ background: "#BA945C " }} disabled>Search Now</button>
                    : <Link className="btn btn-yellow"
                      style={{ background: "#BA945C " }}
                      to={{
                        pathname: "/search-list",
                        state: { PropertiesData }
                      }}>Search Now</Link>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="tabs_3">
          <div className="rld-main-search">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="rld-single-select left-icon">
                  <select className="select r-single-select"
                    disabled={induslocations.length < 1}
                    onChange={handleInput("industrialLocation")}
                  >
                    <option value="">Enter Location</option>
                    {induslocations?.sort((a, b) => a.localeCompare(b))?.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6">
                <div className="rld-single-select">
                  <select className="select r-single-select"
                    disabled={industrialData.filter((x) => x.city === filters.industrialLocation).length < 1}
                    onChange={handleInput("industrialProperties")}
                  >
                    <option value="">All Properties</option>
                    {industrialData.filter((x) => x.city === filters.industrialLocation)?.map(
                      (property, index) => (
                        <option key={index} value={property.name}>
                          {property.name}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4">
                <div className="rld-single-select">
                  <select className="select r-single-select"
                    disabled={industrialData.filter((x) => x.name === filters.industrialProperties).length < 1}
                    onChange={handleInput("industrialArea")}
                  >
                    <option value="">Area Sq. Ft</option>
                    {
                      industrialData.filter((x) => x.name === filters.industrialProperties)?.map((item, index) => (
                        <option key={index} value={item.properties.space}>{item.properties.space} {item.properties.space ? " - " + item.properties.space : ""} Sq. Ft</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4">
                <div className="rld-single-select">
                  <select className="select r-single-select"
                    disabled={industrialData.filter((x) => x.name === filters.industrialProperties).length < 1}
                    onChange={handleInput("industrialPrice")}
                  >
                    <option value="">Price</option>
                    {
                      industrialData.filter((x) => x.name === filters.industrialProperties)?.map((item, index) => (
                        <option key={index} value={item.properties.price}>{item.properties.price} {item.properties.end_price ? " - " + item.properties.end_price : ""} AED</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4">
                {
                  PropertiesData.length < 1 ? <button className="btn btn-yellow"
                    style={{ background: "#FF6E6E " }}
                    disabled>Search Now</button>
                    : <Link className="btn btn-yellow"
                      style={{ background: "#FF6E6E " }}
                      to={{
                        pathname: "/search-list",
                        state: { PropertiesData }
                      }}>Search Now</Link>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabPanel