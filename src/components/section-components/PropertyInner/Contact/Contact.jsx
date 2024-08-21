import React from "react";
import "./Contact.scss";

const Contact = () => {
  const scrollToBottom = () => {
    const bottomEle = document.getElementById("cardID");
    bottomEle.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="contact">
      <div className="enquireDiv">
        <div
          className={
            "d-flex justify-content-between align-items-center container enquireDivMBL"
          }
        >
          <div>
            <h3 className={"Title"}>Reach out to us</h3>
            <p className={"subtitle"}>
              Contact us to know more about this property
            </p>
          </div>
          <button className={"enquirebtn"} onClick={scrollToBottom}>
            Enquire now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
