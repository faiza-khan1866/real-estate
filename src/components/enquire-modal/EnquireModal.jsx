import React, { useState, useEffect } from "react";
import { Modal, Button, Row, Col, Form, Container } from "react-bootstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { API } from "../../http/API";
import { Alert } from "react-bootstrap";
import "./EnquireModal.scss";

const EnquireModal = (props) => {
  const defaultState = {
    mk_name: "",
    mk_phone: "",
    mk_email: "",
    mk_property_category: "",
    mk_property_type: "property",
    is_pushed: 0,
    mk_message: "",
    mk_flag: "enquire_form",
  };
  const [show, setShow] = useState(true);
  const [formValues, setFormValues] = useState(defaultState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);
    let data = { ...formValues };
    data.CRM_id = "97f23fe6-3f98-eb11-b820-00155d048ec6";
    API.post("/contact_form", data)
      .then((response) => {
        setShow(true);
      })
      .catch((err) => {
        // alert("Something went wrong.");
        console.log(err);
      });
  };

  useEffect(() => {
    // console.log(formErrors);
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
    if (!values.mk_property_category) {
      errors.mk_property_category = " Property Category is required!";
    }
    // if (!values.mk_property_type) {
    //     errors.mk_property_type = " Property Type is required!"
    // }
    if (!values.mk_message) {
      errors.mk_message = " Message is required!";
    }
    return errors;
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={"enquire-modal"}
      style={{ paddingLeft: "0px" }}
    >
      <span className={"modalIcon"} onClick={props.onHide}>
        <ArrowBackIcon />
      </span>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Container fluid>
            <Row>
              <Col sm={6}>
                <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type here..."
                    className={"formcolor"}
                    name={"mk_name"}
                    value={formValues.mk_name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <p className="text-danger">
                  <small>{formErrors.mk_name}</small>
                </p>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3" controlId="formGroupPhone">
                  <Form.Label>Your Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type here..."
                    className={"formcolor"}
                    name={"mk_phone"}
                    value={formValues.mk_phone}
                    onChange={handleChange}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </Form.Group>
                <p className="text-danger">
                  <small>{formErrors.mk_phone}</small>
                </p>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Type here..."
                    className={"formcolor"}
                    name={"mk_email"}
                    value={formValues.mk_email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <p className="text-danger">
                  <small>{formErrors.mk_email}</small>
                </p>
              </Col>
              {/* <Col sm={6}>
                                <Form.Group className="mb-3" controlId="formGroupType">
                                    <Form.Label>What sort of property are you interested in?</Form.Label>
                                    <Form.Control as="select"
                                        className={"formcolor"}
                                        name={"mk_property_type"}
                                        onChange={handleChange}
                                        value={formValues.mk_property_type}
                                    >
                                        <option>Select Options...</option>
                                        <option>Residential</option>
                                        <option>Commercial</option>
                                        <option>Industrial</option>
                                    </Form.Control>
                                </Form.Group>
                                <p className='text-danger'><small>{formErrors.mk_property_type}</small></p>
                            </Col> */}
              <Col sm={6}>
                <Form.Group className="mb-3" controlId="formGroupCategory">
                  <Form.Label>Property category</Form.Label>
                  <Form.Control
                    as="select"
                    className={"formcolor"}
                    onChange={handleChange}
                    value={formValues.mk_property_category}
                    name={"mk_property_category"}
                  >
                    <option>Select Property category</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                  </Form.Control>
                </Form.Group>
                <p className="text-danger">
                  <small>{formErrors.mk_property_category}</small>
                </p>
              </Col>
              <Col sm={12}>
                <Form.Group className="mb-3" controlId="formGroupMessage">
                  <Form.Label>Your message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    style={{ resize: "none" }}
                    placeholder="Type here..."
                    className={"formcolor"}
                    name={"mk_message"}
                    value={formValues.mk_message}
                    onChange={handleChange}
                  />
                </Form.Group>
                <p className="text-danger">
                  <small>{formErrors.mk_message}</small>
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

export default EnquireModal;
