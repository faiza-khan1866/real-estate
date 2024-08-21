import React, { Component } from 'react';

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // newRating: "4",
    }
  }
  render() {

    let publicUrl = process.env.PUBLIC_URL
    const inlineStyle = {
      backgroundImage: 'url(' + publicUrl + this.props.background + ')'
    }
    return (
      <div className="page-header jarallax" style={inlineStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-inner" >
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageHeader