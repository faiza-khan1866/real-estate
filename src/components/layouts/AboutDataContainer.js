import React from "react";

const AboutDataContainer = (props) => (
    <div className="About-data-container pd-top-30 pd-bottom-20 ">
        <div className="container">
            <div>
                <h2>
                    {props?.intro?.title}
                </h2>
                <p
                    dangerouslySetInnerHTML={{
                        __html: props?.intro?.content
                    }}
                >
                </p>
            </div>
        </div>
    </div>
);

export default AboutDataContainer;
