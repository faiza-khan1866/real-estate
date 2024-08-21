import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../global-components/navbar";
import Footer from "../global-components/footer";
import Gallery360deg from "../section-components/Gallery/Gallery360deg";
import VideoGallery from "../section-components/Gallery/VideoGallery";
import { API } from "../../http/API";
import { useParams } from "react-router-dom";
import WhatsappFixedIcon from "../section-components/Contactpannel/WhatsappFixedIcon";
import BottomNavigator from "../section-components/BottomTabNavigator/BottomTabNavigator";

const Gallery = () => {
  const [singlePropertyData, setSinglePropertyData] = useState([]);
  const { id } = useParams();
  const getSingleProperty = () => {
    API.get(`/properties/${id}`)
      .then((response) => {
        const singleProperty = response.data?.data[0];
        setSinglePropertyData(singleProperty);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getSingleProperty();
  }, []);

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
      <VideoGallery singleProperty={singlePropertyData} />
      <Gallery360deg singleProperty={singlePropertyData} />
      <WhatsappFixedIcon />
      <BottomNavigator singleProperty={singlePropertyData} />
      <Footer />
    </div>
  );
};

export default Gallery;
