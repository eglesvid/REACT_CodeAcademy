import styled from "styled-components";

//nerasau export default, nes styled.js faile galim turet daugiau negu viena toki stiliu (turesim dar StyledDiv), del to eksportuojam nedefaultiniu budu
export const StyledButton = styled.button`
  background-color: red;
  color: yellow;
`;

export const StyledDiv = styled.div`
  background-color: blue;

  p {
    color: ${(props) => (props.color ? props.color : "white")};
  }

  &:hover {
    background-color: green;
  }
`; //galim nestinti ir duoti stilius; galim naudoti props; & reiskia sita elementa
