import React, { Component } from 'react';
import quality from "../../../assets/img/icons/servicesmall1.png"
import experience from "../../../assets/img/icons/servicesmall2.png"
import tenants from "../../../assets/img/icons/servicesmall3.png"

class ServiceSmall extends Component {

  componentDidMount() {
    let publicUrl = process.env.PUBLIC_URL
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);
  }
  render() {

    let publicUrl = process.env.PUBLIC_URL;
    let detailsContent = {
      title: "Today, it gives us great pride to promise greater value for our customers.",
      items: [
        {
          id: 1,
          icon: quality,
          descrption: "Our extensive expertise covers real estate development and brokerage services"
        },
        {
          id: 2,
          icon: experience,
          descrption: "Our customer-care surpasses our competitors at every touch-point"
        },
        {
          id: 3,
          icon: tenants,
          descrption: "We extend our service through industry-leading facility maintenance"
        }
      ]
    };

    return <div className="service-area-small service-area-small-about pb-xl-5 pd-0" >
      <div className="container">
        <div className="section-title about_section-title">
          <h2 className="title ">{detailsContent.title}</h2>
        </div>
        <div className="service-slider-2 service-slider-about row pb-xl-5 pd-0 d-none d-sm-block">
          {detailsContent.items.map((item, i) =>
            <div key={i} className="item">
              <div className="single-intro">
                <div className="thumb  text-right">
                  <img src={item.icon} alt="icon" />
                </div>
                <div className="details">
                  <p className="text-left">{item.descrption}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="service-slider-2 row pb-xl-5 pd-0 d-block d-sm-none">
          {detailsContent.items.map((item, i) =>
            <div key={i} className="col-12">
              <div className="single-intro">
                <div className="thumb  text-right">
                  <img src={item.icon} alt="icon" />
                </div>
                <div className="details">
                  <p className="text-left">{item.descrption}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  }
}

export default ServiceSmall