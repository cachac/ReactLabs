import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { SessionContext } from "./Session";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SessionContext.Provider
      value={{
        name: "Carlos Chacon",
        id: "123",
      }}
    >
      <RouterProvider router={router} />
    </SessionContext.Provider>
  </React.StrictMode>
);
