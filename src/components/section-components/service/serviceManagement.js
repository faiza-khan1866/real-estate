import React, { Component } from 'react';
import icon from "../../../assets/img/icon-img/quality.png"

// let publicUrl = process.env.PUBLIC_URL;

function ServiceManagment(props) {

    // class ServiceManagment extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         detailsContent: {
    //             title: "SERVICE",
    //             items: [
    //                 {
    //                     id: 1,
    //                     icon: publicUrl + "/assets/img/icon-img/quality.png",
    //                     title: "Facilities Management ",
    //                     descrption: "We serve you from day-to-day building maintenance to management of all aspects for property operations.",
    //                 },
    //                 {
    //                     id: 2,
    //                     icon: publicUrl + "/assets/img/icon-img/experience.png",
    //                     title: "Property Management",
    //                     descrption: "We offer a full scope of management services for an all-in-house experience.",
    //                 },
    //                 {
    //                     id: 3,
    //                     icon: publicUrl + "/assets/img/icon-img/tenants.png",
    //                     title: "Property Leasing",
    //                     descrption: "Makeen Properties oversees the development and leasing of the Ghobash Group’s portfolio of privately owned property.",
    //                 }
    //             ]
    //         },
    //     }
    // }
    // render() {
    return (
        <div className="service-area service-area-managment pd-0" >
            <div className="container">
                <div className="section-title">
                    <h3 className="title" style={{ textTransform: "uppercase" }}>{props.title}</h3>
                </div>
                <div className="service-managment-box row pd-0">
                    {props.serviceData.map((item, i) =>
                        <div key={i} className="col-lg-4 managment-box">
                            <div className="single-intro text-center">
                                <div className="manage_thumb">
                                    <img src={icon} alt="icon" />
                                    <h4 className="title text-center">{item.name}</h4>
                                </div>
                                <div className="details">
                                    <p className="text-left generalDiv"
                                        dangerouslySetInnerHTML={{
                                            __html: item.excerpt
                                        }}
                                    ></p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
// }

export default ServiceManagment