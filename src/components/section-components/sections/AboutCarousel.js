import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from "react-bootstrap";
import Documents from "./Documents/Documents";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import $ from 'jquery';



export default function AboutCarousel({ teamData }) {
    const [readMore, setReadMore] = React.useState();
    const [modalShow, setModalShow] = React.useState(false);
    const [teamItem, setTeamItems] = React.useState(teamData)


    $(document).ready(function () {
        $('.selector').click(function () {
            $('.selector.active').removeClass("active");
            $(this).addClass("active");
        });
    });

    const filterItem = (categItem) => {
        let updatedItems = {}
        updatedItems = teamData?.filter((currElement) => {
            return currElement.type === categItem;
        });

        setTeamItems(updatedItems);
    }

    useEffect(() => {
        setTeamItems(teamData?.filter((x) =>
            x.type === "property_leasing_team"
        ));

    }, [teamData]);

    const leasingdata = teamData.filter(item => item.type === "property_leasing_team");
    const financedata = teamData.filter(item => item.type === "finance_team");
    const projectdata = teamData.filter(item => item.type === "project_management_team");



    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    return (
        <div className="about_slider_tab container">
            <div className="tab-panel banner-search-wrap">
                <ul className="nav nav-tabs rld-banner-tab">
                    {
                        leasingdata.length > 0 &&
                        <li className="nav-item">
                            <a className={`nav-link  selector residentialhover active`}
                                // data-toggle="tab" href="#tabs_1"
                                onClick={() => filterItem('property_leasing_team')}
                            >Property Consultants</a>
                        </li>
                    }
                    {
                        financedata.length > 0 &&
                        <li className="nav-item">
                            <a className="nav-link selector residentialhover"
                                // data-toggle="tab" href="#tabs_2"
                                onClick={() => filterItem('finance_team')}
                            >Finance</a>
                        </li>
                    }
                    {
                        projectdata.length > 0 &&
                        < li className="nav-item">
                            <a className="nav-link selector residentialhover"
                                // data-toggle="tab" href="#tabs_3"
                                onClick={() => filterItem('project_management_team')}
                            >Project Management</a>
                        </li>
                    }
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="tabs_1">
                        <div className="rld-main-search">
                            <div className={"AboutCarousel"}>
                                <Carousel responsive={responsive}
                                    swipeable={true}
                                    showDots={true}
                                    arrows={true}
                                    ssr={true} // means to render carousel on server-side.
                                    infinite={false}
                                    draggable={true}
                                    autoPlay={false}
                                    autoPlaySpeed={5000}
                                    keyBoardControl={true}
                                    customTransition="all .5s"
                                    transitionDuration={1000}
                                    containerClass="carousel-container"
                                    dotListClass="custom-dot-list-style"
                                    itemClass="listStyle"
                                >
                                    {teamItem?.map((slides, index) => (

                                        <div className={"BCarouseldiv"} key={index}>
                                            <Row>
                                                <Col sm md={12} lg>
                                                    <img src={slides?.img}
                                                        alt="site image" className={"B2Bimg"}
                                                    />
                                                </Col>
                                                <Col sm md={12} lg>
                                                    <div className="textForTeam">
                                                        <p className={"mb-2 psize"}>{slides.name}</p>
                                                        <p className="p2size">
                                                            {slides.designation}
                                                        </p>
                                                        {
                                                            slides?.language &&
                                                            <p>Language : <span>{slides.language}</span></p>
                                                        }
                                                        {
                                                            slides?.location &&
                                                            <p>Locations : <span>{slides.location}</span></p>
                                                        }
                                                        {
                                                            slides?.experience &&
                                                            <p>Experience : <span>{slides.experience}</span></p>
                                                        }
                                                    </div>
                                                    <div className={"d-flex justify-content-start align-items-center"}>
                                                        <button className={"B2Bbutton"}
                                                            onClick={() => {
                                                                setModalShow(true);
                                                                setReadMore(slides);
                                                            }}

                                                            style={{ cursor: "pointer" }}
                                                        >
                                                            {"Read more >"}
                                                        </button>
                                                    </div>
                                                    <Row className={"rowmargin"}>
                                                        <Col sm={3} xs={3} md={3} lg={3}>
                                                            <a href={`tel:${slides.phone_number}`} className={"Iconimg"}>
                                                                <LocalPhoneIcon className="icon" />
                                                            </a>
                                                        </Col>
                                                        <Col sm={3} xs={3} md={3} lg={3}>
                                                            <a href={`mailto:${slides.email}`} className={"Iconimg"}>
                                                                <EmailIcon className="icon" />
                                                            </a>
                                                        </Col>
                                                        <Col sm={3} xs={3} md={3} lg={3}>
                                                            <a href={`https://wa.me/${slides.instagram}`} target={"_blank"} className={"Iconimg"}>
                                                                <WhatsAppIcon className="icon" />
                                                            </a>
                                                        </Col>
                                                        <Col sm={3} xs={3} md={3} lg={3}>
                                                            <a href={`${slides.linkdin}`} target={"_blank"} className={"Iconimg"}>
                                                                <LinkedInIcon className="icon" />
                                                            </a>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>
                                    ))
                                    }
                                </Carousel>
                                <Documents show={modalShow} onHide={() => setModalShow(false)}
                                    teamdetails={readMore}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}