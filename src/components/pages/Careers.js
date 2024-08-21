import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { fetchPagesData } from "../../http/apiService";
import Loader from "../global-components/loader";
import { API } from "../../http/API";
import Navbar from "../global-components/navbar";
import PageHeader from "../global-components/PageHeader";
import Footer from "../global-components/footer";
import CareersDataContainer from "../section-components/careers/careersDataContainer";
import WhatsappFixedIcon from "../section-components/Contactpannel/WhatsappFixedIcon";

const Careers = () => {
  const [careersData, setCareersData] = useState([]);
  const [content, setContent] = useState({});
  const [metaData, setMetaData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchPagesData("careers");
        setContent(data?.content);
        setMetaData(data?.meta_details);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchPageData();
  }, []);

  useEffect(() => {
    const getAllCareers = () => {
      API.get("/career")
        .then((response) => {
          const allcareer = response.data?.data;
          setCareersData(allcareer);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllCareers();
  }, []);

  return (
    <>
      <Helmet>
        <title>{metaData?.meta_title}</title>
        <meta name="description" content={metaData?.meta_description} />
      </Helmet>
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <PageHeader
            headertitle={content?.intro?.title}
            background={content?.banner?.banner_image}
          />
          <CareersDataContainer
            intro={content?.intro}
            careersData={careersData}
          />
        </>
      )}
      <WhatsappFixedIcon />
      <Footer />
    </>
  );
};

export default Careers;
