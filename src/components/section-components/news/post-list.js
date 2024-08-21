import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

function PostList(props) {

  return (
    <div>
      <div className="property-news-area pd-top-100 pd-bottom-70">
        <div className="container">
          <div className="row">
            {props.newsData.map((item, i) =>
            
              <div key={i} className="col-lg-6">
                <div className="single-news">
                  <Link to={`/news-inner/${item.slug}`}>
                    <div className="thumb">
                      <img src={item.featured_image} alt={"news image"} />
                    </div>
                  </Link>
                  <div className="details">
                    <h4><Link to={`/news-inner/${item.slug}`}  >{item.title}</Link></h4>
                    <p
                      className='setpheight'
                      dangerouslySetInnerHTML={{
                        __html: item.short_description.substr(0, 100)
                      }}
                    ></p>
                    <button
                      style={{
                        border: "0",
                        background: "transparent",
                        marginLeft: "0",
                        padding: "0",
                        marginTop: "0",
                        marginBottom: "1rem",
                        borderBottom: "1px solid black"
                      }}
                    >
                      <Link to={`/news-inner/${item.slug}`}>{"Read More >"}</Link>
                    </button>
                    <div className="author">
                      {/* <span className="date" style={{ color: "rgba(66, 66, 66, 0.5)" }}>
                        {dateFormat(`${item.created_at}`, "mmmm dS yyyy")
                        }
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div >
    </div >
  )
}

export default PostList;
