import React, { useState } from "react";
import "./App.css";
import PageTitle from "./components/titleFx";
import Buttons from "./components/buttonFx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const Counter = (props) => {
  const [title] = useState(props.title);
  const [buttonTitle] = useState(props.buttonTitle);
  const [count, setCount] = useState(0);

  const handleChange = (value) => {
    console.log(`Change Handled: ${value}`);
    setCount(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <PageTitle title={title} count={count} />
        <Buttons
          buttonTitle={buttonTitle}
          count={count}
          onHandleChange={handleChange}
        >
          <FontAwesomeIcon icon={faBolt} />
        </Buttons>
      </header>
    </div>
  );
};

export default Counter;
