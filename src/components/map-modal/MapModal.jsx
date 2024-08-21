import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { Modal } from "react-bootstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./MapModal.scss";

const MapModal = (props) => {
  const mapContainerStyle = {
    width: "100%",
    height: "100vh",
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  }; // Default center (San Francisco)

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={"map-modal"}
      style={{ paddingLeft: "0px" }}
    >
      <Modal.Body>
        <span className={"modalIcon"} onClick={props.onHide}>
          <ArrowBackIcon />
        </span>
        <LoadScript
          googleMapsApiKey="AIzaSyC5sYYrJBA0rtJdECLmYbnwooKty_vTKsc"
          onError={() => console.error("Error loading Google Maps")}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={{
              lat: props?.properties?.[0]?.lat,
              lng: props?.properties?.[0]?.lng,
            }}
          >
            {props?.properties?.map((property) => (
              <Marker
                key={property.id}
                position={{ lat: property.lat, lng: property.lng }}
                title={property.name}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </Modal.Body>
    </Modal>
  );
};

export default MapModal;
