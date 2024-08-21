import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactMapInfo extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL
        return (
            <div className="contact-map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.508737540203!2d55.34097901448554!3d25.253466335613624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dc695eb81d5%3A0xde2cc8818e15f762!2sMakeen%20Properties%20LLC!5e0!3m2!1sen!2s!4v1637495768339!5m2!1sen!2s" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
                {/* <img src={"" + publicUrl + "assets/img/gallery/google_map_img.png"} /> */}
            </div>
        )
    }
}

export default ContactMapInfo;

