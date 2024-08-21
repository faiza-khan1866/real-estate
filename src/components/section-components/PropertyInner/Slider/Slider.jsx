import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
// import img1 from "../../../../assets/img/cardImg.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { HashLink } from "react-router-hash-link";
import { API } from "../../../../http/API";
import { Alert } from "react-bootstrap";
import BrochureModal from "../../../brochure-modal/BrochureModal";
import "./Slider.scss";


const Slider = ({ singleProperty }) => {
  const [showModal, setShowModal] = useState(false);
  // const [showDownload, setShowDownload] = useState(false);
  let downloadForm = sessionStorage.getItem("showDownload");

  const defaultState = {
    mk_name: "",
    mk_phone: "",
    mk_email: "",
    mk_property_category: "",
    mk_property_type: "",
    is_pushed: 0,
    mk_message: "",
    mk_flag: "property_form",
  };
  const [show, setShow] = useState(true);
  const [formValues, setFormValues] = useState(defaultState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    let mk_property_category = `${singleProperty?.category_type}`;
    let mk_property_type = `${singleProperty?.Property_type}`;
    let CRM_id = `${singleProperty?.teams?.CRM_id}`;
    let updatedData = {
      ...formValues,
      mk_property_category,
      mk_property_type,
      CRM_id,
    };
    API.post("/contact_form", updatedData)
      .then((response) => {
        // if (Object.keys(formErrors).length === 0 && isSubmit) {
        //     // alert("Submitted successfully");
        //     setFormValues({ ...defaultState });
        // }
        // if (response.status === 200 || response.status === 201) {
        //     // alert("Submitted successfully");
        //     setFormValues({ ...defaultState });
        //     // setShow(false);
        // }
      })
      .catch((err) => {
        // alert("Something went wrong.");
        console.log(err);
      });
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const validate = (values) => {
    const errors = {};
    const regex = /\S+@\S+\.\S+/;
    if (!values.mk_name) {
      errors.mk_name = "Name is required!";
    }
    if (!values.mk_phone) {
      errors.mk_phone = "Phone Number is required!";
    }
    if (!values.mk_email) {
      errors.mk_email = "Email is required!";
    } else if (!regex.test(values.mk_email)) {
      errors.mk_email = "Email is not a valid email format!";
    }
    if (!values.mk_message) {
      errors.mk_message = " Message is required!";
    }
    return errors;
  };

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const next = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const prev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const data = () => {
    return [...new Set(singleProperty.video_images?.map((item) => item))];
  };

  let videoData = data();

  const [videoarray] = videoData;

  return (
    <div className="Slider container" id={"cardID"}>
      <Row>
        <Col lg={7} sm={12}>
          <Carousel
            autoPlay={true}
            dynamicHeight={false}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            infiniteLoop={true}
            stopOnHover={false}
            keyBoardControl={true}
            draggable={true}
            centerSlidePercentage={70}
            selectedItem={currentIndex}
            className={"carousel ecomgcolor"}
            onChange={(index) => setCurrentIndex(index)}
            interval={6000}
          >
            {singleProperty?.gallery_images?.map((item, i) => (
              <div key={i}>
                <img src={item} />
              </div>
            ))}
          </Carousel>
          <div className="d-flex justify-content-end align-items-center arrowDiv">
            <button type="button" onClick={prev} className="CarouselArrow">
              <ChevronLeftIcon className="carouselArrowsize" />
            </button>
            <button
              type="button"
              onClick={next}
              className={"CarouselArrow ml-4"}
            >
              <ChevronRightIcon className="carouselArrowsize" />
            </button>
          </div>

          <div className="d-flex justify-content-between align-items-center contactBTNDiv">
            {videoarray &&
              videoarray.video_link &&
              videoarray.featured_image && (
                <HashLink
                  to={`/Gallery/${singleProperty?.slug}` + "#videoSlider"}
                  className={"ContactButton"}
                >
                  View Videos Gallery
                </HashLink>
              )}
            {singleProperty?.images_360?.length === 0 ? (
              ""
            ) : (
              <HashLink
                to={`/Gallery/${singleProperty?.slug}` + "#video360Slider"}
                className={"ContactButton"}
              >
                View 360° Gallery
              </HashLink>
            )}
          </div>

          {singleProperty?.brochure ? (
            <>
              {downloadForm ? (
                <a
                  href={singleProperty?.brochure}
                  // download
                  className="brochure_btn"
                  target="_blank"
                >
                  Download Brochure
                </a>
              ) : (
                <button
                  className="brochure_btn"
                  onClick={() => setShowModal(true)}
                >
                  Download Brochure
                </button>
              )}
            </>
          ) : (
            ""
          )}
          <BrochureModal
            show={showModal}
            onHide={() => setShowModal(false)}
            // setShowDownload={setShowDownload}
            property_name={singleProperty?.name}
          />
        </Col>
        <Col lg={5} sm={12}>
          <Card>
            <Card.Body>
              <div className="d-flex flex-column justify-content-center align-items-center">
                {singleProperty?.teams?.img && (
                  <img
                    src={singleProperty?.teams?.img}
                    alt="IMG"
                    className="cardImg"
                  />
                )}
                <h2 className="FormTitle">
                  {singleProperty?.teams?.name}
                  {/* Abdulrahim Kalakh */}
                </h2>
                <p className="subTitle">
                  {singleProperty?.teams?.designation}
                  {/* Leasing Executive */}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center contactBTNDiv">
                <a
                  href={`tel:${singleProperty?.teams?.phone_number}`}
                  className="ContactButton d-flex justify-content-center align-items-center"
                >
                  <LocalPhoneIcon
                    style={{ fontSize: "1rem", marginRight: "0.2rem" }}
                  />
                  <span>Call</span>
                </a>
                <a
                  href={`https://wa.me/${singleProperty?.teams?.instagram}`}
                  target={"_blank"}
                  className="ContactButton d-flex justify-content-center align-items-center"
                >
                  <WhatsAppIcon
                    style={{ fontSize: "1rem", marginRight: "0.2rem" }}
                  />
                  <span>Message</span>
                </a>
              </div>
              {singleProperty?.featured === 1 ? (
                <h2 className="contactTitle">Sign Up for the Waiting List</h2>
              ) : (
                <h2 className="contactTitle">
                  Register Your Interest
                  {/* Contact Us */}
                </h2>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Type here"
                      name="mk_name"
                      value={formValues.mk_name}
                      onChange={handleChange}
                    />
                    <p className="text-danger">
                      <small>{formErrors.mk_name}</small>
                    </p>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Type here"
                      name="mk_phone"
                      value={formValues.mk_phone}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      onChange={handleChange}
                    />
                    <p className="text-danger">
                      <small>{formErrors.mk_phone}</small>
                    </p>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Type here"
                    name="mk_email"
                    value={formValues.mk_email}
                    onChange={handleChange}
                  />
                  <p className="text-danger">
                    <small>{formErrors.mk_email}</small>
                  </p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    placeholder="Type here"
                    name="mk_message"
                    value={formValues.mk_message}
                    onChange={handleChange}
                  />
                  <p className="text-danger">
                    <small>{formErrors.mk_message}</small>
                  </p>
                </Form.Group>
                <div className="d-flex justify-content-center align-items-center">
                  {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <Alert
                      variant="success"
                      show={show}
                      onClose={() => {
                        setShow(false);
                        setIsSubmit(false);
                        setFormValues({ ...defaultState });
                      }}
                      dismissible
                    >
                      Data Submitted Successfully
                    </Alert>
                  ) : (
                    <button className="btn btn-yellow investment_fom_btn px-4 py-2">
                      Submit
                    </button>
                  )}
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Slider;
