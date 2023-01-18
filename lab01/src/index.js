import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Counter } from "./Class";
// import  Counter  from "./Functional";
// import { Counter } from "./Mount";
// import Counter from "./Hooks";
// import {Counter} from "./ClassProp";
// import  Counter  from "./HooksProp";
// import Counter from "./01";
// import Counter from "./Subcomponents";
// import Counter from "./02-1";
// import Counter from "./CallbackFx";
// import Counter from "./ConditionalRender";
// import Counter from "./LocalStorage";
// import Counter from "./CustomHook";
// import Counter from "./PropTypes";
// import Counter from "./04";
// import Counter from "./List";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Counter /> */}
    <Counter title="Mi Contador" buttonTitle="+" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
