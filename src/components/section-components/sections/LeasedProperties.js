import React, { Component } from "react";
import sectiondata from "../../../data/sections.json";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LeasedProperties.scss";

class LeasedProperties extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL;
    let imagealt = "image";
    let data = sectiondata.Leaseproperties;
    let Customclass = this.props.Customclass
      ? this.props.Customclass
      : "pd-top-60";

    return (
      <div className={"leased-properties  "} style={{ paddingBottom: "3rem" }}>
        <div className="section-title d-flex justify-content-between align-items-center">
          <h2 className="title" style={{ color: "#BA945C" }}>
            GET ON THE WAITING LIST
          </h2>
          {/* <p className="desk_view" style={{ color: "#BA945C", fontSize: "20px", fontWeight: "bold" }}>View all</p> */}
        </div>
        <div className="row">
          {this.props.waitingPropertiesData?.map((item, i) => (
            <div key={i} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <Link
                to={`/properties/${item?.category_type.toLowerCase()}/${item?.Property_type.toLowerCase()}/${
                  item?.slug
                }`}
              >
                <Card className={"cardstyle"}>
                  <Card.Img
                    variant="top"
                    src={item.featured_image}
                    className={"imgstyle"}
                  />
                  {item?.leased_sold_status && (
                    <div className="icon_div">
                      <span>{item?.leased_sold_status}</span>
                    </div>
                  )}
                  <Card.Body>
                    <Card.Title className={"title"}>
                      <Link
                        to={`/properties/${item?.category_type.toLowerCase()}/${item?.Property_type.toLowerCase()}/${
                          item?.slug
                        }`}
                      >
                        {item.name}
                      </Link>
                    </Card.Title>
                    {item.location.area && item.location.city && (
                      <Card.Text>
                        <img
                          src={publicUrl + "assets/img/icon-img/map.png"}
                          alt={"location"}
                        />{" "}
                        {item.location.area}, {item.location.city}
                      </Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
        <p
          className="mob_view"
          style={{ color: "#BA945C", fontSize: "20px", fontWeight: "bold" }}
        >
          View all
        </p>
      </div>
    );
  }
}

export default LeasedProperties;
