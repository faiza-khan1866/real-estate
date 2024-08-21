import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { fetchPagesData } from "../../http/apiService";
import Loader from "../global-components/loader";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../global-components/footer";
import Navbar from "../global-components/navbar";
import TermsService from "../section-components/terms-service/TermsService";
import PageHeader from "../global-components/PageHeader";

const Terms = () => {
  const [content, setContent] = useState({});
  const [metaData, setMetaData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchPagesData("terms-of-service");
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
          <TermsService termsData={content?.intro} />
        </>
      )}
      <Footer />
    </>
  );
};

export default Terms;
