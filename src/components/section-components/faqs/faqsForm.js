import React, { useEffect, useState } from 'react';
// import SearchField from "react-search-field";
import { Form, Col, InputGroup } from "react-bootstrap"
import SearchIcon from '@material-ui/icons/Search';
import { API } from "../../../http/API";
import { Alert } from "react-bootstrap"

function FaqsForm({ handleSearchFilter }) {
    const defaultState = {
        mk_name: '',
        mk_phone: '',
        mk_email: "",
        mk_property_category: "",
        mk_property_type: "property",
        is_pushed: 0,
        mk_message: "",
        mk_flag: "faq_form"
    };
    const [show, setShow] = useState(true);
    const [FaqsForm, setFaqsForm] = useState(defaultState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleInputFields = (e) => {
        setFaqsForm({
            ...FaqsForm,
            [e.target.name]: e.target.value
        })
    }

    // const handleInputFields = (e) => {
    //     let updateValue = { ...FaqsForm };
    //     updateValue[e.target.name] = e.target.value;
    //     setFaqsForm(updateValue);
    //     // console.log("Update values", updateValue);
    // };
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(FaqsForm);
        }

    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        const regex = /\S+@\S+\.\S+/;
        if (!values.mk_name) {
            errors.mk_name = "Name is required!"
        }
        if (!values.mk_phone) {
            errors.mk_phone = "Phone Number is required!"
        }
        if (!values.mk_email) {
            errors.mk_email = "Email is required!"
        } else if (!regex.test(values.mk_email)) {
            errors.mk_email = "Email is not a valid email format!"
        }
        if (!values.mk_property_category) {
            errors.mk_property_category = " Property Category is required!"
        }
        // if (!values.mk_property_type) {
        //     errors.mk_property_type = " Property Type is required!"
        // }
        if (!values.mk_message) {
            errors.mk_message = " Message is required!"
        }
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(FaqsForm));
        setIsSubmit(true);
        let data = { ...FaqsForm }
        data.CRM_id = '97f23fe6-3f98-eb11-b820-00155d048ec6'
        API.post("/contact_form", data)
            .then((response) => {
                if (response.status === 200 || response.status === 201) {
                    // alert("Submitted successfully");
                    setFaqsForm({ ...defaultState });
                    // history.push("/news/list");
                }
            })
            .catch((err) => {
                // alert("Something went wrong.");
                console.log(err);
            });
    }

    // ...... search bar code

    const [name, setName] = useState("")

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setName(value);
        handleSearchFilter(value);
    };

    return (
        <div className="investment-form-con pd-bottom-60 ">
            <div className="search_bar rld-single-input">
                <Form.Row>
                    <Form.Group as={Col}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text className={"border-right-0"}
                                    style={{
                                        background: "#F4F4F4"
                                    }}
                                >
                                    <SearchIcon />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Search here.."
                                value={name}
                                onChange={handleSearchChange}
                                style={{
                                    background: "#F4F4F4",
                                    border: "1px solid #C4C4C4",
                                    borderRadius: "6px",
                                    borderTopLeftRadius: "0",
                                    borderBottomLeftRadius: "0"
                                }}
                                className={"border-left-0"}
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                {/* <SearchField
                    placeholder="Search your question here.."
                    // onChange={onChange}
                    onChange={handleInput("searchFaq")}
                    classNames="test-class"
                /> */}
            </div>
            <div className="contact_directly_form form-border mg-top-25">
                <h6>Can’t find answers? Contact us directly.</h6>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                            <div className="rld-single-input">
                                <label>Your Name*</label>
                                <input
                                    type="text"
                                    name="mk_name"
                                    // required
                                    value={FaqsForm.mk_name}
                                    onChange={handleInputFields}
                                    placeholder="Type here"
                                    className='inputColor'
                                />
                            </div>
                            <p className='text-danger'><small>{formErrors.mk_name}</small></p>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                            <div className="rld-single-input">
                                <label>Phone Number*</label>
                                <input
                                    type="text"
                                    name="mk_phone"
                                    // required
                                    value={FaqsForm.mk_phone}
                                    onChange={handleInputFields}
                                    placeholder="Type here"
                                    className='inputColor'
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                />
                            </div>
                            <p className='text-danger'><small>{formErrors.mk_phone}</small></p>
                        </div>
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <div className="rld-single-input">
                                <label>Email*</label>
                                <input
                                    type="email"
                                    name="mk_email"
                                    // required
                                    value={FaqsForm.mk_email}
                                    onChange={handleInputFields}
                                    placeholder="Type here"
                                    className='inputColor'
                                />
                            </div>
                            <p className='text-danger'><small>{formErrors.mk_email}</small></p>
                        </div>
                        {/* <div className="col-lg-12 col-sm-12 col-xs-12">
                            <div className="rld-single-input">
                                <label>What sort of property are you interested in?</label>
                                <select onChange={handleInputFields} value={FaqsForm.mk_property_type} name={"mk_property_type"}>
                                    <option value="">Select Options....</option>
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="industrial">Industrial</option>
                                </select>
                            </div>
                            <p className='text-danger'><small>{formErrors.mk_property_type}</small></p>
                        </div> */}
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <div className="rld-single-input">
                                <label>Property category</label>
                                <select onChange={handleInputFields} value={FaqsForm.mk_property_category} name={"mk_property_category"}>
                                    <option value="">Select Property Category....</option>
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="industrial">Industrial</option>
                                </select>
                            </div>
                            <p className='text-danger'><small>{formErrors.mk_property_category}</small></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <div className="rld-single-input">
                                <label>Message*</label>
                                <textarea
                                    name="mk_message"
                                    // required
                                    value={FaqsForm.mk_message}
                                    onChange={handleInputFields}
                                    className='inputColor'
                                    placeholder="Type here">

                                </textarea>
                            </div>
                            <p className='text-danger'><small>{formErrors.mk_message}</small></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <div className="rld-single-input" style={{ textAlign: "center" }}>
                                {
                                    Object.keys(formErrors).length === 0 && isSubmit ?
                                        <Alert variant="success" show={show} onClose={() => {
                                            setShow(false);
                                            setIsSubmit(false);
                                            setFaqsForm({ ...defaultState });
                                        }
                                        } dismissible>
                                            Data Submitted Successfully
                                        </Alert>
                                        :
                                        <button className="btn btn-yellow">Send</button>
                                }

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default FaqsForm;

