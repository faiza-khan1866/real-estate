import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function PopularPost(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="popular-post-area">
        <div className="container">
          <div className="section-title">
            <h3 className="title" style={{ textTransform: "uppercase" }}>
              {props.title}
            </h3>
          </div>
          <div className="post-and-search">
            <h6 className="mb-3 popular-post-title">TOP NEWS</h6>
            <Carousel
              responsive={responsive}
              dynamicHeight={false}
              arrows={false}
              swipeable={true}
              draggable={true}
              ssr={true} // means to render carousel on server-side.
              infinite={false}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={700}
              containerClass="carousel-container"
            >
              {props.newsData.map((item, i) => (
                <div key={i} className="item">
                  <Link
                    to={`/news-inner/${item.slug}`}
                    className="media single-popular-post"
                  >
                    <div className="media-left">
                      <img src={item.featured_image} alt={"news image"} />
                    </div>
                    <div className="media-body">
                      <h6>{item.title}</h6>
                      {/* <span style={{ color: "rgba(66, 66, 66, 0.5)" }}>
                        {dateFormat(`${item.created_at}`, "mmmm dS yyyy")
                        }
                      </span> */}
                    </div>
                  </Link>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularPost;
