import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { fetchPagesData } from "../../http/apiService";
import { API } from "../../http/API";
import Loader from "../global-components/loader";
import Navbar from "../global-components/navbar";
import PageHeader from "../global-components/PageHeader";
import Footer from "../global-components/footer";
import TestimonialSlider from "../section-components/testimonial/testimonialSlider";
import TestimonialReviewForm from "../section-components/testimonial/testimonialReviewForm";
import WhatsappFixedIcon from "../section-components/Contactpannel/WhatsappFixedIcon";

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [content, setContent] = useState({});
  const [metaData, setMetaData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchPagesData("testimonials");
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
    const getAllTestimonial = () => {
      API.get("/review")
        .then((response) => {
          const alltestimonial = response.data?.data;
          setTestimonialData(alltestimonial);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllTestimonial();
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
          <div className="container_pad">
            <TestimonialSlider
              testimonialData={testimonialData}
              intro={content?.intro}
            />
            <TestimonialReviewForm />
          </div>
        </>
      )}
      <WhatsappFixedIcon />
      <Footer />
    </>
  );
};

export default Testimonial;
