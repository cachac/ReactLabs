import React, { useState, useEffect } from "react";
import "./App.css";
import PageTitle from "./components/titleFx";
import Buttons from "./components/buttonFx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBomb } from "@fortawesome/free-solid-svg-icons";

const Counter = ({ title }) => {
  const [useTitle, setTitle] = useState(title);
  const [useCount, setCount] = useState(
    Number(localStorage.getItem("count") || 0)
  );

  const handleChange = (value) => {
    console.log(`Change Handled: ${value}`);
    setCount(value);
    localStorage.setItem("count", value);
  };

  const reset = () => {
    console.log("rest");
    setTitle(`Contador reiniciado (${useCount})`);
    setCount(0);
    localStorage.setItem("count", 0);
  };

  /* Best Practice: useEffect, para administrar el Storage */
  // useEffect(() => {
  //   console.log("useEffect hook 💥");
  //   localStorage.setItem("count", useCount);
  // }, [useCount]); // // dependency array: [value, n] = update

  return (
    <div className="App">
      <header className="App-header">
        <PageTitle title={useTitle} count={useCount} />
        <Buttons count={useCount} onHandleChange={handleChange}>
          <FontAwesomeIcon icon={faBolt} />
        </Buttons>
        {/* Ternary */}
        {useCount > 5 ? (
          <h4>El valor es mayor a 5</h4>
        ) : (
          <h4>El valor es menor a 5</h4>
        )}

        {/* &&  */}
        {useCount > 10 && <FontAwesomeIcon onClick={reset} icon={faBomb} />}
      </header>
    </div>
  );
};

export default Counter;
