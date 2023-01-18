import React, { useState, useContext } from "react";
import "./App.css";
import PageTitle from "./components/titleFx";
import Buttons from "./components/buttonFx";
import Input from "./components/inputLifting";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faBomb,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { useLocalStorage } from "./useLocalStorage";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "./Session";

const Counter = ({ title }) => {
  const [useTitle, setTitle] = useState(title);
  const [useList, setList] = useState([]);
  const [useCount, setCount] = useLocalStorage("count", 0);
  const navigate = useNavigate();
  const { name, id } = useContext(SessionContext);

  const handleChange = (value) => {
    console.log(`Change Handled: ${value}`);
    setCount(value);
    setList([...useList, value]);
  };

  const reset = () => {
    console.log("rest");
    setTitle(`Contador reiniciado (${useCount})`);
    setCount(0);
    setList([]);
  };

  const handleInputChange = (e) => {
    setCount(Number(e.target.value));
    setList([...useList, e.target.value]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <PageTitle title={useTitle} count={useCount} />
        <Buttons count={useCount} onHandleChange={handleChange}>
          <FontAwesomeIcon icon={faBolt} />
        </Buttons>
        <Input num={useCount} onHandleInputChange={handleInputChange} />
        {/* Ternary */}
        {useCount > 5 ? (
          <h4>El valor es mayor a 5</h4>
        ) : (
          <h4>El valor es menor a 5</h4>
        )}
        {/* &&  */}
        {useCount > 10 && <FontAwesomeIcon onClick={reset} icon={faBomb} />}
        {/* List */}
        <div className="listContainer">
          {useList.map((num) => (
            <span className="list">{num}</span>
          ))}
        </div>
        <button className="button" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faBackwardStep} />
        </button>
        {/* session */}
        <p>
          Sesion: {name}--{id}
        </p>
      </header>
    </div>
  );
};

export default Counter;
