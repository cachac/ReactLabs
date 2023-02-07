import React, { useState } from "react";
import "./App.css";
import PageTitle from "./components/titleFx";
import Buttons from "./components/buttonFx";
import Input from "./components/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBomb } from "@fortawesome/free-solid-svg-icons";
import { useLocalStorage } from "./useLocalStorage";

const Counter = ({ title }) => {
  const [useTitle, setTitle] = useState(title);
  const [useCount, setCount] = useLocalStorage("count", 0);

  const handleChange = (value) => {
    console.log(`Change Handled: ${value}`);
    setCount(value);
  };

  const reset = () => {
    console.log("rest");
    setTitle(`Contador reiniciado (${useCount})`);
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <PageTitle title={useTitle} count={useCount} />
        <Buttons count={useCount} onHandleChange={handleChange}>
          <FontAwesomeIcon icon={faBolt} />
        </Buttons>

        {/* PROP TYPES */}
        <Input num={10} />

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
