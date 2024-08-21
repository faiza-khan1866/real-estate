import React from "react";

let publicUrl = process.env.PUBLIC_URL

const Vision = (props) => (
    <div className="Vision pd-top-30 pd-bottom-20 ">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-1 col-xs-12"></div>
                <div className="col-sm-7 col-lg-7 col-xs-12">
                    <div className="section-title pd-right-35">
                        <h2 className="title">
                            {props?.manager?.title}
                            {/* SAMI ABUKESHEK */}
                        </h2>
                        <h5 className="sub-title">
                            {props?.manager?.subtitle}
                            {/* GENERAL MANAGER - MAKEEN PROPERTIES */}
                        </h5>
                        <div className="sub-content">
                            <img className="quote-img" src={publicUrl + "/assets/img/icon-img/quotes.png"} alt="icon" />
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: props?.manager?.content
                                }}
                            >
                                {/* “Makeen’s vision to inject value into our offering by combining market-related prices with convenience, customer care, and innovative service-delivery is not just good business practice, it has been rewarded with unprecedented long-term occupations.” */}
                            </p>
                            {/* <a className="btn btn-yellow" href={ data.url } >{ data.btn_text }</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-sm-5 col-lg-3 col-xs-12">
                    <div className="sami_img">
                        <img src={props?.manager?.featured_image} />
                    </div>
                </div>
                <div className="col-sm-12 col-lg-1 col-xs-12"></div>
            </div>
        </div>
        {/* <div className="visionDiv">
        </div> */}
    </div>
);

export default Vision;
