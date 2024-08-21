import React from "react";
import VideoBanner from "../sections/VideoBanner";

let publicUrl = process.env.PUBLIC_URL

const inlineStyle = {
  backgroundImage: 'url(' + publicUrl + '/assets/video/home_video.mp4)'
}
const Homepage = (props) => (
  <div className="home-video">
    <div className="home-video2">
      <VideoBanner
        videoSec={props?.videoData}
      />
    </div>
  </div>
);

export default Homepage;
