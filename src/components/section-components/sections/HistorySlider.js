import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import { API } from "../../../http/API";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./historySlider.scss";
let publicUrl = process.env.PUBLIC_URL;

// function ValueLabelComponent(props) {
//   const { children, open, value } = props;

//   const [buildingData, setBuildingData] = useState([]);

//   const getAllBuildings = () => {
//     // debugger;
//     API.get('/more-about').then(response => {
//       const allBuildings = response.data?.data.filter(x => x.about_type === "quality_investment");
//       // console.log("buildingresponse", response.data?.data?.filter(
//       //     (x) => x.category_type === "Industrial"
//       // ))
//       setBuildingData(allBuildings);
//     })
//       .catch(err => {
//         console.log(err)
//       })
//   }

//   useEffect(() => {
//     getAllBuildings();
//   }, []);

//   return (
//     <>
//       {
//         buildingData?.map((slides, index) => (
//           <Tooltip className="tooltip-slider" arrow open={open} enterTouchDelay={0} placement="bottom" title={
//             (
//               < div className="tooltip-slider-content">
//                 <div className="single-feature">
//                   <div className="thumb">
//                     <img src={slides.featured_img} alt='image' />
//                   </div>
//                   <div className="details text-center">
//                     <h6 className="title readeal-top">
//                       {slides.title}
//                     </h6>
//                     <h6 className="location">
//                       {slides.sub_title}
//                       {/* 1988 Al Khaleej building, Karama - Dubai */}
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//             )
//           }
//           >
//             {children}
//           </Tooltip >
//         ))
//       }
//     </>
//   );
// }

// const title = () => { return (`scvbgnh`) }

export default function HistorySlider(props) {
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
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  // const marks = [
  //   {
  //     value: 0,
  //     label: 1988,
  //   },
  //   {
  //     value: 33.33,
  //     label: 2000,
  //   },
  //   {
  //     value: 66.66,
  //     label: 2010,
  //   },
  //   {
  //     value: 99.99,
  //     label: 2022,
  //   },
  // ];

  return (
    <div className="history-carousel">
      <div className="container">
        <Typography id="discrete-slider" gutterBottom>
          <div className="section-title pd-left mb-0">
            <h2 className="title">A HISTORY OF QUALITY INVESTMENT</h2>
            {/* <h5 className="sub-title"> QUALITY INVESTMENT</h5> */}
            <div className="sub-content">
              <p>
                Makeen Properties is a leading, UAE-based property management
                specialist that oversees the development, leasing, and
                management of the Ghobash Group’s portfolio of privately owned
                property for almost 4 decades.
              </p>
            </div>
          </div>
        </Typography>
        <Carousel
          responsive={responsive}
          dynamicHeight={false}
          arrows={true}
          showDots={true}
          swipeable={false}
          draggable={false}
          ssr={true} // means to render carousel on server-side.
          // infinite={true}
          autoPlay={false}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={700}
          containerClass="carousel-container"
          // partialVisible={true}
        >
          {props.historyData?.map((slides, index) => (
            <div className="tooltip-slider-content divstyle" key={index}>
              <div className="single-feature">
                <div className="thumb">
                  <img src={slides.featured_img} alt="image" />
                </div>
                <div className="details text-center historySliderImg">
                  <h6 className="title readeal-top">{slides.title}</h6>
                  <h6 className="location">
                    {slides.sub_title}
                    {/* 1988 Al Khaleej building, Karama - Dubai */}
                  </h6>
                  <h6 className="location">
                    {slides.city}
                    {/* 1988 Al Khaleej building, Karama - Dubai */}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        {/* <Slider
          defaultValue={0}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="on"
          step={33.33}
          ValueLabelComponent={ValueLabelComponent}
          marks={marks}
          min={0}
          max={100}
        /> */}
      </div>
    </div>
  );
}

// const sliderPopup = (
//   <div className="tooltip-slider-content">
//     <div className="single-feature">
//       <div className="thumb">
//         <img src={historySlider} alt='image' />
//       </div>
//       <div className="details text-center">
//         <h6 className="title readeal-top">1988</h6>
//         <h6 className="location">1988 Al Khaleej building, Karama - Dubai</h6>
//       </div>
//     </div>
//   </div>
// )
