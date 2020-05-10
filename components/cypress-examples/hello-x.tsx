import React, { useState } from "react";

type HelloXProps = {
  readonly name?: string;
};

// pass name via props
export const HelloX: React.FC<HelloXProps> = ({ name }) => {
  return <p>Hello {name}!</p>;
};

export const HelloState: React.FC<{}> = () => {
  const [name] = useState("Spider-man");
  return <HelloX name={name} />;
};
