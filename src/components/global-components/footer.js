import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPagesData } from "../../http/apiService";
import footerdata from "../../data/footerdata.json";
import twitter from "../../assets/img/icons/twitter.png";
import tiktok from "../../assets/img/icons/tiktok.png";
import appStore from "../../assets/img/icons/app-store.jpg";
import googleStore from "../../assets/img/icons/google-play.jpg";
import { API } from "../../http/API";
import { Alert } from "react-bootstrap";

const Footer_v1 = () => {
  const [featureProperties, setFeatureProperties] = useState([]);
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [permission, setPermission] = useState(false);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchPagesData("footer");
        setContent(data?.content);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchPageData();
  }, []);

  useEffect(() => {
    const getAllFeaturedProperties = () => {
      API.get("/featured-buildings")
        .then((response) => {
          const allfeaturedprop = response?.data;
          setFeatureProperties(allfeaturedprop);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllFeaturedProperties();
  }, []);

  const sendEmail = () => {
    if (!email) {
      setShow(true);
      setAlertText("Enter Email first");
      return false;
    }

    let data = {
      email: email,
    };

    if (!permission) {
      setShow(true);
      setAlertText(
        "You have to agree to receive emails from Makeen Properties"
      );
      return false;
    }

    API.post("/query", data)
      .then((res) => {
        setShow(true);
        setAlertText("Email Recieved Successfully");
        setPermission(false);
        setEmail("");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setPermission(e.target.checked);
    // do whatever you want with isChecked value
  };

  return (
    <footer
      className="footer-area"
      style={{
        backgroundImage: "url(https://makeen.b-cdn.net/HomePage/footer.JPG)",
      }}
    >
      <div className="overlay_div">
        <div className="footer-top">
          <div className="row">
            <div className="col-sm-7">
              <h4 className="footer-txt">
                Add a list of properties that practically rent <br /> themselves
                to your own leasing portfolio
              </h4>
            </div>
            <div className="col-sm-5">
              <div className="register-button text-sm-right">
                <a href="/registration">
                  <button className="btn btn-white">
                    <span className="big"></span>REGISTER AS AN AGENT
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">
                  {footerdata.popularserces.title}
                </h4>
                <ul>
                  {featureProperties
                    ?.filter((x) => x?.status == "Published")
                    ?.map((item, i) => (
                      <li className="readeal-top" key={i}>
                        {item?.properties?.slug === undefined ? (
                          <span className="text-white">{item.name}</span>
                        ) : (
                          <Link
                            to={{
                              pathname: `/properties/${item?.properties?.category_type.toLowerCase()}/${item?.properties?.Property_type.toLowerCase()}/${
                                item?.properties?.slug
                              }`,
                              state: `${item.name}`,
                            }}
                          >
                            {item.name}
                          </Link>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">{footerdata.quicklink.title}</h4>
                <ul>
                  {content?.company?.map((item, i) => (
                    <li className="readeal-top" key={i}>
                      <Link to={item.route}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-sm-6">
              <Alert
                variant="success"
                show={show}
                onClose={() => setShow(false)}
                dismissible
              >
                {alertText}
              </Alert>
              <form className="widget widget-subscribe text-sm-left">
                <div className="rld-single-input">
                  <h4 className="widget-title">WANT TO LEARN MORE?</h4>
                </div>
                <div className="rld-single-input">
                  <span className="widget-para">
                    We will reach out over email to set up a call
                  </span>
                </div>
                <div className="learnmore-btn">
                  <div className="rld-single-input">
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Type in your email address"
                      className="queryinput"
                    />
                    <span className="checkbox_text agreeForEmail">
                      {" "}
                      <input
                        type="checkbox"
                        className="checkbox_email agreeForEmailInput"
                        onChange={(e) => handleChange(e)}
                      />{" "}
                      <p className="agreeForEmailText">
                        I agree to receive emails from Makeen Properties
                      </p>
                    </span>
                  </div>
                  <button
                    className="la la-arrow-right sendEmailBtn"
                    type="button"
                    onClick={sendEmail}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-contact">
          <div className="site-num">
            <h1 className="first-three-num">800</h1>
            <div className="remaining-num">
              <p className={"makeentext"}>
                {" "}
                <span style={{ letterSpacing: "2px" }}>MAKEEN</span> <br />
                <span style={{ letterSpacing: "7.5px" }}>625336</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="footer-contact-details">
                <div className="site-contact">
                  <ul className="contact-list ">
                    <li>
                      <a
                        href={`https://wa.me/${content?.contact?.phone}`}
                        className="whatsapp"
                        target={"_blank"}
                      >
                        <i className="fa fa-whatsapp mr-1" />
                        {content?.contact?.phone}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`tel:${content?.contact?.phone2}`}
                        className="phone"
                      >
                        <i className="fa fa-phone mr-1" />
                        {content?.contact?.phone2}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${content?.contact?.email}`}
                        className="email"
                      >
                        <i className="fa fa-envelope-o mr-1" />
                        {content?.contact?.email}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="site-office">
                  <a
                    href={`${content?.contact?.address}`}
                    target={"_blank"}
                    className={"text-decoration-none text-white"}
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-map-marker" /> Office 202, Makeen
                    Building, Dubai UAE
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start mt-4 app_icons">
                <a
                  href="https://apps.apple.com/ae/app/makeen-helpdesk/id1489465265"
                  target="_blank"
                >
                  <img src={appStore} className="img-fluid" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.smartfm_helpdesk"
                  target="_blank"
                >
                  <img src={googleStore} className="img-fluid ml-3" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="help-desk">
                <div className="footer-social">
                  <span>Follow us on our socials</span>
                  <ul className="social-icon">
                    <li>
                      <a
                        href={`${
                          content?.social?.facebook
                            ? content?.social?.facebook
                            : "#"
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-facebook fa-lg" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${content?.social?.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-instagram fa-lg" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${content?.social?.linkedIn}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin fa-lg" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${content?.social?.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={twitter} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${content?.social?.tiktok}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={tiktok} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${content?.social?.youtube}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-youtube-play fa-lg" />
                      </a>
                    </li>

                    <a
                      href="https://www.prism-me.com/"
                      target="_blank"
                      style={{ color: "#215C4F" }}
                      rel="noopener noreferrer"
                    >
                      .
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area py-2">
          <div className="row align-items-center CopyRightBorder">
            <div className="col-lg-6 col-md-5 order-2 order-md-1">
              <ul className="copyright-text">
                <li>
                  {content?.copyright?.description.split(" ")[0]}{" "}
                  {content?.copyright?.description.split(" ")[1]}{" "}
                  {content?.copyright?.description.split(" ")[2]}{" "}
                  {content?.copyright?.description.split(" ")[3]}{" "}
                  {content?.copyright?.description.split(" ")[4]}{" "}
                  {content?.copyright?.description.split(" ")[5]}{" "}
                  {content?.copyright?.description.split(" ")[6]}
                </li>
                <li>
                  {content?.copyright?.description.split(" ")[7]}{" "}
                  {content?.copyright?.description.split(" ")[8]}{" "}
                  {content?.copyright?.description.split(" ")[9]}{" "}
                  {content?.copyright?.description.split(" ")[10]}{" "}
                  {content?.copyright?.description.split(" ")[11]}{" "}
                  {content?.copyright?.description.split(" ")[12]}{" "}
                  {content?.copyright?.description.split(" ")[13]}{" "}
                  {content?.copyright?.description.split(" ")[14]}
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-7 order-1 order-md-2">
              <div className="footer-menu text-center text-md-right">
                <ul className="copyright-text">
                  <li style={{ color: "#215C4F" }}>
                    Designed and managed by{" "}
                    <a href="https://www.prism-me.com/" target="_blank">
                      Prism Digital
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${content?.term?.route}`}
                      className={"text-decoration-none text-white"}
                    >
                      {content?.term?.name}
                    </a>{" "}
                    |{" "}
                    <a
                      href={`${content?.privacy?.route}`}
                      className={"text-decoration-none text-white"}
                    >
                      {content?.privacy?.name}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer_v1;
