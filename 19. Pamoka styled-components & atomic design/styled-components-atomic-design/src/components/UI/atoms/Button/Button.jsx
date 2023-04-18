import React from "react";
import { StyledButton, StyledDiv } from "./Button.styled";

export default function Button({ color }) {
  return (
    <div>
      <StyledButton onClick={() => console.log("hello")}>Hello</StyledButton>
      <StyledDiv color={color}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odit soluta voluptates
          ex atque eaque! Culpa eius doloribus explicabo. Optio nobis porro beatae sint iste
          repellendus iusto sequi dolores officia!
        </p>
      </StyledDiv>
    </div>
  );
}
