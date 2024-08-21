import React from 'react';


function FaqsInfoContainer(props) {
    return (
        <div className="accordion" id="accordion">
            {/* {
                console.log("faqData", props)
            } */}
            {/* single accordion */}
            {props?.faqData?.map((item, i) =>
                <div key={i} className="single-faqs mg-bottom-35">
                    <h5>{item.questions}</h5>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: item.answers
                        }}
                    ></p>
                </div>
            )}
        </div>
    )
}

export default FaqsInfoContainer;

