// https://usehooks.com/useAuth/
import React, { useState, useEffect, useContext, createContext } from "react";
import toast from "react-hot-toast";

const authContext = createContext({});

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      setSession(await getSession());
    };
    fetchSession();
  }, []);

  const getSession = async () => {
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

    // ejemplo error
    // const session = null;
		// toast.error("Session Error");

    return session;
  };

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = async (email, password) => {
    // return firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     setUser(response.user);
    //     return response.user;
    //   });
  };

  return { session, signin };
}
