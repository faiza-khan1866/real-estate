import React, { useEffect, useState } from 'react';
import { API } from "../../../http/API";
import { Alert } from "react-bootstrap"


function ContactForm() {
    const defaultState = {
        mk_name: '',
        mk_phone: '',
        mk_email: "",
        mk_property_category: "",
        mk_property_type: "property",
        is_pushed: 0,
        mk_message: "",
        mk_flag: "contact_form"
    };
    const [show, setShow] = useState(true);
    const [formValues, setFormValues] = useState(defaultState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const publicUrl = process.env.PUBLIC_URL + '/'

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        let data = { ...formValues }
        data.CRM_id = '97f23fe6-3f98-eb11-b820-00155d048ec6'
        API.post("/contact_form", data)
            .then((response) => {
                // if (Object.keys(formErrors).length === 0 && isSubmit) {
                //     // alert("Submitted successfully");
                //     setFormValues({ ...defaultState });
                // }
                // if (response.status === 200 || response.status === 201) {
                //     // alert("Submitted successfully");
                //     setFormValues({ ...defaultState });
                //     // setShow(false);
                //     // history.push("/news/list");
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
            // console.log(formValues);
        }

    }, [formErrors])

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
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

    return (
        <div className="investment-form-con pd-bottom-60 ">
            {/* <pre>
                {JSON.stringify(formValues, undefined, 2)}
            </pre> */}

            <div className="contact_form_background" style={{ background: "url(" + publicUrl + "assets/img/bg-img/residential-nav.jpg)" }}>
                <div className="contact_form_background_overlay">
                    <div className="container">
                        <div className="investment-form form-border">
                            <h3>Send us a message</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <div className="rld-single-input">
                                            <label>Your Name</label>
                                            <input
                                                type="text"
                                                name="mk_name"
                                                // required
                                                value={formValues.mk_name}
                                                onChange={handleChange}
                                                placeholder="Type here"
                                                className='inputColor'
                                            />
                                        </div>
                                        <p className='text-danger'><small>{formErrors.mk_name}</small></p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <div className="rld-single-input">
                                            <label>Your Phone</label>
                                            <input
                                                type="text"
                                                name="mk_phone"
                                                // required
                                                value={formValues.mk_phone}
                                                onChange={handleChange}
                                                onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                        event.preventDefault();
                                                    }
                                                }}
                                                placeholder="Type here"
                                                className='inputColor'
                                            />
                                        </div>
                                        <p className='text-danger'><small>{formErrors.mk_phone}</small></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <div className="rld-single-input">
                                            <label>Your Email</label>
                                            <input
                                                type="email"
                                                name="mk_email"
                                                // required
                                                value={formValues.mk_email}
                                                className="inputColor"
                                                onChange={handleChange}
                                                placeholder="Type here" />
                                        </div>
                                        <p className='text-danger'><small>{formErrors.mk_email}</small></p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <div className="rld-single-input">
                                            <label>Property category</label>
                                            <select onChange={handleChange} value={formValues.mk_property_category} name={"mk_property_category"}>
                                                <option value="">Select Property Category...</option>
                                                <option value="residential">Residential</option>
                                                <option value="commercial">Commercial</option>
                                                <option value="industrial">Industrial</option>
                                            </select>
                                        </div>
                                        <p className='text-danger'><small>{formErrors.mk_property_category}</small></p>
                                    </div>
                                </div>
                                {/* <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <div className="rld-single-input">
                                            <label>Property category</label>
                                            <select onChange={handleChange} value={formValues.mk_property_category} name={"mk_property_category"}>
                                                <option value="">Select Property Category....</option>
                                                <option value="residential">Residential</option>
                                                <option value="commercial">Commercial</option>
                                                <option value="industrial">Industrial</option>
                                            </select>
                                        </div>
                                        <p className='text-danger'><small>{formErrors.mk_property_category}</small></p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-xs-12">

                                    </div>
                                </div> */}
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12 col-xs-12">
                                        <div className="rld-single-input">
                                            <label>Your message</label>
                                            <textarea
                                                name="mk_message"
                                                // required
                                                value={formValues.mk_message}
                                                onChange={handleChange}
                                                className="inputColor"
                                                placeholder="Type here">

                                            </textarea>
                                        </div>
                                        <p className='text-danger'><small>{formErrors.mk_message}</small></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12 col-xs-12" style={{ textAlign: "center" }}>
                                        {
                                            Object.keys(formErrors).length === 0 && isSubmit ?
                                                <Alert variant="success" show={show} onClose={() => {
                                                    setShow(false);
                                                    setIsSubmit(false);
                                                    setFormValues({ ...defaultState });
                                                }
                                                } dismissible>
                                                    Data Submitted Successfully
                                                </Alert>
                                                :
                                                <button className="btn btn-yellow investment_fom_btn">Submit</button>

                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;