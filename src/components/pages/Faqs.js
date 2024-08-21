import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { fetchPagesData } from "../../http/apiService";
import Loader from "../global-components/loader";
import Navbar from "../global-components/navbar";
import PageHeader from "../global-components/PageHeader";
import Footer from "../global-components/footer";
import FaqsForm from "../section-components/faqs/faqsForm";
import FaqsInfoContainer from "../section-components/faqs/faqsInfoContainer";
import WhatsappFixedIcon from "../section-components/Contactpannel/WhatsappFixedIcon";

const Faqs = () => {
  const [content, setContent] = useState({});
  const [metaData, setMetaData] = useState({});
  const [allData, setAllData] = useState(content?.faq);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchPagesData("faq");
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

  // ........search bar area code
  const handleSearchFilter = (question) => {
    const filterData = content?.faq.filter((item) => {
      if (item.questions.toLowerCase().includes(question.toLowerCase())) {
        return item;
      }
    });

    setAllData(filterData);
  };

  useEffect(() => {
    setAllData(content?.faq);
  }, [content?.faq]);

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
          <div className="faq-area pd-top-60 pd-bottom-60">
            <div className="container">
              <div className="section-title">
                <h3 className="title">{content?.intro?.title}</h3>
                <p>{content?.intro?.subtitle}</p>
              </div>
              <div className="row">
                <div className="col-lg-8 mb-5 mb-lg-0">
                  <FaqsInfoContainer faqData={allData} />
                </div>
                <div className="col-lg-4">
                  <FaqsForm handleSearchFilter={handleSearchFilter} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <WhatsappFixedIcon />
      <Footer />
    </>
  );
};

export default Faqs;
