import React, { useEffect, useState } from "react";
import { API } from "../../../http/API";
import noc from "../../../assets/img/NOC_form.doc";
import { Alert } from "react-bootstrap";
import Button from "@material-ui/core/Button";

function AgentRegisterForm({}) {
  const initialObject = {
    mk_company_name: "",
    mk_trade_license_number: "",
    mk_trade_license_file: "",
    mk_rera_orn_number: "",
    mk_rera_orn_file: "",
    mk_broker_name: "",
    mk_broker_id: "",
    mk_email: "",
    mk_phone: "",
    mk_area_specialty: "",
    mk_noc_file: "",
    is_pushed: 0,
    flag: "agent_register_form",
  };

  const [show, setShow] = useState(true);
  const [registrationForm, setRegistrationForm] = useState(initialObject);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //-------------trade file
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };
  //-------------orn file
  const [selected1File, setSelected1File] = useState();
  const [isSelected1, setIsSelected1] = useState(false);
  const [invalidImage, setInvalidImage] = useState({ msg: "" });
  const [invalidImage1, setInvalidImage1] = useState({ msg1: "" });
  const [invalidImage2, setInvalidImage2] = useState({ msg2: "" });

  const changeHandler1 = (event) => {
    setSelected1File(event.target.files[0]);
    setIsSelected1(true);
  };

  //-------------noc file
  const [selected2File, setSelected2File] = useState();
  const [isSelected2, setIsSelected2] = useState(false);
  const changeHandler2 = (event) => {
    setSelected2File(event.target.files[0]);
    setIsSelected2(true);
  };

  const handleInputFields = (e) => {
    setRegistrationForm({
      ...registrationForm,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(registrationForm);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /\S+@\S+\.\S+/;
    if (!values.mk_company_name) {
      errors.mk_company_name = "Company Name is required!";
    }
    if (!values.mk_trade_license_number) {
      errors.mk_trade_license_number = "Trade License Number is required!";
    }
    // if (!values.mk_trade_license_file) {
    //     errors.mk_trade_license_file = "Trade License is required!"
    // }
    if (!values.mk_rera_orn_number) {
      errors.mk_rera_orn_number = " Rera ORN is required!";
    }
    // if (!values.mk_rera_orn_file) {
    //     errors.mk_rera_orn_file = " Rera ORN File is required!"
    // }
    if (!values.mk_broker_name) {
      errors.mk_broker_name = " Broker Name is required!";
    }
    if (!values.mk_broker_id) {
      errors.mk_broker_id = " Broker ID is required!";
    }
    if (!values.mk_email) {
      errors.mk_email = "Email is required!";
    } else if (!regex.test(values.mk_email)) {
      errors.mk_email = "Email is not a valid email format!";
    }
    if (!values.mk_phone) {
      errors.mk_phone = "Phone Number is required!";
    }
    if (!values.mk_area_specialty) {
      errors.mk_area_specialty = "Area of Specialty is required!";
    }
    // if (!values.mk_noc_file) {
    //     errors.mk_noc_file = "NOC File is required!"
    // }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(registrationForm));
    if (!selectedFile) {
      setInvalidImage({ ...invalidImage, msg: "Please select image." });
    }
    if (!selected1File) {
      setInvalidImage1({ ...invalidImage1, msg1: "Please select image." });
    }
    if (!selected2File) {
      setInvalidImage2({ ...invalidImage2, msg2: "Please select image." });
    }
    if (!selectedFile || !selected1File || !selected2File) {
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }

    let updatedData = { ...registrationForm };
    // let updatedFiles = {
    //     file: {
    //         path:
    //             selectedFile.name
    //     }
    //     ,
    //     is360: false,
    //     alt_text: "",
    // }
    // let updatedFiles1 = {
    //     file: {
    //         path:
    //             selected1File.name
    //     }
    //     ,
    //     is360: false,
    //     alt_text: "",
    // }
    // let updatedFiles2 = {
    //     file: {
    //         path:
    //             selected2File.name
    //     }
    //     ,
    //     is360: false,
    //     alt_text: "",
    // }

    let imagesFormData = new FormData();
    imagesFormData.append("tradeimage", selectedFile);
    // imagesFormData.append("data[]", JSON.stringify(updatedFiles))
    imagesFormData.append("reraimage", selected1File);
    // imagesFormData.append("data[]", JSON.stringify(updatedFiles1))
    imagesFormData.append("nocimage", selected2File);
    // imagesFormData.append("data[]", JSON.stringify(updatedFiles2))
    imagesFormData.append("registrationData[]", JSON.stringify(updatedData));

    API.post("/agent-form", imagesFormData, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${imagesFormData._boundary}`,
      },
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          // console.log(response.data)
          setRegistrationForm({ ...initialObject });
        }
      })
      .catch((err) => {
        // alert("Something went wrong.");
        console.log(err);
      });
  };

  return (
    <div className="investment-form-con registration_form pd-bottom-60 ">
      <div className="container">
        <div className="investment-form form-border">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="rld-single-input">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="mk_company_name"
                    // required
                    value={registrationForm.mk_company_name}
                    onChange={handleInputFields}
                    placeholder="Type here"
                  />
                </div>
                <p className="text-danger">
                  <small>{formErrors.mk_company_name}</small>
                </p>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12"></div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-4 col-xs-12">
                <div className="rld-single-input">
                  <label>Trade License Number</label>
                  <input
                    type="text"
                    name="mk_trade_license_number"
                    // required
                    value={registrationForm.mk_trade_license_number}
                    onChange={handleInputFields}
                    placeholder="Type here"
                  />
                </div>
                <p className="text-danger">
                  <small>{formErrors.mk_trade_license_number}</small>
                </p>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-12">
                <div className="rld-single-input">
                  <label>Trade License File</label>
                  <input
                    type="text"
                    name="mk_trade_license_file"
                    value={isSelected ? selectedFile.name : ""}
                    readOnly
                  />
                </div>
                <p className="text-danger">
                  <small>{formErrors.mk_trade_license_file}</small>
                </p>
              </div>
              <div className="col-lg-2 col-sm-4 col-xs-12">
                <div className="rld-single-input">
                  <label></label>
                  <br />
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    id="contained-button-file"
                    onChange={changeHandler}
                  />
                  <label
                    htmlFor="contained-button-file"
                    style={{ marginTop: "0.3rem" }}
                  >
                    <Button
                      variant="contained"
                      className="btn btn-yellow"
                      component="span"
                      style={{
                        background: "#215c4f",
                        color: "white",
                        boxShadow: "none",
                        borderRadius: "10px",
                        textTransform: "capitalize",
                      }}
                    >
                      Upload{" "}
                      <i className="fa fa-upload ml-1" aria-hidden="true"></i>
                    </Button>
                  </label>
                  {!isSelected && (
                    <p className="text-danger">
                      <small>{invalidImage.msg}</small>
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-4 col-xs-12">
                <div className="rld-single-input">
                  <label>RERA ORN (RERA Office Registration Number)</label>
                  <input
                    type="text"
                    name="mk_rera_orn_number"
                    // required
                    value={registrationForm.mk_rera_orn_number}
                    onChange={handleInputFields}
                    placeholder="Type here"
                  />
                </div>
                <p className="text-danger">
                  <small>{formErrors.mk_rera_orn_number}</small>
                </p>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-12">
                <div className="rld-single-input">
                  <label>RERA File</label>
                  <input
                    type="text"
                    name="mk_rera_orn_file"
                    value={isSelected1 ? selected1File.name : ""}
                    readOnly
                  />
                </div>
                <p className="text-danger">
                  <small>{formErrors.mk_rera_orn_file}</small>
                </p>
              </div>
              <div className="col-lg-2 col-sm-4 col-xs-12">
                <div className="rld-single-input">
                  <label></label>
                  <br />
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    id="contained-button-file1"
                    onChange={changeHandler1}
                  />
                  <label
                    htmlFor="contained-button-file1"
                    style={{ marginTop: "0.3rem" }}
                  >
                    <Button
                      variant="contained"
                      className="btn btn-yellow"
                      component="span"
                      style={{
                        background: "#215c4f",
                        color: "white",
                        boxShadow: "none",
                        borderRadius: "10px",
                        textTransform: "capitalize",
                      }}
                    >
                      Upload{" "}
                      <i className="fa fa-upload ml-1" aria-hidden="true"></i>
                    </Button>
                  </label>
                  {!isSelected1 && (
                    <p className="text-danger">
                      <small>{invalidImage1.msg1}</small>
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-4 col-xs-12">
                <div className="rld-single-input">
                  <label>Broker Name</label>
                  <input
                    type="text"
                    name="mk_broker_name"
                    // required
                    value={registrationForm.mk_broker_name}
                    onChange={handleInputFields}
                    placeholder="Type here"
                  />
                </div>
                <p className="text-danger">
                  <small>{formErrors.mk_broker_name}</small>
                </p>
              </div>
              <div className="col-lg-6 col-sm-4 col-xs-12">
                <div className="rld-single-input">
                  <label>Broker ID</label>
                  <input
                    type="text"
                    name="mk_broker_id"
                    // required
                    value={registrationForm.mk_broker_id}
                    onChange={handleInputFields}
                    placeholder="Type here"
                  />
                </div>
                <p className="text-danger">
                  <small>{formErrors.mk_broker_id}</small>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="rld-single-input">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="mk_phone"
                    // required
                    value={registrationForm.mk_phone}
                    onChange={handleInputFields}
                    placeholder="Type here"
                  />
                </div>
                <p className="text-danger">
                  <small>{formErrors.mk_phone}</small>
                </p>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="rld-single-input">
                  <label>Your Email</label>
                  <input
                    type="email"
                    name="mk_email"
                    // required
                    value={registrationForm.mk_email}
                    onChange={handleInputFields}
                    placeholder="Type here"
                  />
                </div>
                <p className="text-danger">
                  <small>{formErrors.mk_email}</small>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-xs-12">
                <div className="rld-single-input check_group">
                  <label>Areas of Specialties</label>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        className="radio_check_btn"
                        value="residential"
                        id="mk_area_specialty1"
                        onClick={handleInputFields}
                        name="mk_area_specialty"
                      />
                      <label>Residential</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="radio_check_btn"
                        id="mk_area_specialty2"
                        value="commercial"
                        onClick={handleInputFields}
                        name="mk_area_specialty"
                      />
                      <label>Commercial</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="radio_check_btn"
                        id="mk_area_specialty3"
                        value="industrial"
                        name="mk_area_specialty"
                        onClick={handleInputFields}
                      />
                      <label>Industrial</label>
                    </li>
                  </ul>
                </div>
                <p className="text-danger">
                  <small>{formErrors.mk_area_specialty}</small>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-4 col-xs-12">
                <div className="rld-single-input down_form_text">
                  <label>Download Forms</label>
                  <br></br>
                  <a href={noc} download>
                    <i className="fa fa-download" aria-hidden="true"></i> NOC
                    for Marketing/Leasing{" "}
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-12">
                <div className="rld-single-input">
                  <label>NOC for Marketing/Leasing</label>
                  <input
                    type="text"
                    name="mk_noc_file"
                    value={isSelected2 ? selected2File.name : ""}
                    readOnly
                  />
                </div>
                <p className="text-danger">
                  <small>{formErrors.mk_noc_file}</small>
                </p>
              </div>
              <div className="col-lg-2 col-sm-4 col-xs-12">
                <div className="rld-single-input">
                  <label></label>
                  <br />
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    id="contained-button-file2"
                    onChange={changeHandler2}
                  />
                  <label
                    htmlFor="contained-button-file2"
                    style={{ marginTop: "0.3rem" }}
                  >
                    <Button
                      variant="contained"
                      className="btn btn-yellow"
                      component="span"
                      style={{
                        background: "#215c4f",
                        color: "white",
                        boxShadow: "none",
                        borderRadius: "10px",
                        textTransform: "capitalize",
                      }}
                    >
                      Upload{" "}
                      <i className="fa fa-upload ml-1" aria-hidden="true"></i>
                    </Button>
                  </label>
                  {!isSelected2 && (
                    <p className="text-danger">
                      <small>{invalidImage2.msg2}</small>
                    </p>
                  )}
                </div>
              </div>
              <span
                className="form_note"
                style={{ color: "rgba(66, 66, 66, 0.5)" }}
              >
                * Once filled in, these forms need to be uploaded below
              </span>
            </div>
            <div style={{ textAlign: "center" }}>
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <Alert
                  variant="success"
                  show={show}
                  onClose={() => {
                    setShow(false);
                    setIsSubmit(false);
                    setRegistrationForm({ ...initialObject });
                  }}
                  dismissible
                >
                  Registered Successfully
                </Alert>
              ) : (
                <button className="btn btn-yellow investment_fom_btn">
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AgentRegisterForm;
