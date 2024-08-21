import React from "react";
import whatsappgif from "../../../assets/img/icon-img/whatsapp1.webp";
import "./WhatsappFixesIcon.scss";

const WhatsappFixedIcon = () => {
  return (
    <>
      <div className="floating_icon_wrape">
        <a
          href="https://wa.me/+971800625336"
          className="contact-pannel-btn text-decoration-none"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <figure>
            <img src={whatsappgif} loading="lazy" alt="whatsapp" />
          </figure>
        </a>
      </div>
    </>
  );
};

export default WhatsappFixedIcon;
