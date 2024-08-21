import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { fetchPagesData } from "../../http/apiService";
import { API } from "../../http/API";
import Loader from "../global-components/loader";
import { getPropertyList } from "../axios/property-api";
import { updateAvailablePropertyList } from "../actions/property-actions";
import Navbar from "../global-components/navbar";
import PropertyBanner from "../section-components/properties/PropertyBanner";
import PropertySort from "../section-components/properties/PropertySort";
import PropertyIntro from "../section-components/properties/PropertyIntro";
import Footer from "../global-components/footer";
import FetchList from "../section-components/fetch-property/FetchList";
import WhatsappFixedIcon from "../section-components/Contactpannel/WhatsappFixedIcon";
import PropBannerImg from "../../assets/img/propertybanner.jpg";
// import PropertyMap from "../section-components/properties/PropertyMap";

const Properties = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location?.search);
  const propertyTab = searchParams?.get("property");
  const property = location?.pathname?.split("/")?.[1];
  const [buildingData, setBuildingData] = useState([]);
  const [content, setContent] = useState({});
  const [metaData, setMetaData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (property !== "properties" && property !== "fetch-properties") {
      const fetchPageData = async () => {
        try {
          setIsLoading(true); // Show the loader
          const { data } = await fetchPagesData(property);
          setContent(data?.content);
          setMetaData(data?.meta_details);
        } catch (error) {
          console.error("Error fetching Data:", error);
        } finally {
          setIsLoading(false); // Hide the loader
        }
      };
      fetchPageData();
    } else {
      setContent({});
      setMetaData({});
    }
  }, [property]);

  const getAllBuildings = () => {
    API.get("/building")
      .then((response) => {
        const allBuildings = response.data?.data?.filter(
          (x) => x?.status == "Published"
        );
        setBuildingData(allBuildings);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function getListOfProperties() {
    const data = await getPropertyList();
    if (data?.data) {
      dispatch(
        updateAvailablePropertyList(
          data?.data?.filter((item) => item?.status == "Published")
        )
      );
    }
  }

  useEffect(() => {
    getAllBuildings();
    getListOfProperties();
  }, [propertyTab, property]);

  // const propertiesMarkers = [
  //   {
  //     id: 1,
  //     name: "Makeen",
  //     lat: 25.028564728529833,
  //     lng: 55.133868733974424,
  //   },
  //   {
  //     id: 2,
  //     name: "Makeen",
  //     lat: 44.650644538530166,
  //     lng: -63.581495778261186,
  //   },
  //   {
  //     id: 3,
  //     name: "Makeen",
  //     lat: 25.223042078167527,
  //     lng: 55.27373033065088,
  //   },
  //   {
  //     id: 4,
  //     name: "Makeen",
  //     lat: 25.253700512275184,
  //     lng: 55.340906823835205,
  //   },
  //   {
  //     id: 5,
  //     name: "Makeen",
  //     lat: 25.163727399005765,
  //     lng: 55.42225155025156,
  //   },
  //   // Add more properties as needed
  // ];

  return (
    <div id={propertyTab ? propertyTab : property}>
      <Helmet>
        <title>
          {metaData?.meta_title ? metaData?.meta_title : "Properties"}
        </title>
        <meta
          name="description"
          content={
            metaData?.meta_description
              ? metaData?.meta_description
              : "Properties"
          }
        />
      </Helmet>

      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <PropertyBanner
            property={property}
            bannerImg={
              content?.banner?.banner_image
                ? content?.banner?.banner_image
                : PropBannerImg
            }
          />
          {property === "properties" || property === "fetch-properties" ? (
            <div style={{ height: "50px" }}></div>
          ) : (
            <PropertyIntro propertyIntro={content?.intro} />
          )}
        </>
      )}

      {/* <PropertyMap
        // googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC5sYYrJBA0rtJdECLmYbnwooKty_vTKsc&libraries=geometry,drawing,places`}
        // loadingElement={<div style={{ height: `100%` }} />}
        // containerElement={<div style={{ height: `100%` }} />}
        // mapElement={<div style={{ height: `100%` }} />}
        properties={propertiesMarkers}
      /> */}
      {property === "fetch-properties" ? (
        <FetchList property={property} />
      ) : (
        <PropertySort property={property} buildingData={buildingData} />
      )}
      <WhatsappFixedIcon />
      <Footer />
    </div>
  );
};

export default Properties;
