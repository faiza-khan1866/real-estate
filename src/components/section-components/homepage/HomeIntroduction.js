import React, { Component } from "react";
// import makeen from "../../../assets/img/New_Design_Proposal"
class HomeIntroduction extends Component {
  render(props) {
    // let publicUrl = process.env.PUBLIC_URL

    return (
      <div className="homepage-intro">
        {/* <div className="site-logo">
          <img src={publicUrl + "/assets/img/Makeen_Logo.png"}
            alt="makeen logo"
          />
          <h6>A REAL ESTATE OF MIND </h6>
          <p>A Ghobash Group Company</p>
        </div> */}
        {/* <Carousel /> */}
        <div className="site-img">
          <img
            src={this.props.image}
            alt="site image"
            width={430}
            height={175}
          />
        </div>
        <div className="homepage-txt">
          <h4>
            {this.props.title.split(" ")[0]} {this.props.title.split(" ")[1]}{" "}
            {this.props.title.split(" ")[2]} <br />
            {this.props.title.split(" ")[3]} {this.props.title.split(" ")[4]}{" "}
            {this.props.title.split(" ")[5]} {this.props.title.split(" ")[6]}
          </h4>
          <h6>{this.props.subtitle}</h6>
          <p
            className="generalDiv"
            dangerouslySetInnerHTML={{
              __html: this.props.content,
            }}
          ></p>
        </div>
      </div>
    );
  }
}

export default HomeIntroduction;
