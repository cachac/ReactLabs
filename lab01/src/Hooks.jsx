import React, { useState, useRef } from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  console.log("Render? 🤔");

  // // dependency array: [] = only on mount
  React.useEffect(() => {
    console.log("Hello 🙌");
  }, []);

  // return () =>: on unmount
  React.useEffect(() => {
    return () => {
      console.log("Bye 🤝");
    };
  }, []);

  // didMount.current, dep array [value]: only on update
  const didMount = useRef(false); // returns a mutable ref object
  React.useEffect(() => {
    if (didMount.current) {
      console.log("I run only if count changes. 💪");
    } else {
      didMount.current = true;
    }
  }, [count]);

  // return: only once
  const calledOnce = React.useRef(false);
  React.useEffect(() => {
    if (calledOnce.current) {
      return;
    }

    if (count === 1) {
      console.log("I run only once if count is 1. 😉");

      calledOnce.current = true;
    }
  }, [count]);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default Counter;
