import React, { useState } from "react";
import "./App.css";
import PageTitle from "./components/02-3";
import Buttons from "./components/02-2";

const Counter = (props) => {
  const [title] = useState(props.title);
  const [buttonTitle] = useState(props.buttonTitle);

  return (
    <div className="App">
      <header className="App-header">
        <PageTitle title={title} />
        <Buttons buttonTitle={buttonTitle} />
      </header>
    </div>
  );
};

export default Counter;
