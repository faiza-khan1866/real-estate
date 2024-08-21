import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { API } from "../../http/API";
import { useParams } from "react-router-dom";
import Navbar from "../global-components/navbar";
import PageHeader from "../global-components/PageHeader";
import Footer from "../global-components/footer";
import WhatsappFixedIcon from "../section-components/Contactpannel/WhatsappFixedIcon";

const NewsDetails = (props) => {
  const [singleNewsData, setSingleNewsData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getNewsProperty = () => {
      API.get(`/news/${id}`)
        .then((response) => {
          const allNews = response.data?.data;
          setSingleNewsData(allNews);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getNewsProperty();
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{singleNewsData?.meta_details?.meta_title}</title>
        <meta
          name="description"
          content={singleNewsData?.meta_details?.meta_description}
        />
      </Helmet>
      <Navbar />
      <PageHeader background={singleNewsData?.banner_image} />
      <div className="news-details-area">
        <div className="container">
          <div className="news-details-author-social">
            <div className="row">
              <div className="col-sm-6"></div>
            </div>
          </div>
          <div className="row justify-content-center pd-top-70">
            <div className="col-lg-8">
              <div className="news-details-wrap">
                <h3 className="title1">{singleNewsData?.title}</h3>
                <p
                  className="generalDiv"
                  dangerouslySetInnerHTML={{
                    __html: singleNewsData?.content,
                  }}
                ></p>
                <p style={{ color: "rgba(66, 66, 66, 0.5)" }}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsappFixedIcon />
      <Footer />
    </>
  );
};

export default NewsDetails;
