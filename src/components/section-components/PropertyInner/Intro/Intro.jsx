import React from 'react';
import "./Intro.scss";

const Intro = (props) => {
    return (
        <div className="Intro container">
            <h3 className={"IntroTitle"}>
                {
                    props.singlePropertyData?.name
                }
            </h3>
            {/* <p className='IntrosubTitle'>
                {props.singlePropertyData?.price}
            </p>
            <p>{props.price} </p> */}

            <p className="IntrosubTitle generalDiv changePFont"
                dangerouslySetInnerHTML={{
                    __html: props.singlePropertyData?.long_description
                }}
            >
                {/* The central location of the fully maintained offices also makes it ideal for visiting clients and customers to see, and the modern layout and facade are attractive. They will undoubtedly add to the status of your company profile. */}
            </p>
        </div>
    );
};

export default Intro;