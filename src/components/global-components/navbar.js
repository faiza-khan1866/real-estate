import React, { Component } from "react";
import { Link } from "react-router-dom";
import EnquireModal from "../enquire-modal/EnquireModal";



class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isOpen: false,
    };

    this.handleIsOpen = this.handleIsOpen.bind(this);
  }

  // close modal
  handleClose = () => {
    this.setState({ show: false });
  };

  //toggle modal
  handleShow = () => {
    this.setState({ show: true });
  };

  handleIsOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  componentDidMount() {
    let publicUrl = process.env.PUBLIC_URL
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL;

    return (
      <div>
        <div className='navbar-area'>
          <nav
            className='navbar navbar-area navbar-expand-lg fixed-top'
            style={{ background: "white" }}>
            <div className='container nav-container'>
              <div className='responsive-mobile-menu'>
                <button
                  className='menu toggle-btn d-block d-lg-none'
                  data-toggle='collapse'
                  data-target='#realdeal_main_menu'
                  aria-expanded='false'
                  aria-label='Toggle navigation'>
                  <span className='icon-left' />
                  <span className='icon-right' />
                </button>
              </div>
              <div className='logo readeal-top'>
                <Link to='/'>
                  <img
                    src={publicUrl + "/assets/img/Makeen_logo_small.png"}
                    alt='logo'
                  />
                </Link>
              </div>
              <div className='nav-right-part nav-right-part-mobile'>
                <Link className='btn btn-orange' to='/add-property'>
                  Enquire
                </Link>
              </div>
              <div className='collapse navbar-collapse' id='realdeal_main_menu'>
                <ul className='navbar-nav menu-open readeal-top'>
                  <li className='current-menu-item'>
                    <Link to='/about-us'>About us</Link>
                  </li>
                  <li className='menu-item-has-children'>
                    <button style={{ background: "transparent", border: "none" }}>
                      <Link to={"/properties"}>Properties</Link>
                    </button>
                    <i className="fas fa-chevron-right" onClick={this.handleIsOpen}></i>
                    {this.state.isOpen &&
                      <ul className='sub-menu'>
                        <li>
                          <Link to='/residential'>Residential</Link>
                        </li>
                        <li>
                          <Link to='/commercial'>Commercial</Link>
                        </li>
                        <li>
                          <Link to='/industrial'>Industrial</Link>
                        </li>
                      </ul>
                    }
                  </li>
                  <li>
                    <Link to='/service'>Services</Link>
                  </li>
                  <li>
                    <Link to='/news'>News</Link>
                  </li>
                  <li>
                    <Link to='/contact-us'>Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className='nav-right-part nav-right-part-desktop readeal-top'>
                <a href="tel:+971 800 625336" className='btn btn-orange'
                >
                  <i className='fa fa-phone'></i> Call Us
                </a>
                <button
                  className='btn btn-orange'
                  onClick={this.handleShow}>
                  Enquire
                </button>
              </div>
              <EnquireModal
                show={this.state.show}
                onHide={this.handleClose}
              />
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
