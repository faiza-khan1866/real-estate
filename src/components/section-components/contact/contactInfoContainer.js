import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactInfoContainer extends Component {
    render() {
        return (
            <div className="investment-data-container pd-top-60 pd-bottom-35 ">
                <div className="container">
                    <div>
                        <h3 className={"contact_title"}>
                            {this.props?.contact?.title}
                            {/* Contact Us */}
                        </h3>
                    </div>
                    <div className="row pd-top-35">
                        <div className="col-xl-4 col-sm-4">
                            {/* <div className="single-contact-info">
                                <a href={`tel:${this.props?.contact1?.t_numb}`} className={"text-decoration-none"}>{this.props?.contact1?.t_numb}</a>
                                <a href={`tel:${this.props?.contact1?.phone}`}><i className="fa fa-phone" aria-hidden="true"></i>
                                    {this.props?.contact1?.phone}
                                </a>
                            </div> */}
                            <div className="single-address-info">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                <p>
                                    <a href={"https://www.google.com/maps/place/Makeen+Properties+LLC/@25.2534615,55.340979,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f5dc695eb81d5:0xde2cc8818e15f762!8m2!3d25.2534615!4d55.3431677?hl=en-AE"} className={"text-decoration-none"} target={"_blank"}>{this.props?.contact1?.address}</a> <br />
                                    <a href={`tel:${this.props?.contact1?.t_numb}`} className={"text-decoration-none"}>
                                        <i className="fa fa-phone iconSize" aria-hidden="true"></i>
                                        {this.props?.contact1?.t_numb}</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-4">
                            {/* <div className="single-contact-info">
                                <a href={`tel:${this.props?.contact2?.t_numb}`} className={"text-decoration-none"}>{this.props?.contact2?.t_numb}</a>
                                 <a href={`https://api.whatsapp.com/send/?phone=${this.props?.contact2?.phone}&text&app_absent=0`} target={"_blank"}><i className="fa fa-whatsapp" aria-hidden="true"></i>
                                    {this.props?.contact2?.phone}
                                </a>
                            </div> */}
                            <div className="single-address-info">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                <p>
                                    <a href={"https://www.google.com/maps/place/Makeen+Tower+-+9th+St+-+Al+Zahiyah+-+E16+-+Abu+Dhabi/@24.4944243,54.378139,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5e665064045f6f:0x30bf06a2f771f4ed!8m2!3d24.4944243!4d54.3803277?hl=en-AE"} className={"text-decoration-none"} target={"_blank"}>{this.props?.contact2?.address} </a><br />
                                    <a href={`tel:${this.props?.contact2?.t_numb}`} className={"text-decoration-none"}>
                                        <i className="fa fa-phone iconSize" aria-hidden="true"></i>
                                        {this.props?.contact2?.t_numb}</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-4">
                            {/* <div className="single-contact-info">
                                <a href={`tel:${this.props?.contact3?.t_numb}`} className={"text-decoration-none"}> {this.props?.contact3?.t_numb} </a>
                                <a href={`mailto:${this.props?.contact3?.email}`}><i className="fa fa-envelope" aria-hidden="true"></i>
                                    {this.props?.contact3?.email}
                                </a> 
                            </div> */}
                            <div className="single-address-info">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                <p>
                                    <a href={"https://www.google.com/maps?q=Makeen+Properties+LLC+-+Al+Manama+-+Ras+Al+Khaimah+Rd+-+Al+Seer+-+Ras+Al-Khaimah+-+United+Arab+Emirates&ftid=0x3ef671bd3c40bba1:0xdd7af9817413d8f3&hl=en-AE&gl=ae&entry=gps&lucs=s2se,a1&shorturl=1"} className={"text-decoration-none"} target={"_blank"}>{this.props?.contact3?.address} </a><br />
                                    <a href={`tel:${this.props?.contact3?.t_numb}`} className={"text-decoration-none"}>
                                        <i className="fa fa-phone iconSize" aria-hidden="true"></i>
                                        {this.props?.contact3?.t_numb} </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-12 col-sm-12">
                            <a href={`tel:${this.props?.contact1?.phone}`}><i className="fa fa-phone" aria-hidden="true"></i>
                                {this.props?.contact1?.phone}
                            </a><br />
                            <a href={`https://wa.me/${this.props?.contact2?.phone}`} target={"_blank"}><i className="fa fa-whatsapp" aria-hidden="true"></i>
                                {this.props?.contact2?.phone}
                            </a> <br />
                            <a href={`mailto:${this.props?.contact3?.email}`}><i className="fa fa-envelope" aria-hidden="true"></i>
                                {this.props?.contact3?.email}
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default ContactInfoContainer;

