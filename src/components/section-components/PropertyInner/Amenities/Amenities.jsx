import React from "react";
import { Card } from "react-bootstrap";
import am1 from "../../../../assets/img/Amenities/balcony.png";
import am2 from "../../../../assets/img/Amenities/am2.png";
import am3 from "../../../../assets/img/Amenities/am3.png";
import am4 from "../../../../assets/img/Amenities/playtime.png";
import am5 from "../../../../assets/img/Amenities/am5.png";
import am6 from "../../../../assets/img/Amenities/am6.png";
import am7 from "../../../../assets/img/Amenities/am7.png";
import am8 from "../../../../assets/img/Amenities/am8.png";
import am9 from "../../../../assets/img/Amenities/am9.png";
import am10 from "../../../../assets/img/Amenities/am10.png";
import am11 from "../../../../assets/img/Amenities/am11.png";
import am12 from "../../../../assets/img/Amenities/am12.png";
import am13 from "../../../../assets/img/Amenities/am13.png";
import am14 from "../../../../assets/img/Amenities/am14.png";
import am15 from "../../../../assets/img/Amenities/am15.png";
import am16 from "../../../../assets/img/Amenities/Pantry 2.png";
import am17 from "../../../../assets/img/Amenities/am17.png";
// import am18 from "../../../../assets/img/Amenities/am19.png"
import am19 from "../../../../assets/img/Amenities/apartment.png";
import am20 from "../../../../assets/img/Amenities/bath.png";
import am21 from "../../../../assets/img/Amenities/bus-stop-2.png";
import am22 from "../../../../assets/img/Amenities/cafe.png";
import am23 from "../../../../assets/img/Amenities/children.png";
import am24 from "../../../../assets/img/Amenities/chillers.png";
import am25 from "../../../../assets/img/Amenities/conference room.png";
import am26 from "../../../../assets/img/Amenities/customer.png";
import am27 from "../../../../assets/img/Amenities/demand.png";
import am28 from "../../../../assets/img/Amenities/dog.png";
import am29 from "../../../../assets/img/Amenities/double-windows.png";
import am30 from "../../../../assets/img/Amenities/energy-2.png";
import am31 from "../../../../assets/img/Amenities/fuel-station.png";
import am32 from "../../../../assets/img/Amenities/glass.png";
import am33 from "../../../../assets/img/Amenities/group-meeting.png";
import am34 from "../../../../assets/img/Amenities/healthy.png";
import am35 from "../../../../assets/img/Amenities/restaurant.png";
import am36 from "../../../../assets/img/Amenities/intercom.png";
import am37 from "../../../../assets/img/Amenities/kitchen.png";
import am38 from "../../../../assets/img/Amenities/locker-room.png";
import am39 from "../../../../assets/img/Amenities/maintenance-2.png";
import am40 from "../../../../assets/img/Amenities/marina-bay-sands.png";
import am41 from "../../../../assets/img/Amenities/market.png";
import am42 from "../../../../assets/img/Amenities/meeting.png";
import am43 from "../../../../assets/img/Amenities/mosque.png";
import am44 from "../../../../assets/img/Amenities/packages.png";
import am45 from "../../../../assets/img/Amenities/petrol-station.png";
import am46 from "../../../../assets/img/Amenities/pharmacy-2.png";
import am47 from "../../../../assets/img/Amenities/playground-2.png";
import am48 from "../../../../assets/img/Amenities/road.png";
import am49 from "../../../../assets/img/Amenities/round-table.png";
import am50 from "../../../../assets/img/Amenities/satellite.png";
import am51 from "../../../../assets/img/Amenities/share.png";
import am52 from "../../../../assets/img/Amenities/shopping-center.png";
import am53 from "../../../../assets/img/Amenities/swimming-pool.png";
import am54 from "../../../../assets/img/Amenities/toilet.png";
import am55 from "../../../../assets/img/Amenities/union.png";
import am56 from "../../../../assets/img/Amenities/wardrobe-2.png";
import am57 from "../../../../assets/img/Amenities/warehouse-2.png";
import am58 from "../../../../assets/img/Amenities/warehouse-5.png";
import am59 from "../../../../assets/img/Amenities/windows.png";
import am60 from "../../../../assets/img/Amenities/washroom.png";
import am61 from "../../../../assets/img/Amenities/hotel.png";
import am62 from "../../../../assets/img/Amenities/easy access 1.png";
import am63 from "../../../../assets/img/Amenities/5 min to RAK 2.png";
import am64 from "../../../../assets/img/Amenities/back side of shop 2.png";
import am65 from "../../../../assets/img/Amenities/lobby 2.png";
import am66 from "../../../../assets/img/Amenities/upgraded 2.png";
import am67 from "../../../../assets/img/Amenities/BBQ 1.png";
import am68 from "../../../../assets/img/Amenities/Office 1.png";
import "./Amenities.scss";

const Amenities = (props) => {
  const slidesData = [
    {
      thumbnail: am1,
      title: "Balcony",
    },
    {
      thumbnail: am1,
      title: "Spacious Balconies",
    },
    {
      thumbnail: am2,
      title: "Sauna",
    },
    {
      thumbnail: am3,
      title: "Covered car parking",
    },
    {
      thumbnail: am3,
      title: "Dedicated Parking",
    },
    {
      thumbnail: am3,
      title: "Covered Parking",
    },
    {
      thumbnail: am3,
      title: "Plenty of Parking Space",
    },
    {
      thumbnail: am23,
      title: "Children play area",
    },
    {
      thumbnail: am47,
      title:
        "Indoor & Outdoor Kids Play Area with Shaded Structures & Rubber Mats",
    },
    {
      thumbnail: am4,
      title: "Children’s play room",
    },
    {
      thumbnail: am5,
      title: "Gymnasium",
    },
    {
      thumbnail: am5,
      title: "Equipped Gym",
    },
    {
      thumbnail: am6,
      title: "Dining",
    },
    {
      thumbnail: am7,
      title: "Terrace",
    },
    {
      thumbnail: am8,
      title: "Laundry Room",
    },
    {
      thumbnail: am53,
      title: "Swimming pool",
    },
    {
      thumbnail: am53,
      title: "360-Degree infinity pool",
    },
    {
      thumbnail: am9,
      title: "Temperature controlled pool",
    },
    {
      thumbnail: am9,
      title: "Large Temperature Controlled Pool",
    },
    {
      thumbnail: am10,
      title: "Furnished",
    },
    {
      thumbnail: am11,
      title: "Security Staff",
    },
    {
      thumbnail: am11,
      title: "Maintenance Staff",
    },
    {
      thumbnail: am12,
      title: "24/7 Security",
    },
    {
      thumbnail: am12,
      title: "CCTV Security",
    },
    {
      thumbnail: am13,
      title: "Maids Room",
    },
    {
      thumbnail: am14,
      title: "Private Garden",
    },
    {
      thumbnail: am14,
      title: "Garden",
    },
    {
      thumbnail: am15,
      title: "Jacuzzi",
    },
    {
      thumbnail: am16,
      title: "Pantry",
    },
    {
      thumbnail: am59,
      title: "Floor to ceiling windows",
    },
    {
      thumbnail: am37,
      title: "Modern fitted kitchen",
    },
    {
      thumbnail: am37,
      title: "Kitchen",
    },
    {
      thumbnail: am56,
      title: "Fitted wardrobes",
    },
    {
      thumbnail: am56,
      title: "Built-in wardrobes",
    },
    {
      thumbnail: am54,
      title: "En-suite bathrooms",
    },
    {
      thumbnail: am20,
      title: "Bathroom",
    },
    {
      thumbnail: am41,
      title: "Spinneys market",
    },
    {
      thumbnail: am22,
      title: "costa cafe",
    },
    {
      thumbnail: am46,
      title: "pharmacy",
    },
    {
      thumbnail: am17,
      title: "Air Conditioning (A/C)",
    },
    {
      thumbnail: am19,
      title: "Spacious Apartments",
    },
    {
      thumbnail: am17,
      title: "Chilled Water Air Conditioning",
    },
    {
      thumbnail: am49,
      title: "Community Center for Events {Birthdays, Gathering)",
    },
    {
      thumbnail: am36,
      title: "Audio Video Intercom System",
    },
    {
      thumbnail: am34,
      title: "Separate Gyms for Male & Female",
    },
    {
      thumbnail: am34,
      title: "Health and Fitness Gym or Health Club",
    },
    {
      thumbnail: am39,
      title: "Free Maintenance",
    },
    {
      thumbnail: am39,
      title: "24/7 maintenance",
    },
    {
      thumbnail: am39,
      title: "Cleaning and Maintenance",
    },
    {
      thumbnail: am24,
      title: "Free Chiller",
    },
    {
      thumbnail: am28,
      title: "Pet Policy",
    },
    {
      thumbnail: am28,
      title: "Pet friendly",
    },
    {
      thumbnail: am38,
      title: "Storage Room",
    },
    {
      thumbnail: am50,
      title: "Technology Satellite/Cable TV",
    },
    {
      thumbnail: am35,
      title: "Restaurants",
    },
    {
      thumbnail: am65,
      title: "Luxurious lobby",
    },
    {
      thumbnail: am29,
      title: "Double Glazed Windows",
    },
    {
      thumbnail: am21,
      title: "Bus Stop",
    },
    {
      thumbnail: am48,
      title: "Prime Location, on the main road in RAK",
    },
    {
      thumbnail: am66,
      title: "Upgraded and Renovated",
    },
    {
      thumbnail: am62,
      title: "Easy Access in and out",
    },
    {
      thumbnail: am63,
      title: "Easy access road to Sheikh Mohd Bin Zayed",
    },
    {
      thumbnail: am63,
      title: "Easy access to Sheikh Zayed",
    },
    {
      thumbnail: am32,
      title: "Full Glass Facade With",
    },
    {
      thumbnail: am52,
      title: "Across Al Manar Mall",
    },
    {
      thumbnail: am63,
      title: "5 Minutes to Rak Expo Center",
    },
    {
      thumbnail: am64,
      title: "Back of Shop Office Spaces",
    },
    {
      thumbnail: am25,
      title: "Conference Room",
    },
    {
      thumbnail: am60,
      title: "Washroom",
    },
    {
      thumbnail: am43,
      title: "Prayer Room + Ablution Facility",
    },
    {
      thumbnail: am48,
      title: "Easy Access to Main Road",
    },
    {
      thumbnail: am58,
      title: "Loading Bay with Mechanized Dock Leveler",
    },
    {
      thumbnail: am30,
      title: "Power Load – 150Kw",
    },
    {
      thumbnail: am52,
      title: "Oasis Shopping Center",
    },
    {
      thumbnail: am55,
      title: "Union co-op",
    },
    {
      thumbnail: am31,
      title: "Adnoc Service Station",
    },
    {
      thumbnail: am45,
      title: "Nearby Petrol Station",
    },
    {
      thumbnail: am57,
      title: "warehouses",
    },
    {
      thumbnail: am58,
      title: "Shell and core allows for tailor-made specification",
    },
    {
      thumbnail: am58,
      title: "Efficient loading & off-loading area",
    },
    {
      thumbnail: am54,
      title: "Shops with attached toilets",
    },
    {
      thumbnail: am61,
      title: "Direct access to Nakheel Mall and St. Regis hotel",
    },
    {
      thumbnail: am67,
      title: "Barbeque Area",
    },
    {
      thumbnail: am68,
      title: "Fitted Offices",
    },
  ];
  return (
    <>
      {props?.singleProperty?.amenities?.sortings?.length > 0 && (
        <div className="Amenities container">
          <h2 className={"Title"}>
            {/* {console.log(props?.singleProperty?.amenities?.sortings?.length, "props?.singleProperty?.amenities?.sortings")} */}
            {props?.singleProperty?.amenities?.name}
          </h2>
          <div className="row">
            {props?.singleProperty?.amenities?.sortings?.map(
              (slides, index) => (
                <div className={"mb-3 col"} key={index}>
                  <Card>
                    <Card.Body>
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        {/* {
                                                console.log("slides", slidesData.filter((x) => x.title === slides)[0] === undefined)
                                            } */}
                        {slidesData.filter((x) => x.title === slides)[0] ===
                        undefined ? (
                          ""
                        ) : (
                          <img
                            src={
                              slidesData.filter((x) => x.title === slides)[0]
                                .thumbnail
                            }
                            className={"amenitiesIcons"}
                            alt={"Icon"}
                          />
                        )}
                        <p className={"subtitle"}>{slides}</p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Amenities;
