import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { fetchPagesData } from "../../http/apiService";
import { API } from "../../http/API";
import Loader from "../global-components/loader";
import Navbar from "../global-components/navbar";
import PageHeader from "../global-components/PageHeader";
import PopularPost from "../section-components/news/popular-post";
import PostList from "../section-components/news/post-list";
import Footer from "../global-components/footer";
import WhatsappFixedIcon from "../section-components/Contactpannel/WhatsappFixedIcon";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [content, setContent] = useState({});
  const [metaData, setMetaData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchPagesData("news");
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
    const getAllNews = () => {
      API.get("/news")
        .then((response) => {
          const allnews = response.data?.data;
          setNewsData(allnews);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllNews();
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
          <PopularPost title={content?.intro?.title} newsData={newsData} />
          <PostList newsData={newsData} />
        </>
      )}
      <WhatsappFixedIcon />
      <Footer />
    </>
  );
};

export default News;
