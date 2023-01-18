import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>count: {count}</p>
      {val === 1 ?
			 <button onClick={() => setCount(count + 1)}>Click</button>
			:
			<></>
			}
    </div>
  );
};

export default Counter
