import { createBrowserRouter } from "react-router-dom";
// import Counter from "./ListRouter";
import Counter from "./ListContext";
import Menu from "./Menu";
// import Menu from "./05";
import "./index.css";

export default createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/contador",
    element: <Counter title="Mi Contador" buttonTitle="+" />,
  },
]);
