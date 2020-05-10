import React, { useState } from "react";

// export default function CounterWithHooks({ initialCount = 0 }) {
//   const [count, setCount] = React.useState(initialCount)

//   const handleCountIncrement = React.useCallback(() => {
//     setCount(count + 1)
//   }, [count])

//   return (
//     <>
//       <div className="counter">{count}</div>
//       <button onClick={handleCountIncrement}>+</button>
//     </>
//   )
// }

type Counter = {
  readonly initialCount?: number;
};

const Counter: React.FC<Counter> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      <div className="counter">{count}</div>
      <button type="button" onClick={(): void => setCount(count + 1)}>
        +
      </button>
    </>
  );
};

export default Counter;
