import React, { useState } from "react";

type TranspiledProps = {};

const Transpiled: React.FC<TranspiledProps> = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      onClick={(): void => setCount(count + 1)}
      onKeyPress={(): void => setCount(count + 1)}
      role="button"
      tabIndex={0}
    >
      count: {count}
    </div>
  );
};

export default Transpiled;
