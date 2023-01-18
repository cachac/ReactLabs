import React from "react";

const Counter = (props) => {
  React.useEffect(() => {
    console.log("Hello");
  }, []);

  React.useEffect(() => {
    return () => {
      console.log("Bye");
    };
  }, []);

  const [count, setCount] = React.useState(0);
  const [title] = React.useState(props.title);

  return (
    <div>
      <p>
        {title}: {count}
      </p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default Counter;
