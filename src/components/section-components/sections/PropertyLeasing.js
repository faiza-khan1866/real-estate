import React, { Component } from 'react';

class PropertyLeasing extends Component {
  render() {

    return <div className={"client-area "} style={{ background: "rgba(186, 148, 92, 0.096)" }}>
      <div className="container">
        <div className="section-title">
          <h2 className="title" style={{ color: "" }}>
            {this.props.leasingData?.title}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: this.props.leasingData?.content
            }}
          >
            {/* When you experience staying in one of our properties, you’ll understand that there’s more to real estate than offering office space to work, or a place to live.
            We design environments where employees thrive and homes where families share wonderful moments together, taking great care to ensure the value you get with every square meter of property we lease brings you joy. */}
          </p>
        </div>
        <div className="client-review-img">
          <div className="row justify-content-center">
          </div>
        </div>
      </div>
    </div>

  }
}

export default PropertyLeasing