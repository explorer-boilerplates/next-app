import React, { MouseEventHandler } from "react";

type HelloWorldProps = {
  name?: string;
  click: (arg: string) => MouseEventHandler;
};

const HelloWorld: React.FC<HelloWorldProps> = ({ name, click }) => {
  return (
    <div>
      <button type="button" onClick={click(`Hi ${name}`)}>
        Say Hi
      </button>
    </div>
  );
};

export default HelloWorld;
