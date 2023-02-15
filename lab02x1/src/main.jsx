import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProvideAuth } from "./context/Session";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProvideAuth>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Error!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>

    <Toaster
      position="top-center"
      toastOptions={{ className: "react-hot-toast" }}
    />
  </ProvideAuth>
);
