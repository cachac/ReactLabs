import React, { useState, useEffect, useContext, createContext } from "react";

const authContext = createContext({});

export const useAuth = () => {
  return useContext(authContext);
};

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const useProvideAuth = () => {
  const [session, setSession] = useState(null);

  // async useEffect
  useEffect(() => {
    const fetchSession = async () => {
      setSession(await getSession());
    };
    fetchSession();
  }, []);

  const getSession = async () => {
    // TODO: aplicar fetch a base de datos
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // ejemplo autorizado
    const session = {
      name: localStorage.getItem("name"),
      state: true,
      id: "123",
    };

    // ejemplo no autorizado
    // const session = {
    // 	state: false,
    // };

    return session;
  };

  return { session };
};
