import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { fetchPagesData } from "../../http/apiService";
import Loader from "../global-components/loader";
import Navbar from "../global-components/navbar";
import PageHeader from "../global-components/PageHeader";
import Footer from "../global-components/footer";
import AgentRegisterDataContainer from "../section-components/agentRegistration/AgentRegisterDataContainer.js";
import AgentRegisterForm from "../section-components/agentRegistration/AgentRegisterForm.js";

const AgentRegistration = () => {
  const [content, setContent] = useState({});
  const [metaData, setMetaData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchPagesData("registration");
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
          <AgentRegisterDataContainer intro={content?.intro} />
          <AgentRegisterForm />
        </>
      )}
      <Footer />
    </>
  );
};

export default AgentRegistration;
