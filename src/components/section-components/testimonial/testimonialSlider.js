import React from "react";
import ReactStars from "react-rating-stars-component";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Testimonial.scss";

const TestimonialSlider = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <div className="testimonial-carousel">
      <h3 className={"BlogTitle"}>
        {props?.intro?.title}
        {/* Testimonials */}
      </h3>
      <p className={"subtitle"}>
        {props?.intro?.subtitle}
        {/* Find answers for your queries here. You can also browse the topics below to find what you are looking for */}
      </p>
      <Carousel
        responsive={responsive}
        dynamicHeight={false}
        arrows={true}
        showDots={true}
        swipeable={false}
        draggable={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={700}
        containerClass="carousel-container"
        // focusOnSelect={true}
      >
        {props.testimonialData
          ?.filter((x) => x.flag === 1)
          ?.map((item, i) => (
            <div className={"carouselmarginBlog"}>
              <div className="card cardstyle">
                <div className="card-body">
                  <div
                    className={
                      "d-flex justify-content-center align-items-center"
                    }
                  >
                    <img src={item.image} className="iconimg" alt="..." />
                  </div>
                  <h2 className="title">{item.name}</h2>
                  <div
                    className={
                      "d-flex justify-content-center align-items-center"
                    }
                  >
                    <p>
                      <ReactStars
                        count={5}
                        // onChange={() => { }}
                        edit={false}
                        size={24}
                        isHalf={true}
                        value={item.rating}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#F8B101"
                        classNames="rating_bar"
                      />
                    </p>
                  </div>
                  <p className="description">{item.comment}</p>
                  <p className="text-secondary">
                    <small>
                      {item.name}
                      {/* <span>{dateFormat(`${item.created_at}`, "mmmm dS yyyy")}</span> */}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;
