import React, { useState, useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { fetchPagesData } from "../../http/apiService";
import { useInView } from "react-intersection-observer";

import { API } from "../../http/API";
import Loader from "../global-components/loader";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import HomeInformation from "../section-components/homepage/HomeInformation";
import HomeVideo from "../section-components/homepage/HomeVideo";

//common
import Footer from "../global-components/footer";
import WhatsappFixedIcon from "../section-components/Contactpannel/WhatsappFixedIcon";
import { DotLoader } from "react-spinners";

const HeaderBanner = lazy(() =>
  import("../section-components/sections/HeaderBanner")
);
const TabPanel = lazy(() => import("../layouts/TabPanel"));
const FeaturedProperties = lazy(() =>
  import("../section-components/sections/FeaturedProperties")
);
const LeasedProperties = lazy(() =>
  import("../section-components/sections/LeasedProperties")
);
const PropertiesByCities = lazy(() =>
  import("../section-components/sections/PropertiesByCities")
);
const DataContainer = lazy(() => import("../layouts/DataContainer"));

// import HeaderBanner from "../section-components/sections/HeaderBanner";
// import TabPanel from "../layouts/TabPanel";
// import FeaturedProperties from "../section-components/sections/FeaturedProperties";
// import LeasedProperties from "../section-components/sections/LeasedProperties";
// import PropertiesByCities from "../section-components/sections/PropertiesByCities";
// import DataContainer from "../layouts/DataContainer";

const Homepage = () => {
  const [buildingData, setBuildingData] = useState([]);
  const [emiratesData, setEmiratesData] = useState([]);
  const [PropertiesData, setPropertiesData] = useState([]);
  const [commercialBuilding, setCommercialBuildings] = useState([]);
  const [industrialBuilding, setIndustrialBuildings] = useState([]);
  const [residentialBuilding, setResidentialBuildings] = useState([]);
  const [waitingPropertiesData, setWaitingPropertiesData] = useState([]);
  const [content, setContent] = useState({});
  const [metaData, setMetaData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchPagesData("home-page");
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

  const getAllBuildings = () => {
    API.get("/building")
      .then((response) => {
        const allBuildings = response.data?.data?.filter(
          (x) => x?.status == "Published"
        );
        setBuildingData(allBuildings);
        const residentialBuildings = allBuildings?.filter(
          (x) => x.category_type === "residential"
        );
        const commercialBuildings = allBuildings?.filter(
          (x) => x.category_type === "commercial"
        );
        const industrialBuildings = allBuildings?.filter(
          (x) => x.category_type === "industrial"
        );
        setResidentialBuildings(residentialBuildings);
        setCommercialBuildings(commercialBuildings);
        setIndustrialBuildings(industrialBuildings);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllEmirates = () => {
    API.get("/emirate")
      .then((response) => {
        const allEmirates = response.data?.data;
        setEmiratesData(allEmirates);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllProperties = () => {
    API.get("/properties")
      .then((response) => {
        const waitingProperties = response?.data?.data?.filter(
          (x) => x?.featured === 1 && x?.status == "Published"
        );
        setWaitingPropertiesData(waitingProperties);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllBuildings();
    getAllEmirates();
    getAllProperties();
  }, []);

  //.........................residential DropDowns
  const generateResidentialLocationDropDown = () => {
    return [...new Set(residentialBuilding.map((item) => item.city))];
  };

  //.........................commercial DropDowns
  const generateCommercialLocationDropDown = () => {
    return [...new Set(commercialBuilding.map((item) => item.city))];
  };

  //.........................industrial DropDowns
  const generateIndustrialLocationDropDown = () => {
    return [...new Set(industrialBuilding.map((item) => item.city))];
  };

  const handleFilterLocation = (city) => {
    const filterData = residentialBuilding.filter((item) => {
      if (item.city === city) {
        return item;
      }
    });
    setPropertiesData(filterData);
  };

  const handleFilterProperties = (property) => {
    const filterData = residentialBuilding.filter((item) => {
      if (item.name === property) {
        return item;
      }
    });

    setPropertiesData(filterData);
  };

  const handleFilterArea = (area) => {
    const filterData = residentialBuilding.filter((item) => {
      if (item?.properties?.space === area) {
        return item;
      }
    });

    setPropertiesData(filterData);
  };

  const handleFilterPrice = (price) => {
    const filterData = residentialBuilding.filter((item) => {
      if (item?.properties?.price === price) {
        return item;
      }
    });

    setPropertiesData(filterData);
  };

  //.........................commercial Filters

  const handleFilterCommLocation = (Commcity) => {
    const filterData = commercialBuilding.filter((item) => {
      if (item.city === Commcity) {
        return item;
      }
    });
    setPropertiesData(filterData);
  };

  const handleFilterCommProperties = (Commproperty) => {
    const filterData = commercialBuilding.filter((item) => {
      if (item.name === Commproperty) {
        return item;
      }
    });
    setPropertiesData(filterData);
  };

  const handleFilterCommArea = (Commarea) => {
    const filterData = commercialBuilding.filter((item) => {
      if (item?.properties?.space === Commarea) {
        return item;
      }
    });

    setPropertiesData(filterData);
  };

  const handleFilterCommPrice = (Commprice) => {
    const filterData = commercialBuilding.filter((item) => {
      if (item?.properties?.price === Commprice) {
        return item;
      }
    });

    setPropertiesData(filterData);
  };

  //.........................Industrial Filters

  const handleFilterIndusLocation = (Induscity) => {
    const filterData = industrialBuilding.filter((item) => {
      if (item.city === Induscity) {
        return item;
      }
    });

    setPropertiesData(filterData);
  };

  const handleFilterIndusProperties = (Indusproperty) => {
    const filterData = industrialBuilding.filter((item) => {
      if (item.name === Indusproperty) {
        return item;
      }
    });

    setPropertiesData(filterData);
  };

  const handleFilterIndusArea = (Indusarea) => {
    const filterData = industrialBuilding.filter((item) => {
      if (item?.properties?.space === Indusarea) {
        return item;
      }
    });

    setPropertiesData(filterData);
  };

  const handleFilterIndusPrice = (Indusprice) => {
    const filterData = industrialBuilding.filter((item) => {
      if (item?.properties?.price === Indusprice) {
        return item;
      }
    });

    setPropertiesData(filterData);
  };

  return (
    <div className="homepage">
      <Helmet>
        <title>{metaData?.meta_title}</title>
        <meta name="description" content={metaData?.meta_description} />
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <HomeInformation sliderData={content?.sliderSection} />
          <HomeVideo videoData={content?.introSection} />
          <div ref={ref} style={{ minHeight: "35px" }}>
            {inView ? (
              <>
                <Suspense
                  fallback={
                    <div
                      className={`d-flex flex-column text-center align-items-center justify-content-center`}
                      style={{
                        position: "absolute",
                        zIndex: 99999,
                        height: "100%",
                        width: "100%",
                        background: "rgba(33, 97, 79, 0.8)",
                      }}
                    >
                      <DotLoader color={"#215c4f"} size={100} />
                    </div>
                  }
                >
                  <DataContainer welcomeSection={content?.welcomeSection} />
                  <HeaderBanner
                    isHeaderMiddle={false}
                    successSection={content?.successSection}
                    successSection1={content?.successSection1}
                    successSection2={content?.successSection2}
                    successSection3={content?.successSection3}
                  />
                  <TabPanel
                    residentialData={residentialBuilding}
                    reslocations={generateResidentialLocationDropDown()}
                    commercialData={commercialBuilding}
                    commlocations={generateCommercialLocationDropDown()}
                    industrialData={industrialBuilding}
                    induslocations={generateIndustrialLocationDropDown()}
                    handleFilterLocation={handleFilterLocation}
                    handleFilterProperties={handleFilterProperties}
                    handleFilterArea={handleFilterArea}
                    handleFilterPrice={handleFilterPrice}
                    handleFilterCommLocation={handleFilterCommLocation}
                    handleFilterCommProperties={handleFilterCommProperties}
                    handleFilterCommArea={handleFilterCommArea}
                    handleFilterCommPrice={handleFilterCommPrice}
                    handleFilterIndusLocation={handleFilterIndusLocation}
                    handleFilterIndusProperties={handleFilterIndusProperties}
                    handleFilterIndusArea={handleFilterIndusArea}
                    handleFilterIndusPrice={handleFilterIndusPrice}
                    PropertiesData={PropertiesData}
                  />
                  <FeaturedProperties buildingsData={buildingData} />
                  <PropertiesByCities
                    emiratesData={emiratesData}
                    PropertiesData={PropertiesData}
                  />
                  <LeasedProperties
                    waitingPropertiesData={waitingPropertiesData}
                  />
                </Suspense>
              </>
            ) : null}
          </div>
          <Footer BuildingData={buildingData} />
        </>
      )}
      <WhatsappFixedIcon />
    </div>
  );
};
export default Homepage;
