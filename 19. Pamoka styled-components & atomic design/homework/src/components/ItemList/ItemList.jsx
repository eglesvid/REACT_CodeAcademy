import React from "react";
import { StyledDiv, StyledUl, StyledLi } from "./ItemList.styled";

export default function ItemList({ items }) {
  const handleClick = (item) => {
    console.log(item);
  };

  return (
    <StyledDiv>
      <StyledUl>
        {items.map((item, index) => (
          <StyledLi key={index} onClick={() => handleClick(item)}>
            {item}
          </StyledLi>
        ))}
      </StyledUl>
    </StyledDiv>
  );
}
