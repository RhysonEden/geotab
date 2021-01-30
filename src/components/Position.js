import React from "react";
import Gmap from "./Gmap";
const { REACT_APP_GOOGLE_KEY } = process.env;
function Position({ position }) {
  let driver = JSON.parse(localStorage.getItem("driver"));
  let latitude = position.latitude;
  let longitude = position.longitude;
  if (driver) {
    return (
      <>
        {position.bearing !== 0 && (
          <>
            <p>Driver is {position.isDriving ? "currently" : "not"} driving</p>
            {/* <p>Latitude = {latitude}</p>
            <p>Longtitude = {longitude}</p> */}
            <Gmap latitude={latitude} longitude={longitude} />
            {/* <p>API = {REACT_APP_GOOGLE_KEY}</p> */}
          </>
        )}
        {position.bearing === 0 && (
          <>
            <p>No Driver Data Found</p>
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        <p> Please select Driver</p>
      </>
    );
  }
}

export default Position;
