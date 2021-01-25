import React from "react";

function Position({ position }) {
 
  return (
    <>
          {position.map((position, index) => (
          
        <div key={position.bearing} value={position.id}>
          <p>Driver is {position.isDriving ? "currently" : "not"} driving</p>
          <p>Latitude = {position.latitude}</p>
          <p>Longtitude = {position.longitude}</p>
              </div>
      ))}
    </>
  );
}

export default Position;
