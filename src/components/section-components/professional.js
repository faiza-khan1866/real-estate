import React, { useState } from 'react';


function Professional(props) {

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return <div className="Professisonal-area pd-bottom-35 pd-top-35">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-1 order-lg-12 mb-4 mb-lg-0">
          <div className="shape-image-list-wrap">
            <img className="shadow-img" src={props.data?.thumbnail} alt={"service image"} />
          </div>
        </div>
        <div className="col-lg-5 align-self-center order-lg-1">
          <div className="section-title mb-0"
          >
            <h3 className="title inner-title">
              {props.data.name}</h3>
            {props.data1 === 2 ?
              <p
                dangerouslySetInnerHTML={{
                  __html: props.data.description
                }}
              ></p>
              : <p
                dangerouslySetInnerHTML={{
                  __html: isReadMore ? props.data.description.substr(
                    0,
                    500
                  ) : props.data.description
                }}
              ></p>
            }
            {props.data1 === 2 ?
              <a className="btn btn-yellow" href={"http://www.makeentech.ae"} target={"_blank"} rel="noopener noreferrer">Read More</a>
              :
              <>
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
              </>
            }
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Professional