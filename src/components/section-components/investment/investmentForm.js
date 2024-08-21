import React, { useEffect, useState } from 'react';
import { API } from "../../../http/API";
import { Alert } from "react-bootstrap"
import Button from '@material-ui/core/Button';

function InvestmentForm({ }) {
    const initialObject = {
        from: "",
        to: "",
        description: "",
        summary: "",
        completion_year: "",
        ownership_type: "",
        building_content: "",
        amenities: "",
        location: "",
        area: "",
        parking: "",
        image: "",
        email: "",
        alt_tag: "image"
    };
    const [InvestmentForm, setInvestmentForm] = useState(initialObject);
    const [show, setShow] = useState(true);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleInputFields = (e) => {
        let updateValue = { ...InvestmentForm };
        updateValue[e.target.name] = e.target.value;
        setInvestmentForm(updateValue);
    };
    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(registrationForm);
        }

    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        if (!values.from) {
            errors.from = "From (AED) is required!"
        }
        if (!values.to) {
            errors.to = "To (AED) is required!"
        }
        if (!values.description) {
            errors.description = " Project Description is required!"
        }
        if (!values.summary) {
            errors.summary = "Summary is required!"
        }
        if (!values.completion_year) {
            errors.completion_year = "Completion Year is required!"
        }
        if (!values.ownership_type) {
            errors.ownership_type = "Ownership Type is required!"
        }
        if (!values.building_content) {
            errors.building_content = "Building Content is required!"
        }
        if (!values.amenities) {
            errors.amenities = "Facilities & Amenities are required!"
        }
        if (!values.location) {
            errors.location = "Location is required!"
        }
        if (!values.area) {
            errors.area = "Plot Area Sq. Ft is required!"
        }
        if (!values.parking) {
            errors.parking = "Parking is required!"
        }
        return errors;
    }
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [invalidImage, setInvalidImage] = useState({ msg: '' });

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedFile) {
            setInvalidImage({ ...invalidImage, msg: "Please select image." })
        }
        setFormErrors(validate(InvestmentForm));
        if (!selectedFile) {
            setIsSubmit(false);
        } else {
            setIsSubmit(true);
        }


        let updatedData = { ...InvestmentForm };
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append("investmentData[]", JSON.stringify(updatedData))
        API.post("/investment", formData, {
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            }
        }
        )
            .then((response) => {
                // if (response.status === 200 || response.status === 201) {
                //     alert("Your Investment has been added");
                //     setInvestmentForm({ ...initialObject });
                // }
            })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <div className="investment-form-con pd-bottom-60 ">
            <div className="container">
                <div className="investment-form form-border">
                    <h4>Investment Opportunity Fact Sheet</h4>
                    <p>Project Asking Prices</p>
                    <form>
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <div className="rld-single-input">
                                    <label>From (AED):</label>
                                    <input
                                        type="text"
                                        name="from"
                                        required
                                        value={InvestmentForm.from}
                                        onChange={handleInputFields}
                                        placeholder="Type here"
                                    />
                                </div>
                                <p className='text-danger'><small>{formErrors.from}</small></p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <div className="rld-single-input">
                                    <label>To (AED):</label>
                                    <input
                                        type="text"
                                        name="to"
                                        required
                                        value={InvestmentForm.to}
                                        onChange={handleInputFields}
                                        placeholder="Type here"
                                    />
                                </div>
                                <p className='text-danger'><small>{formErrors.to}</small></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="rld-single-input">
                                    <label>Project Description:</label>
                                    <input
                                        type="text"
                                        name="description"
                                        required
                                        value={InvestmentForm.description}
                                        onChange={handleInputFields}
                                        placeholder="Type here"
                                    />
                                </div>
                                <p className='text-danger'><small>{formErrors.description}</small></p>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="rld-single-input">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={InvestmentForm.email}
                                        onChange={handleInputFields}
                                        placeholder="Type here"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-xs-12">
                                <div className="rld-single-input">
                                    <label>Summary:</label>
                                    <input
                                        type="text"
                                        name="summary"
                                        required
                                        value={InvestmentForm.summary}
                                        onChange={handleInputFields}
                                        placeholder="Type here"
                                    />
                                </div>
                                <p className='text-danger'><small>{formErrors.summary}</small></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-4 col-xs-12">
                                <div className="rld-single-input">
                                    <label>Year of completion:</label>
                                    <input
                                        type="text"
                                        name="completion_year"
                                        required
                                        value={InvestmentForm.completion_year}
                                        onChange={handleInputFields}
                                        placeholder="Type here"
                                    />
                                </div>
                                <p className='text-danger'><small>{formErrors.completion_year}</small></p>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-xs-12">
                                <div className="rld-single-input">
                                    <label>Owership Type:</label>
                                    <input
                                        type="text"
                                        name="ownership_type"
                                        required
                                        value={InvestmentForm.ownership_type}
                                        onChange={handleInputFields}
                                        placeholder="Type here"
                                    />
                                </div>
                                <p className='text-danger'><small>{formErrors.ownership_type}</small></p>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-xs-12">
                                <div className="rld-single-input">
                                    <label>Building content:</label>
                                    <input
                                        type="text"
                                        name="building_content"
                                        required
                                        value={InvestmentForm.building_content}
                                        onChange={handleInputFields}
                                        placeholder="Type here"
                                    />
                                </div>
                                <p className='text-danger'><small>{formErrors.building_content}</small></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-4 col-xs-12">
                                <div className="rld-single-input">
                                    <label>Facilities & Amenities:</label>
                                    <input
                                        type="text"
                                        name="amenities"
                                        required
                                        value={InvestmentForm.amenities}
                                        onChange={handleInputFields}
                                        placeholder="Type here"
                                    />
                                </div>
                                <p className='text-danger'><small>{formErrors.amenities}</small></p>
                            </div>
                            <div className="col-lg-8 col-sm-8 col-xs-12">
                                <div className="rld-single-input">
                                    <label>Select photos:</label>
                                    <br />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        id="contained-button-file"
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" className="btn btn-yellow" component="span"
                                            style={{
                                                background: "#215c4f",
                                                color: "white",
                                                boxShadow: "none",
                                                borderRadius: "10px",
                                                textTransform: "capitalize"
                                            }}
                                        >
                                            Upload <i className="fa fa-upload ml-1" aria-hidden="true"></i>
                                        </Button>
                                    </label>
                                    {isSelected ? (
                                        <div>
                                            <p>{selectedFile.name}</p>
                                        </div>
                                    ) : ""}
                                    {!isSelected &&
                                        <p className='text-danger'><small>{invalidImage.msg}</small></p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-4 col-xs-12">
                                <div className="rld-single-input">
                                    <label>Location:</label>
                                    <input
                                        type="text"
                                        name="location"
                                        required
                                        value={InvestmentForm.location}
                                        onChange={handleInputFields}
                                        placeholder="Type here"
                                    />
                                </div>
                                <p className='text-danger'><small>{formErrors.location}</small></p>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-xs-12">
                                <div className="rld-single-input">
                                    <label>Plot Area Sq. Ft:</label>
                                    <input
                                        type="text"
                                        name="area"
                                        required
                                        value={InvestmentForm.area}
                                        onChange={handleInputFields}
                                        placeholder="Type here"
                                    />
                                </div>
                                <p className='text-danger'><small>{formErrors.area}</small></p>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-xs-12">
                                <div className="rld-single-input">
                                    <label>Parking:</label>
                                    <input
                                        type="text"
                                        name="parking"
                                        required
                                        value={InvestmentForm.parking}
                                        onChange={handleInputFields}
                                        placeholder="Type here"
                                    />
                                </div>
                                <p className='text-danger'><small>{formErrors.parking}</small></p>
                            </div>
                        </div>
                    </form>
                </div>
                <div style={{ textAlign: "center" }}>
                    {
                        Object.keys(formErrors).length === 0 && isSubmit ?
                            <Alert variant="success" show={show} onClose={() => {
                                setShow(false);
                                setIsSubmit(false);
                                setInvestmentForm({ ...initialObject });
                            }
                            } dismissible>
                                Your Investment has been added
                            </Alert>
                            :
                            <button type="button" className="btn btn-yellow investment_fom_btn" onClick={handleSubmit}>
                                Submit
                            </button>
                    }

                </div>

            </div>
        </div>
    )
}

export default InvestmentForm;

