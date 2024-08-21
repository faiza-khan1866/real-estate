import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Pannellum } from "pannellum-react";
import "./Gallery360deg.scss";

const Gallery360deg = (props) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const next = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const prev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="gallery360deg container" id={"video360Slider"}>
      {props?.singleProperty?.images_360?.length === 0 ? (
        ""
      ) : (
        <h2 className={"Title"}>360° gallery</h2>
      )}
      {props?.singleProperty?.images_360?.length === 0 ? (
        ""
      ) : (
        <>
          <Carousel
            showThumbs={false}
            autoPlay={false}
            dynamicHeight={false}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            infiniteLoop={false}
            stopOnHover={false}
            centerSlidePercentage={70}
            selectedItem={currentIndex}
            className={"carousel carouselMBLStyle"}
            onChange={(index) => setCurrentIndex(index)}
            interval={6000}
          >
            {props?.singleProperty?.images_360?.map((slides, index) => (
              <Pannellum
                key={index}
                width="100%"
                height="500px"
                image={slides}
                // image={"https://makeen.b-cdn.net/video/360gallery1.jpg"}
                pitch={0}
                yaw={180}
                hfov={110}
                autoLoad
                onLoad={() => {
                  console.log("360 Image Loaded");
                }}
              ></Pannellum>
            ))}
          </Carousel>
          <div className="d-flex justify-content-end align-items-center arrowDiv">
            <button type="button" onClick={prev} className={"CarouselArrow"}>
              <ChevronLeftIcon className={"carouselArrowsize"} />
            </button>
            <button
              type="button"
              onClick={next}
              className={"CarouselArrow ml-4"}
            >
              <ChevronRightIcon className={"carouselArrowsize"} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery360deg;

// import React from 'react';
// import gallery1 from "../../../../assets/img/360/360gallery1.JPG"
// import gallery2 from "../../../../assets/img/360/360gallery2.JPG"
// import gallery3 from "../../../../assets/img/360/360gallery3.JPG"
// import gallery4 from "../../../../assets/img/360/360gallery4.JPG"
// import gallery5 from "../../../../assets/img/360/360gallery5.JPG"
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// // import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// // import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import { Pannellum } from "pannellum-react";

// const Gallery360deg = (props) => {
//     // const [currentIndex, setCurrentIndex] = React.useState(0);
//     // const next = () => {
//     //     setCurrentIndex(currentIndex + 1);
//     // };

//     // const prev = () => {
//     //     setCurrentIndex(currentIndex - 1);
//     // };
//     const responsive = {
//         superLargeDesktop: {
//             // the naming can be any, depends on you.
//             breakpoint: { max: 4000, min: 3000 },
//             items: 1
//         },
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 1
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 1
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1
//         }
//     };
//     const slidesData = [
//         {
//             thumbnail: gallery1,
//         },
//         {
//             thumbnail: gallery2,
//         },
//         {
//             thumbnail: gallery3,
//         },
//         {
//             thumbnail: gallery4,
//         },
//         {
//             thumbnail: gallery5,
//         },
//     ];
//     return (
//         <div className="gallery360deg container" id={"video360Slider"}>
//             {props?.singleProperty?.images_360?.length === 0 ? "" :
//                 <h2 className={"Title"}>
//                     360° gallery
//                 </h2>
//             }
//             {
//                 console.log("360images", props?.singleProperty?.images_360?.map((x, i) => x))
//             }
//             {props?.singleProperty?.images_360?.length === 0 ? "" :
//                 <Carousel
//                     responsive={responsive}
//                     swipeable={true}
//                     showDots={false}
//                     arrows={true}
//                     ssr={true} // means to render carousel on server-side.
//                     infinite={true}
//                     draggable={true}
//                     autoPlay={true}
//                     autoPlaySpeed={3000}
//                     keyBoardControl={true}
//                     customTransition="all .5s"
//                     transitionDuration={500}
//                     containerClass="carousel-container"
//                     dotListClass="custom-dot-list-style"
//                     itemClass="listStyle"
//                 >
//                     {props?.singleProperty?.images_360?.map((slides, index) => (
//                         <div className="item">
//                             <Pannellum
//                                 key={index}
//                                 width="100%"
//                                 height="500px"
//                                 image={slides}
//                                 // image={"https://makeen.b-cdn.net/video/360gallery1.jpg"}
//                                 pitch={0}
//                                 yaw={180}
//                                 hfov={110}
//                                 autoLoad
//                                 onLoad={() => {
//                                     console.log("360 Image Loaded");
//                                 }}
//                             >
//                             </Pannellum>
//                         </div>
//                     ))
//                     }
//                 </Carousel>
//             }
//             {/* <div className="d-flex justify-content-end align-items-center arrowDiv">
//                 <button type="button" onClick={prev} className={"CarouselArrow"}>
//                     <ArrowBackIosIcon className={"carouselArrowsize"} />
//                 </button>
//                 <button type="button" onClick={next} className={"CarouselArrow ml-4"}>
//                     <ArrowForwardIosIcon className={"carouselArrowsize"} />
//                 </button>
//             </div> */}

//         </div>
//     );
// };

// export default Gallery360deg;
