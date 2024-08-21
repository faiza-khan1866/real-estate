import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { API } from "../../../http/API";
import { Alert } from "react-bootstrap";
import "./Testimonial.scss";

// const newRating = "4"
const initialObject = {
  rating: "",
  comment: "",
  name: "",
  phone: "",
  image: "image",
  flag: false,
  // saveDetails: false
};

function TestimonialReviewForm({}) {
  const [TestimonialReviewForm, setTestimonialReviewForm] =
    useState(initialObject);
  const [newRating, setNewRating] = useState("4");
  const [show, setShow] = useState(true);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputFields = (e) => {
    let rating = newRating;
    let updateValue = { ...TestimonialReviewForm, rating };
    updateValue[e.target.name] = e.target.value;
    setTestimonialReviewForm(updateValue);
    // console.log("Update values", updateValue);
  };
  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(registrationForm);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    if (!values.comment) {
      errors.comment = "Comment is required!";
    }
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required!";
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(TestimonialReviewForm));
    setIsSubmit(true);
    let updatedData = { ...TestimonialReviewForm };
    API.post("/review", updatedData)
      .then((response) => {
        // if (response.status === 200 || response.status === 201) {
        //     alert("Your Review has been added");
        //     setTestimonialReviewForm({ ...initialObject });
        //     // history.push("/news/list");
        // }
      })
      .catch((err) => {
        // alert("Something went wrong.");
        console.log(err);
      });
  };

  const ratingChanged = (newRating) => {
    setNewRating(newRating);
  };

  return (
    <div className="testimonial-form pd-top-60 pd-bottom-35 ">
      <div className="investment-form form-border">
        <h4>Write a review</h4>
        <p>Required fields are marked *</p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12 rating_box">
              Rating*
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                value={newRating}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#F8B101"
                classNames="rating_bar_for_form"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="rld-single-input">
                <label>Comment*</label>
                <textarea
                  name="comment"
                  // required
                  value={TestimonialReviewForm.comment}
                  onChange={handleInputFields}
                  placeholder="Type here"
                ></textarea>
              </div>
              <p className="text-danger">
                <small>{formErrors.comment}</small>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="rld-single-input">
                <label>Your Name*</label>
                <input
                  type="text"
                  name="name"
                  // required
                  value={TestimonialReviewForm.name}
                  onChange={handleInputFields}
                  placeholder="Type here"
                />
              </div>
              <p className="text-danger">
                <small>{formErrors.name}</small>
              </p>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="rld-single-input">
                <label>Your Phone*</label>
                <input
                  type="text"
                  name="phone"
                  // required
                  value={TestimonialReviewForm.phone}
                  onChange={handleInputFields}
                  placeholder="Type here"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </div>
              <p className="text-danger">
                <small>{formErrors.phone}</small>
              </p>
            </div>
          </div>
          {/* <div className="row">
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <div className="rld-single-input">
                                <input
                                    type="checkbox"
                                    className="checkbox_email"
                                    name="saveDetails"
                                    required
                                    value={TestimonialReviewForm.saveDetails}
                                    onChange={handleInputFields}
                                />
                                <span className="checkbox_text">Save my name, email, and website in this browser for the next time I comment.</span>
                            </div>
                        </div>
                    </div> */}
          <div className="row pd-top-35">
            <div
              className="col-lg-12 col-sm-12 col-xs-12"
              style={{ textAlign: "center" }}
            >
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <Alert
                  variant="success"
                  show={show}
                  onClose={() => {
                    setShow(false);
                    setIsSubmit(false);
                    setTestimonialReviewForm({ ...initialObject });
                  }}
                  dismissible
                >
                  Review Submitted Successfully
                </Alert>
              ) : (
                <button className="btn btn-yellow investment_fom_btn">
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TestimonialReviewForm;
