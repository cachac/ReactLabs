import { useState, useEffect } from "react";

export const useLocalStorage = (storageKey, defaultState) => {
  const [value, setValue] = useState(
    Number(localStorage.getItem(storageKey) || defaultState)
  );

  useEffect(() => {
    console.log("Custom Hook 💥");
    localStorage.setItem(storageKey, value);
  }, [value, storageKey]);

  return [value, setValue];
};
