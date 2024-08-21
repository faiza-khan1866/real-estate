import React, { Component } from "react";

class CareersDataContainer extends Component {
  render() {
    return (
      <div className="investment-data-container pd-top-60 pd-bottom-35 ">
        <div className="container">
          <div>
            <h3 style={{ textTransform: "uppercase" }}>
              {this.props?.intro?.title}
              {/* MAKEEN CAREER OPPORTUNITY */}
            </h3>
            <p>
              {/* {this.props?.intro?.subtitle} */}
              {/* Join Makeen family and be yourself */}
              Whether you are an experienced professional or starting your
              career, you will find an opportunity that you will love with
              Makeen. We offer a dynamic environment and supportive people that
              enable you to be at your best.{" "}
              <a
                href="https://www.linkedin.com/company/makeen-properties/jobs/"
                target="_blank"
                style={{ fontWeight: "600" }}
              >
                Browse our current jobs at Makeen Careers
              </a>{" "}
              and find out which vacancy is suitable for you.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="careers_list_main mg-top-35 mg-bottom-35">
            <div className="row">
              {this.props.careersData?.map((item, index) => (
                <div className="col-lg-4 col-sm-6 col-xs-12" key={index}>
                  <div className="careers_list_box mg-bottom-35">
                    <h4>{item?.designation}</h4>
                    <p
                      className="generalDiv"
                      dangerouslySetInnerHTML={{
                        __html: item?.description,
                      }}
                    ></p>
                    <a
                      href={"#"}
                      className="btn btn-yellow apply_career_btn mg-top-35"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CareersDataContainer;
