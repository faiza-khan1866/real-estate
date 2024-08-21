import React, { useEffect, useState } from "react";
import Navbar from "../global-components/navbar";
import PageHeader from "../global-components/PageHeader";
import Footer from "../global-components/footer";
import { API } from "../../http/API";
import SearchGrid from "../section-components/search-list/SearchGrid";
import WhatsappFixedIcon from "../section-components/Contactpannel/WhatsappFixedIcon";
import propertybanner from "../../assets/img/propertybanner.jpg";

const SearchList = (props) => {
  const cityName = props.location?.state?.PropertiesData?.city
    ? props.location?.state?.PropertiesData?.city
    : props.location?.state
    ? props.location?.state
    : "";

  const [item, setItem] = useState([]);
  const getAllProperties = () => {
    API.get("/building")
      .then((response) => {
        const Properties = response.data?.data?.filter(
          (x) => x?.status == "Published"
        );
        setItem(Properties);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllProperties();
  }, []);

  return (
    <>
      <Navbar />
      <PageHeader headertitle="searchList" background={propertybanner} />
      <SearchGrid
        buildingData={props.location?.state?.PropertiesData}
        item={item}
        cityName={cityName}
      />
      <WhatsappFixedIcon />
      <Footer />
    </>
  );
};

export default SearchList;
