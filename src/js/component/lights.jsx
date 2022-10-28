import React, { useState, useEffect } from "react";

// Declaring variables and functions ----------------------------------------------------------------------------------------------------------------------------------------------------------
const Lights = (props) => {
  const [light, setlight] = useState(false);
  const [light2, setlight2] = useState(false);
  const [light3, setlight3] = useState(false);

  // first attempt of declaring an if statement para encender una luz a la vez. (fallido)--------------------------------------------------------------------------------------------------
  // if (setLight) {
  //     button = <button onClick={changeLight} />;
  //   } else {
  //     button = <button onClick={() => {}} />;
  //   } ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  const changeLight = (event) => {
    console.log("selectedLight");
    setlight((current) => !current);
    setlight2(false);
    setlight3(false);
  };

  const changeLight2 = (event) => {
    console.log("selectedLight2");
    setlight2((current2) => !current2);
    setlight(false);
    setlight3(false);
  };

  const changeLight3 = (event) => {
    console.log("selectedLight3");
    setlight3((current3) => !current3);
    setlight(false);
    setlight2(false);
  };

  //  declaring html------------------------------------------------------------------------
  return (
    <>
      <div className=" trafficTop"></div>
      <div className="container">
        <div className="redLight">
          {" "}
          <button
            id="red"
            className={light ? "selected" : ""}
            onClick={() => {
              changeLight();
            }}
            type="button"
          >
            {" "}
          </button>{" "}
        </div>
        <div className="yellowLight">
          {" "}
          <button
            id="yellow"
            className={light2 ? "selected2" : ""}
            onClick={() => {
              changeLight2();
            }}
            type="button"
          >
            {" "}
          </button>
        </div>
        <div className="greenLight">
          {" "}
          <button
            id="green"
            className={light3 ? "selected3" : ""}
            onClick={() => {
              changeLight3();
            }}
            type="button"
          >
            {" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Lights;
