import React, { Component } from "react";
import quality from "../../../assets/img/icons/QualityRealEstate.png";
import experience from "../../../assets/img/icon-img/experience.png";
import tenants from "../../../assets/img/icons/Delighted_Tenant.png";

class HeaderBanner extends Component {
  render() {
    let isHeaderMiddle = this.props.isHeaderMiddle;
    // console.log('successSection1',this.props.successSection1);
    return (
      <div className="header-banner pd-top-35 pd-bottom-15">
        <div className="container">
          <div className="hb-container">
            <div
              className={`hb-title ${
                isHeaderMiddle ? `text-left` : `text-left`
              }`}
            >
              <h3>
                {this.props?.successSection?.title}
                {/* ONE OF UNITED ARAB EMIRATES' */}
              </h3>
              <h5>
                {this.props?.successSection?.subtitle}
                {/* LEADING REAL ESTATE DEVELOPERS SINCE 1975 */}
              </h5>
            </div>
            <div className="hb-content">
              {/* {detailContent.map((item, id) => ( */}
              <div className="hb-detail">
                <div className="hb-logo">
                  <img src={quality} />
                </div>
                <div className="hb-descp">
                  <h3>
                    {this.props?.successSection1?.title.split(" ")[0]}{" "}
                    {this.props?.successSection1?.title.split(" ")[1]}{" "}
                    <sup>
                      {this.props?.successSection1?.title.split(" ")[2]}
                    </sup>
                  </h3>
                  <h6>{this.props?.successSection1?.subtitle}</h6>
                  {/* {!isHeaderMiddle ? "" : <p style={{ marginTop: "0" }}>At consequat molestie et sed vitae interdum</p>} */}
                </div>
              </div>
              <div className="hb-detail">
                <div className="hb-logo">
                  <img src={experience} />
                </div>
                <div className="hb-descp">
                  <h3>{this.props?.successSection2?.title}</h3>
                  <h6>{this.props?.successSection2?.subtitle}</h6>
                  {/* {!isHeaderMiddle ? "" : <p style={{ marginTop: "0" }}>At consequat molestie et sed vitae interdum</p>} */}
                </div>
              </div>
              <div className="hb-detail">
                <div className="hb-logo">
                  <img src={tenants} />
                </div>
                <div className="hb-descp">
                  <h3>{this.props?.successSection3?.title}</h3>
                  <h6>{this.props?.successSection3?.subtitle}</h6>
                  {/* {!isHeaderMiddle ? "" : <p style={{ marginTop: "0" }}>At consequat molestie et sed vitae interdum</p>} */}
                </div>
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBanner;
