import React, { Component } from "react";
import sectiondata from "../../../data/sections.json";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./FeaturedProperties.scss"

class FeaturedProperties extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL;
    let data = sectiondata.featuredproperties;
    let Customclass = this.props.Customclass
      ? this.props.Customclass
      : "pd-top-0";

    return (
      <div className={"featured-area  " + Customclass}>
        <div className="section-title text-center">
          <h2 className="title" style={{ textTransform: "uppercase" }}>
            {data.title}
          </h2>
        </div>
        <div className="row">
          {this.props.buildingsData
            ?.filter((x) => x.featured === 1)
            .map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                {item?.properties?.slug === undefined ? (
                  <Card className={"cardstyle"}>
                    <Card.Img
                      variant="top"
                      src={item.featured_img}
                      className={"imgstyle"}
                    />
                    {item?.leased_sold_status && (
                      <div className="icon_div">
                        <span>{item?.leased_sold_status}</span>
                      </div>
                    )}
                    <Card.Body>
                      <Card.Title className={"title"}>
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
                      </Card.Title>
                      {item.area && item.city && (
                        <Card.Text>
                          <img
                            src={publicUrl + "assets/img/icon-img/map.png"}
                            alt={"location"}
                          />{" "}
                          {item.area}, {item.city}
                        </Card.Text>
                      )}
                    </Card.Body>
                  </Card>
                ) : (
                  <Link
                    to={{
                      pathname: `/properties/${item?.properties?.category_type.toLowerCase()}/${item?.properties?.Property_type.toLowerCase()}/${
                        item?.properties?.slug
                      }`,
                      state: `${item.name}`,
                    }}
                  >
                    <Card className={"cardstyle"}>
                      <Card.Img
                        variant="top"
                        src={item.featured_img}
                        className={"imgstyle"}
                      />
                      {item?.leased_sold_status && (
                        <div className="icon_div">
                          <span>{item?.leased_sold_status}</span>
                        </div>
                      )}
                      <Card.Body>
                        <Card.Title className={"title"}>
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
                        </Card.Title>
                        <Card.Text>
                          <img
                            src={publicUrl + "assets/img/icon-img/map.png"}
                            alt={"location"}
                          />{" "}
                          {item.area}, {item.city}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                )}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default FeaturedProperties;
