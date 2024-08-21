import React, { useState } from 'react';

function SellHome(props) {

  let publicUrl = process.env.PUBLIC_URL
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return <div className="sell-home-area rld-1-3-bg pd-top-60 pd-bottom-60" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/bg/6.png)' }}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="shape-image-list-wrap">
            <img className="shadow-img" src={props.data?.thumbnail} alt={"service image"} />
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="section-title pd-left mb-0"
            style={{ maxWidth: "555px" }}
          >
            <h3 className="title inner-title">
              {/* <img src={publicUrl + "/assets/img/icon-img/experience.png"} alt={"icon"} /> */}
              {props.data.name}
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: isReadMore ? props?.data?.description.substr(
                  0,
                  500
                ) : props.data.description
              }}
            ></p>
            {
              props.data.description.length > 500 &&
              <div onClick={toggleReadMore}>
                {isReadMore ?
                  <button className="btn btn-yellow" href={"#"}>Read More</button>
                  :
                  <button className="btn btn-yellow" href={"#"}>Show Less</button>
                }
              </div>
            }

          </div>
        </div>
      </div>
    </div>
  </div>

}

export default SellHome