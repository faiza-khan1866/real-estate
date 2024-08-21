import React from "react";
import { Modal, Row, Col, Container } from "react-bootstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import "./Documents.scss";

const Documents = (props) => {
  let publicUrl = process.env.PUBLIC_URL;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="Documents"
      style={{ paddingLeft: "0px" }}
    >
      <Container>
        <span className={"modalIcon"} onClick={props.onHide}>
          <ArrowBackIcon />
        </span>
        <Modal.Body>
          <Row>
            <Col
              sm
              md={12}
              lg
              className={"d-flex justify-content-center align-items-start"}
            >
              <img
                src={props.teamdetails?.img}
                alt="site image"
                className={"img-fluid"}
              />
            </Col>
            <Col sm md={12} lg>
              <p className={"mb-2 Title"}>{props.teamdetails?.name}</p>
              <p className="SubTitle">{props.teamdetails?.designation}</p>
              {props.teamdetails?.language && (
                <p>
                  Language : <span>{props.teamdetails?.language}</span>
                </p>
              )}
              {props.teamdetails?.location && (
                <p>
                  Locations : <span>{props.teamdetails?.location}</span>
                </p>
              )}
              {props.teamdetails?.experience && (
                <p>
                  Experience : <span>{props.teamdetails?.experience}</span>
                </p>
              )}

              <p
                className="mt-2"
                dangerouslySetInnerHTML={{
                  __html: props.teamdetails?.department,
                }}
              ></p>

              <div
                className={"d-flex justify-content-start align-items-center"}
              >
                <a
                  href={`tel:${props.teamdetails?.phone_number}`}
                  className={"iconStyle"}
                >
                  <LocalPhoneIcon className="icon" />
                </a>
                <a
                  href={`mailto:${props.teamdetails?.email}`}
                  className={"iconStyle"}
                >
                  <EmailIcon className="icon" />
                </a>
                <a
                  href={`https://wa.me/${props.teamdetails?.instagram}`}
                  className={"iconStyle"}
                  target={"_blank"}
                >
                  <WhatsAppIcon className="icon" />
                </a>
                <a
                  href={`${props.teamdetails?.linkdin}`}
                  className={"iconStyle"}
                  target={"_blank"}
                >
                  <LinkedInIcon className="icon" />
                </a>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default Documents;
