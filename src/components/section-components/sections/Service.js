import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../../assets/img/icons/GHOBASHGROUP.PNG";
import img2 from "../../../assets/img/icons/Vision.png";
import img3 from "../../../assets/img/icons/DIVERSITY.PNG";
import "./Service.scss";

export default function Service(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const slidesData = [
    {
      Img: img1,
      title: "GHOBASH GROUP",
      subtitle: " GROWTH FROM STRENGTH",
      description:
        "For 40 years, the Ghobash Group has welcomed investors to share in the economic progression of the region by supporting market access through its various investment and operating companies. With regional knowledge of local market conditions and insight into the factors that created them.",
    },
    {
      Img: img2,
      title: "OUR VISION EXTENDS",
      subtitle: " BEYOND THE BOTTOM LINE",
      description:
        "Makeen’s vision to inject value into our offering by combining market-related prices with convenience, customer care, and innovative service-delivery has resulted in unprecedented long term occupation rates due to tenant satisfaction.",
    },
    {
      Img: img3,
      title: "DIVERSITY",
      subtitle: " IT’S EVEN PART OF OUR PERSONALITY",
      description:
        "We are driven by diversity to incorporate the very best people, exploring and cultivating talents from all over the world. We thrive on agility, embrace creative solutions, and apply good ethics to every commitment.",
    },
  ];

  return (
    <div className={"more-about"}>
      <div className={"container"}>
        <h3 className={"BlogTitle"}>Our Values</h3>

        <Carousel
          responsive={responsive}
          dynamicHeight={false}
          arrows={
            responsive.mobile || props.moreAboutData.length > 3 ? true : false
          }
          showDots={responsive.mobile ? true : false}
          swipeable={false}
          draggable={false}
          ssr={true} // means to render carousel on server-side.
          infinite={false}
          autoPlay={props.moreAboutData.length > 3 ? true : false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={700}
          containerClass="carousel-container"
        >
          {props.moreAboutData?.map((slides, index) => (
            <div className={"carouselmarginBlog"}>
              <div className="card cardstyle">
                <div className="card-body">
                  <div
                    className={
                      "d-flex justify-content-center align-items-center"
                    }
                  >
                    {slidesData.filter((x) => x.title === slides.title)[0] ===
                    undefined ? (
                      ""
                    ) : (
                      <img
                        src={
                          slidesData.filter((x) => x.title === slides.title)[0]
                            .Img
                        }
                        className={"iconimg"}
                        alt={"Icon"}
                      />
                    )}
                    {/* <img src={img1} className="iconimg" alt="..." /> */}
                  </div>
                  <h2 className="title">{slides.title}</h2>
                  <p className="subtitle">{slides.sub_title}</p>
                  <p
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: slides.description,
                    }}
                  ></p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
