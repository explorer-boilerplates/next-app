import { keyframes, css } from "@emotion/core";

export const basicStyles = css`
  background-color: white;
  color: black;
  /* border: 1px solid lightgreen; */
  border-right: none;
  border-bottom: none;
  /* box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow; */
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`;

export const hoverStyles = css`
  &:hover {
    color: white;
    background-color: black;
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`;
export const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`;
