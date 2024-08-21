import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../global-components/navbar";
import Footer from "../global-components/footer";
import Slider from "../section-components/PropertyInner/Slider";
import FloorPlan from "../section-components/PropertyInner/FloorPlan";
import Amenities from "../section-components/PropertyInner/Amenities";
import Contact from "../section-components/PropertyInner/Contact";
import RelatedBuildings from "../section-components/PropertyInner/related-buildings/RelatedBuildings";
import { API } from "../../http/API";
import { useParams } from "react-router-dom";
import WhatsappFixedIcon from "../section-components/Contactpannel/WhatsappFixedIcon";
import { Row, Col } from "react-bootstrap";
import BottomNavigator from "../section-components/BottomTabNavigator/BottomTabNavigator";

const PropertyInner = (props) => {
  const [singlePropertyData, setSinglePropertyData] = useState([]);
  const [allPropertyData, setAllPropertyData] = useState([]);
  const { id } = useParams();
  const getSingleProperty = () => {
    // debugger;
    API.get(`/properties/${id}`)
      .then((response) => {
        const singleProperty = response.data?.data[0];
        setSinglePropertyData(singleProperty);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllProperty = () => {
    API.get("/properties")
      .then((response) => {
        const AllProperty = response?.data?.data?.filter(
          (x) => x?.status == "Published"
        );
        setAllPropertyData(AllProperty);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getSingleProperty();
    getAllProperty();
  }, [id]);

  return (
    <div className="homepage">
      <Helmet>
        <title>{singlePropertyData?.meta_details?.meta_title}</title>
        <meta
          name="description"
          content={singlePropertyData?.meta_details?.meta_description}
        />
      </Helmet>
      <Navbar />
      <Slider singleProperty={singlePropertyData} />
      <div className="floorplan container">
        <Row style={{ width: "80%" }} className="container">
          {singlePropertyData.price && (
            <Col sm={6}>
              <>
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Price :
                </span>{" "}
                <span style={{ fontSize: "15px", fontWeight: "400" }}>
                  {singlePropertyData.price &&
                    Number(singlePropertyData.price).toLocaleString(
                      "en-US"
                    )}{" "}
                  {singlePropertyData.end_price
                    ? " - " +
                      Number(singlePropertyData.end_price).toLocaleString(
                        "en-US"
                      )
                    : ""}{" "}
                  {singlePropertyData.price_unit}
                </span>
              </>
            </Col>
          )}

          {singlePropertyData.price && (
            <Col s m={6}>
              <>
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Area :
                </span>{" "}
                <span style={{ fontSize: "15px", fontWeight: "400" }}>
                  {singlePropertyData.space &&
                    Number(singlePropertyData.space).toLocaleString(
                      "en-US"
                    )}{" "}
                  {singlePropertyData.end_area
                    ? " - " +
                      Number(singlePropertyData.end_area).toLocaleString(
                        "en-US"
                      )
                    : ""}
                  {" Sq. Ft"}
                </span>
              </>
            </Col>
          )}
          {singlePropertyData?.bed &&
          singlePropertyData.category_type == "Residential" ? (
            <>
              <Col sm={6}>
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Bedrooms :
                </span>{" "}
                <span style={{ fontSize: "15px", fontWeight: "400" }}>
                  {singlePropertyData.bed}
                </span>
              </Col>
            </>
          ) : (
            ""
          )}
          {singlePropertyData.bathroom &&
          singlePropertyData.category_type == "Residential" ? (
            <>
              <Col sm={6}>
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Bathrooms :
                </span>{" "}
                <span style={{ fontSize: "15px", fontWeight: "400" }}>
                  {singlePropertyData.bathroom}
                </span>
              </Col>
            </>
          ) : (
            ""
          )}
        </Row>
      </div>
      <FloorPlan singleProperty={singlePropertyData} />
      <Amenities singleProperty={singlePropertyData} />
      <RelatedBuildings
        allProperty={allPropertyData}
        singleProperty={singlePropertyData}
        buildingName={props.location.state}
        pathname={props.location.pathname}
      />
      <Contact />
      <WhatsappFixedIcon />
      <BottomNavigator singleProperty={singlePropertyData} />
      <Footer />
    </div>
  );
};

export default PropertyInner;
