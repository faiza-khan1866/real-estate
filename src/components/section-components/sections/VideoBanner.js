import React, { Component } from "react";
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import PauseIcon from "@material-ui/icons/Pause";

class VideoBanner extends Component {
  // state = {
  //   isPlaying: false
  // }

  // togglePlay = () => {
  //   const myVideo = document.getElementById("video-id");
  //   // play or pause the video element
  //   if (myVideo.paused) {
  //     myVideo.play();
  //   } else {
  //     myVideo.pause();
  //   }
  //   // update the state
  //   this.setState({ isPlaying: !this.state.isPlaying });
  // }

  componentDidMount() {
    const $ = window.$;

    if ($(".single-select").length) {
      $(".single-select").niceSelect();
    }
  }

  render() {
    // let publicUrl = process.env.PUBLIC_URL;
    const inlineStyle = {
      // backgroundImage: 'url('+publicUrl+'/assets/img/banner/1.jpg)'
    };
    // let makeenVideo = publicUrl + "/assets/video/home_video.mp4";

    return (
      <div className="video-banner banner-area jarallax" style={inlineStyle}>
        <div className="container">
          <div className="banner-inner-wrap">
            <div className="row">
              <div className="col-12">
                <div className="banner-inner">
                  <h3 className="title">
                    {this.props?.videoSec?.title}
                    {/* GREAT STORIES ALWAYS */}
                  </h3>

                  <h4 className="title2">
                    {this.props?.videoSec?.subtitle}
                    {/* START WITH HUMBLE BEGINNINGS */}
                  </h4>
                  <p
                    className="sub-title"
                    dangerouslySetInnerHTML={{
                      __html: this.props?.videoSec?.content,
                    }}
                  >
                    {/* Makeen Properties is a leading, UAE-based property management specialist that oversees the development, leasing, and management of the Ghobash Group’s portfolio of privately owned property. */}
                  </p>
                </div>
              </div>
              <div className="col-12 video_col">
                <div className="site-video">
                  {/* <video > 
                    <source src={publicUrl+"/assets/img/video/home_vodeo_3x.mp4"} type="video/mp4"/>
                    </video> */}
                  <video id={"video-id"} autoPlay="autoplay" loop="loop" muted>
                    <source
                      // src={makeenVideo}
                      src={
                        "https://makeen.b-cdn.net/video/home_vodeo_3x_optimized.mp4"
                      }
                      type="video/mp4"
                    />
                    {/* <source src="movie.ogg" type="video/ogg"/> */}
                  </video>
                  {/* <div className="video-promo-content"
                >
                  <button className="btn About-video-play-icon"
                    // onClick={this.togglePlay}
                  >
                    {this.state.isPlaying ? (
                      <PlayArrowIcon className={"AboutVideoplaySize"} />
                    ) : (
                      <PauseIcon className={"AboutVideoplaySize"} />
                    )}
                  </button>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoBanner;
