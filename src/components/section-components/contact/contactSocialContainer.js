import React, { Component } from 'react';
import { FaTiktok, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp, BsYoutube } from "react-icons/bs";




class ContactSocialContainer extends Component {
    render() {
        return (
            <div className="investment-data-container contact_social_main pd-bottom-35 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-4 col-xs-12">
                            <div className="contact_with">
                                <h3>Connect with Us</h3>
                            </div>
                        </div>
                        <div className="col-lg-9 col-sm-8 col-xs-12">
                            <div className="contact_social_icon_list">
                                <ul>
                                    <li><a href="https://www.facebook.com/makeenUAE" target={"_blank"}><FaFacebookF size={45} className="fbColor socialIcon" /></a></li>
                                    <li><a href="https://www.instagram.com/makeen_properties/" target={"_blank"}><AiOutlineInstagram size={45} className="instaColor socialIcon" /></a></li>
                                    <li><a href="https://www.linkedin.com/company/makeen-properties/" target={"_blank"}><FaLinkedinIn size={45} className="linkedInColor socialIcon" /></a></li>
                                    <li><a href="https://twitter.com/MakeenUAE" target={"_blank"}><FiTwitter size={45} className='socialIcon twitterColor ' /></a></li>
                                    <li><a href="https://www.youtube.com/channel/UC5DHaH5aCRT2BPbvjJa29gw" target={"_blank"}><BsYoutube size={45} className="youtubeColor socialIcon" /></a></li>
                                    <li><a href="https://www.tiktok.com/@makeenuae" target={"_blank"}><FaTiktok size={45} className='socialIcon tiktokColor' /></a></li>
                                    <li><a href="https://wa.me/+971800625336" target={"_blank"}><BsWhatsapp size={45} className='whatsappColor socialIcon' /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactSocialContainer;

