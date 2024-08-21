import React from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Intro from "../Intro";
import "./FloorPlan.scss";

const FloorPlan = (props) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const next = () => {
        setCurrentIndex(currentIndex + 1);
    };

    const prev = () => {
        setCurrentIndex(currentIndex - 1);
    };
    return (
        <div className="floorplan container">
            {/* {props?.singleProperty?.floor_plan_images?.length === 0 ? "" :
                <h2 className={"Title"}>
                    Floor Plan
                </h2>
            } */}
            <Row>
                <Col sm={8}>
                    <Intro
                        singlePropertyData={props?.singleProperty}
                    />
                    {props?.singleProperty?.floor_plan_images?.length === 0 ? "" :
                        <>
                            <h2 className={"Title"}>
                                Floor Plan
                            </h2>
                            <Carousel
                                showThumbs={false}
                                autoPlay={true}
                                dynamicHeight={false}
                                showStatus={false}
                                showArrows={false}
                                showIndicators={false}
                                infiniteLoop={true}
                                stopOnHover={false}
                                centerSlidePercentage={70}
                                selectedItem={currentIndex}
                                className={"carousel carouselMBLStyle"}
                                onChange={(index) => setCurrentIndex(index)}
                                interval={6000}
                            >
                                {props?.singleProperty?.floor_plan_images?.map((item, i) => (
                                    <div>
                                        <img src={item} />
                                    </div>
                                ))}

                            </Carousel>

                            <div className="d-flex justify-content-end align-items-center arrowDiv">
                                <button type="button" onClick={prev} className={"CarouselArrow"}>
                                    <ArrowBackIosIcon className={"carouselArrowsize"} />
                                </button>
                                <button type="button" onClick={next} className={"CarouselArrow ml-4"}>
                                    <ArrowForwardIosIcon className={"carouselArrowsize"} />
                                </button>
                            </div>
                        </>
                    }
                </Col>
                {props?.singleProperty?.location?.map === null ? "" :
                    < Col sm={4}>
                        <Card>
                            {/* <a href={props?.singleProperty?.location?.map} target={"_blank"}>
                                <Card.Img variant="top" src={img1} className={"mapImg"} />
                            </a> */}
                            <iframe src={props?.singleProperty?.location?.map}
                                width="100%"
                                height="370"
                                style={{ border: "0" }}
                                allowfullscreen=""
                                loading="lazy"
                            ></iframe>
                            <Card.Body>
                                <h2 className={"subTitle"}>
                                    {props?.singleProperty?.location?.city}
                                    {/* Dubai */}
                                </h2>
                            </Card.Body>
                        </Card>
                    </Col>
                }
            </Row>
        </div >
    );
};

export default FloorPlan;