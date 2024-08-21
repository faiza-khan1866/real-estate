import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { fetchPagesData } from "../../http/apiService";
import { API } from "../../http/API";
import Loader from "../global-components/loader";
import Navbar from "../global-components/navbar";
import PageHeader from "../global-components/PageHeader";
import AboutDataContainer from "../layouts/AboutDataContainer";
import ServiceSmall from "../section-components/sections/ServiceSmall";
import HeaderBanner from "../section-components/sections/HeaderBanner";
import AboutUs from "../section-components/about-us";
import Services from "../section-components/sections/Service";
import Vision from "../section-components/sections/Vision";
import PropertyLeasing from "../section-components/sections/PropertyLeasing";
import HistorySlider from "../section-components/sections/HistorySlider";
import AboutCarousel from "../section-components/sections/AboutCarousel";
import Footer from "../global-components/footer";
import WhatsappFixedIcon from "../section-components/Contactpannel/WhatsappFixedIcon";

const About = () => {
  const [moreAboutData, setMoreAboutData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [content, setContent] = useState({});
  const [metaData, setMetaData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchPagesData("about-us");
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

  const getAllMoreAbout = () => {
    API.get("/more-about")
      .then((response) => {
        const allmoreabout = response.data.data?.filter(
          (x) => x.about_type === "more_about_us"
        );
        const allhistory = response.data.data?.filter(
          (x) => x.about_type === "quality_investment"
        );
        setMoreAboutData(allmoreabout);
        setHistoryData(allhistory);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllTeams = () => {
    API.get("/team")
      .then((response) => {
        const allteams = response.data?.data;
        setTeamData(allteams);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllMoreAbout();
    getAllTeams();
  }, []);

  useEffect(() => {
    let publicUrl = process.env.PUBLIC_URL;
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);
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
          <AboutDataContainer intro={content?.intro} />
          <ServiceSmall />
          <HeaderBanner
            isHeaderMiddle={true}
            successSection={content?.successSection}
            successSection1={content?.successSection1}
            successSection2={content?.successSection2}
            successSection3={content?.successSection3}
          />
          <AboutUs />
          {content?.manager?.published === "1" ? (
            <Vision manager={content?.manager} />
          ) : (
            ""
          )}

          <Services moreAboutData={moreAboutData} />
          <HistorySlider historyData={historyData} />
          <PropertyLeasing leasingData={content?.aboutUs} />
          <AboutCarousel teamData={teamData} />
        </>
      )}
      <WhatsappFixedIcon />
      <Footer />
    </>
  );
};

export default About;
