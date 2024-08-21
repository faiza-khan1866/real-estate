// // Map.js
// import React from "react";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";

// const PropertyMap = withScriptjs(
//   withGoogleMap((props) => (
//     <GoogleMap
//       defaultZoom={12}
//       defaultCenter={{ lat: 37.7749, lng: -122.4194 }} // Default center (San Francisco)
//     >
//       {props.properties.map((property) => (
//         <Marker
//           key={property.id}
//           position={{ lat: property.lat, lng: property.lng }}
//           title={property.name}
//         />
//       ))}
//     </GoogleMap>
//   ))
// );

// export default PropertyMap;

// Map.js
import React, { useState } from "react";
import MapModal from "../../map-modal/MapModal";

const PropertyMap = ({ properties }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container-mg-30 mb-4">
      <button className="viewmapbtn" onClick={() => setShowModal(true)}>
        <i className="fa fa-map-marker"></i> Map View
      </button>
      <MapModal
        show={showModal}
        onHide={() => setShowModal(false)}
        properties={properties}
      />
    </div>
  );
};

export default PropertyMap;
