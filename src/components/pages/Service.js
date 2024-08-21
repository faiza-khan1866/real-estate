import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { fetchPagesData } from "../../http/apiService";
import Loader from "../global-components/loader";
import Navbar from "../global-components/navbar";
import Footer from "../global-components/footer";
import ServicesList from "../section-components/service/servicesList";
import PageHeader from "../global-components/PageHeader";
import { API } from "../../http/API";
import WhatsappFixedIcon from "../section-components/Contactpannel/WhatsappFixedIcon";

const Service = (props) => {
  const [serviceData, setServiceData] = useState([]);
  const [content, setContent] = useState({});
  const [metaData, setMetaData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchPagesData("service");
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
    const getAllServices = () => {
      API.get("/services")
        .then((response) => {
          const allservices = response.data?.data;
          setServiceData(allservices);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllServices();
  }, []);

  return (
    <div id={props.property}>
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
          <ServicesList
            title={content?.intro?.title}
            serviceData={serviceData}
          />
        </>
      )}
      <WhatsappFixedIcon />
      <Footer />
    </div>
  );
};

export default Service;
