import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Container } from "react-bootstrap";
import cardimg from "../../../../assets/img/icons/cardImg.jpg";
import location from "../../../../assets/img/icons/location.png";
import sq from "../../../../assets/img/icons/Sq.png";
import bed from "../../../../assets/img/icons/bed.png";
import Studio from "../../../../assets/img/icons/Studio.png";
import shower from "../../../../assets/img/icons/shower.png";
import { Link } from "react-router-dom";
import "./RelatedBuildings.scss";

function RelatedBuildings(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={"related-buildings"}>
      <Container fluid>
        {props.buildingName === undefined ? (
          <>
            {props.allProperty.length > 1 &&
            props.allProperty?.filter(
              (x) => x.building_id === props.singleProperty.building_id
            ).length > 1 ? (
              <h3 className={"InfoTitle"}>Property Options</h3>
            ) : (
              ""
            )}

            <Carousel
              responsive={responsive}
              swipeable={true}
              showDots={false}
              arrows={true}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              draggable={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="listStyle"
            >
              {props.allProperty
                ?.filter(
                  (x) =>
                    x.building_id === props.singleProperty.building_id &&
                    x.slug !== props.pathname.split("/")[4]
                )
                .map((slides, index) => (
                  <div key={index}>
                    <Link
                      to={`/properties/${slides?.category_type.toLowerCase()}/${slides?.Property_type.toLowerCase()}/${
                        slides?.slug
                      }`}
                    >
                      <Card className={"cardstyle"}>
                        <Card.Img
                          variant="top"
                          src={slides.featured_image}
                          className={"imgstyle"}
                        />
                        {slides?.leased_sold_status && (
                          <div className="icon_div">
                            <span>{slides?.leased_sold_status}</span>
                          </div>
                        )}
                        <Card.Body>
                          <Card.Title className={"title"}>
                            <a
                              href={`/properties/${slides?.category_type.toLowerCase()}/${slides?.Property_type.toLowerCase()}/${
                                slides?.slug
                              }`}
                            >
                              {slides.name}
                            </a>
                          </Card.Title>
                          {slides.location.area && slides.location.city && (
                            <Card.Text>
                              <img src={location} alt={"location"} />{" "}
                              {slides.location.area}, {slides.location.city}
                            </Card.Text>
                          )}
                          <hr />
                          <div
                            className={
                              "d-flex justify-content-between align-items-center"
                            }
                          >
                            {console.log(slides, "slides")}
                            {slides.Property_type === "Studio" ? (
                              <p>
                                <img src={Studio} alt={"location"} />{" "}
                                <small> Studio</small>
                              </p>
                            ) : (
                              ""
                            )}
                            {slides.bed === null ? (
                              ""
                            ) : (
                              <p>
                                <img src={bed} alt={"location"} />{" "}
                                <small> {slides.bed} Bedrooms</small>
                              </p>
                            )}
                            {slides.bathroom === null ? (
                              ""
                            ) : (
                              <p>
                                <img src={shower} alt={"location"} />{" "}
                                <small> {slides.bathroom} Bathrooms</small>
                              </p>
                            )}
                            {slides.space === null ? (
                              ""
                            ) : (
                              <p>
                                <img src={sq} alt={"location"} />{" "}
                                <small>
                                  {" "}
                                  {slides.space}{" "}
                                  {slides.end_area
                                    ? " - " + slides.end_area
                                    : ""}{" "}
                                  Sq. Ft
                                </small>
                              </p>
                            )}
                          </div>
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                ))}
            </Carousel>
          </>
        ) : (
          <>
            {props.allProperty?.filter(
              (x) => x.building.name === props.buildingName
            ).length > 1 ? (
              <h3 className={"InfoTitle"}>Property Options</h3>
            ) : (
              ""
            )}

            <Carousel
              responsive={responsive}
              swipeable={true}
              showDots={false}
              arrows={true}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              draggable={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="listStyle"
            >
              {props.allProperty
                ?.filter(
                  (x) =>
                    x.building.name === props.buildingName &&
                    x.slug !== props.pathname.split("/")[4]
                )
                .map((slides, index) => (
                  <div key={index}>
                    <Link
                      to={`/properties/${slides?.category_type.toLowerCase()}/${slides?.Property_type.toLowerCase()}/${
                        slides?.slug
                      }`}
                    >
                      <Card className={"cardstyle"}>
                        <Card.Img
                          variant="top"
                          src={slides.featured_image}
                          className={"imgstyle"}
                        />
                        {slides?.leased_sold_status && (
                          <div className="icon_div">
                            <span>{slides?.leased_sold_status}</span>
                          </div>
                        )}
                        <Card.Body>
                          <Card.Title className={"title"}>
                            <a
                              href={`/properties/${slides?.category_type.toLowerCase()}/${slides?.Property_type.toLowerCase()}/${
                                slides?.slug
                              }`}
                            >
                              {slides.name}
                            </a>
                          </Card.Title>
                          {slides.location.area && slides.location.city && (
                            <Card.Text>
                              <img src={location} alt={"location"} />{" "}
                              {slides.location.area}, {slides.location.city}
                            </Card.Text>
                          )}
                          <hr />
                          <div
                            className={
                              "d-flex justify-content-between align-items-center"
                            }
                          >
                            {slides.bed === null ? (
                              ""
                            ) : (
                              <p>
                                <img src={bed} alt={"location"} />{" "}
                                <small> {slides.bed} Bedroom</small>
                              </p>
                            )}
                            {slides.Property_type === "Studio" ? (
                              <p>
                                <img src={Studio} alt={"location"} />{" "}
                                <small> Studio</small>
                              </p>
                            ) : (
                              ""
                            )}
                            {slides.bathroom === null ? (
                              ""
                            ) : (
                              <p>
                                <img src={shower} alt={"location"} />{" "}
                                <small> {slides.bathroom} Bath</small>
                              </p>
                            )}
                            {slides.space === null ? (
                              ""
                            ) : (
                              <p>
                                <img src={sq} alt={"location"} />{" "}
                                <small> {slides.space} Sq.ft</small>
                              </p>
                            )}
                          </div>
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                ))}
            </Carousel>
          </>
        )}
      </Container>
    </div>
  );
}
export default RelatedBuildings;
