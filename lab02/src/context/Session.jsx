import React, { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const authContext = createContext({});

// hook
export const useAuth = () => {
  return useContext(authContext);
};

// provider
export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

// methods & vars
const useProvideAuth = () => {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  // async useEffect
  useEffect(() => {
    const fetchSession = async () => {
      setSession(await getSession());
    };
    fetchSession();
  }, []);

  const getSession = async () => {
    const session = {
      name: localStorage.getItem("name"),
      state: true,
      id: "123",
    };

    return session;
  };

  const signIn = async ({ email, password }) => {
    const data = await fetch("http://localhost:3001/user/JWT", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: email,
        password,
      }),
    }).then((res) => res.json());

    console.log("data", data);

    if (data.accessToken) {
      localStorage.setItem("reactLabs", JSON.stringify(data.accessToken));
      toast.success("Bienvenid@");
      navigate("/admin");
    } else toast.error(data.error || "Error de login");
  };

  const signUp = async ({ name, email, password }) => {
    const data = await fetch("http://localhost:3001/user/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname: name,
        username: email,
        password,
      }),
    }).then((res) => res.json());

    console.log("data", data);
    if (data.response === "User created") {
      navigate("/");
    } else {
      // toast.error(data?.errorMessage || "Error de registro");
      toast.error("Error de registro");
    }
  };

  return { session, signIn, signUp };
};
