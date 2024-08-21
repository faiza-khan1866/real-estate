import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { fetchPagesData } from "../../http/apiService";
import Loader from "../global-components/loader";
import Navbar from "../global-components/navbar";
import PageHeader from "../global-components/PageHeader";
import Footer from "../global-components/footer";
import ContactInfoContainer from "../section-components/contact/contactInfoContainer";
import ContactForm from "../section-components/contact/ContactForm";
import ContactSocialContainer from "../section-components/contact/contactSocialContainer";
import ContactMapInfo from "../section-components/contact/contactMapInfo";
import WhatsappFixedIcon from "../section-components/Contactpannel/WhatsappFixedIcon";

const Contact = () => {
  const [content, setContent] = useState({});
  const [metaData, setMetaData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchPagesData("contact-us");
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
          <ContactInfoContainer
            contact={content?.contact}
            contact1={content?.contact1}
            contact2={content?.contact2}
            contact3={content?.contact3}
          />
        </>
      )}
      <ContactForm />
      <ContactSocialContainer />
      <ContactMapInfo />
      <WhatsappFixedIcon />
      <Footer />
    </>
  );
};

export default Contact;
