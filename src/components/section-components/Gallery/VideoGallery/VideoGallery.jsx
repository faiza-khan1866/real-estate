import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
// import img1 from "../../../../assets/img/cardImg.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { API } from "../../../../http/API";
import { Alert } from "react-bootstrap";
import ReactPlayer from "react-player";
// import { makeStyles } from "@material-ui/core/styles";
// import Controls from "./Controls";
import "./VideoGallery.scss";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const VideoGallery = (props) => {
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
    let mk_property_category = `${props?.singleProperty?.category_type}`;
    let mk_property_type = `${props?.singleProperty?.Property_type}`;
    let CRM_id = `${props?.singleProperty?.teams?.CRM_id}`;
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
    console.log(formErrors);
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

  const data = () => {
    return [...new Set(props.singleProperty.video_images?.map((item) => item))];
  };

  let videoData = data();

  const [videoarray] = videoData;

  //.........react player code

  const [state, setState] = useState({
    playing: false,
    controls: false,
  });

  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const controlsRef = useRef(null);
  const { playing } = state;

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  return (
    <div className="Gallery container" id={"videoSlider"}>
      {videoarray && videoarray.video_link && videoarray.featured_image && (
        <h3 className={"MainTitle"}>Video gallery</h3>
      )}
      <Row>
        <Col sm md={12} lg={7} className={"mblSpace"}>
          {videoarray && videoarray.video_link && videoarray.featured_image && (
            <Carousel
              responsive={responsive}
              swipeable={true}
              showDots={false}
              arrows={true}
              ssr={true} // means to render carousel on server-side.
              infinite={false}
              draggable={true}
              autoPlay={false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="listStyle"
            >
              {props?.singleProperty?.video_images?.map((slides, index) => (
                <ReactPlayer
                  width="100%"
                  height="500px"
                  loop={true}
                  playing={true}
                  url={slides.video_link}
                  light={slides.featured_image}
                  controls={true}
                />
                // <div
                //     ref={playerContainerRef}
                //     key={index}
                // >
                //     <ReactPlayer
                //         ref={playerRef}
                //         width="100%"
                //         height="560px"
                //         url={slides.video_link}
                //         loop={true}
                //         muted={false}
                //         playing={playing}
                //         controls={true}
                //         config={{
                //             file: {
                //                 attributes: {
                //                     crossorigin: "anonymous",
                //                 },
                //             },
                //         }}
                //     // style={{ transform: "scale(1.1,1)" }}
                //     />

                //     <Controls
                //         ref={controlsRef}
                //         onPlayPause={handlePlayPause}
                //         playing={playing}
                //         image={slides.featured_image}
                //     />
                // </div>
              ))}
            </Carousel>
          )}
        </Col>
        <Col sm={5} md={12} lg={5}>
          <Card>
            <Card.Body>
              <div
                className={
                  "d-flex flex-column justify-content-center align-items-center"
                }
              >
                {props?.singleProperty?.teams?.img && (
                  <img
                    src={props?.singleProperty?.teams?.img}
                    alt="IMG"
                    className={"cardImg"}
                  />
                )}
                <h2 className={"FormTitle"}>
                  {props?.singleProperty?.teams?.name}
                  {/* Abdulrahim Kalakh */}
                </h2>
                <p className={"subTitle"}>
                  {props?.singleProperty?.teams?.designation}
                  {/* Leasing Executive */}
                </p>
              </div>
              <div
                className={
                  "d-flex justify-content-between align-items-center contactBTNDiv"
                }
              >
                <a
                  href={`tel:${props?.singleProperty?.teams?.phone_number}`}
                  className={
                    "ContactButton d-flex justify-content-center align-items-center"
                  }
                >
                  <LocalPhoneIcon
                    style={{ fontSize: "1rem", marginRight: "0.2rem" }}
                  />
                  <span>Call</span>
                </a>
                <a
                  href={`https://wa.me/${props?.singleProperty?.teams?.instagram}`}
                  target={"_blank"}
                  className={
                    "ContactButton d-flex justify-content-center align-items-center"
                  }
                >
                  <WhatsAppIcon
                    style={{ fontSize: "1rem", marginRight: "0.2rem" }}
                  />
                  <span>Message</span>
                </a>
              </div>
              {props?.singleProperty?.featured === 1 ? (
                <h2 className={"contactTitle"}>Sign Up for the Waiting List</h2>
              ) : (
                <h2 className={"contactTitle"}>
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
                      name={"mk_name"}
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
                      name={"mk_phone"}
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
                    name={"mk_email"}
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
                    name={"mk_message"}
                    value={formValues.mk_message}
                    onChange={handleChange}
                  />
                  <p className="text-danger">
                    <small>{formErrors.mk_message}</small>
                  </p>
                </Form.Group>
                <div
                  className={"d-flex justify-content-center align-items-center"}
                >
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

export default VideoGallery;
