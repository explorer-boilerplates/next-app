import React from "react";

type HelloWorldProps = {
  name: string;
  click?: () => void;
};

const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => {
  const sayHi = (): void => {
    // eslint-disable-next-line no-console
    console.log("about to alert");
    // eslint-disable-next-line no-alert
    alert(`Hi ${name}`);
  };

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" onClick={sayHi}>
        Say Hi
      </a>
    </div>
  );
};

export default HelloWorld;
