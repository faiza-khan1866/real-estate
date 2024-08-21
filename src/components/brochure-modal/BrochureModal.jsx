import React, { useState, useEffect } from "react";
import { Modal, Row, Col, Form, Container } from "react-bootstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { API } from "../../http/API";
import { Alert } from "react-bootstrap";

const BrochureModal = (props) => {
  const defaultState = {
    name: "",
    phone: "",
    email: "",
    property: "",
  };
  const [show, setShow] = useState(true);
  const [formValues, setFormValues] = useState(defaultState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);

    let data = { ...formValues, property: props?.property_name };
    API.post("/brochure-form", data)
      .then((response) => {
        setShow(true);
        // props.setShowDownload(true);
        sessionStorage.setItem("showDownload", true);
        props.onHide();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
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
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is not a valid email format!";
    }
    return errors;
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      className="enquire-modal"
      style={{ paddingLeft: "0px" }}
    >
      <span className="modalIcon" onClick={props.onHide}>
        <ArrowBackIcon />
      </span>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Container fluid>
            <Row>
              <Col sm={12}>
                <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type here..."
                    className="formcolor"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <p className="text-danger">
                  <small>{formErrors.name}</small>
                </p>
              </Col>
              <Col sm={12}>
                <Form.Group className="mb-3" controlId="formGroupPhone">
                  <Form.Label>Your Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type here..."
                    className="formcolor"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </Form.Group>
                <p className="text-danger">
                  <small>{formErrors.phone}</small>
                </p>
              </Col>
              <Col sm={12}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Type here..."
                    className="formcolor"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <p className="text-danger">
                  <small>{formErrors.email}</small>
                </p>
              </Col>
            </Row>
            <center>
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
                <button
                  className={"btn btn-yellow investment_fom_btn px-4 py-2"}
                >
                  Submit
                </button>
              )}
            </center>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BrochureModal;