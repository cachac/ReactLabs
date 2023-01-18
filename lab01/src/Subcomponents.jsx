import React, { useState } from "react";
import "./App.css";
import PageTitle from "./components/title";

const Counter = (props) => {
  const [title] = useState(props.title);
  const [buttonTitle] = useState(props.buttonTitle);

  return (
    <div className="App">
      <header className="App-header">
        <PageTitle title={title} />
        {/* <Buttons /> */}
      </header>
    </div>
  );
};

export default Counter;
