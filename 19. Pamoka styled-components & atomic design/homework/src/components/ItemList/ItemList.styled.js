import styled from "styled-components";

export const StyledDiv = styled.div`
  height: 100%;
  width: 60%;
  background: #1a2b34;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

export const StyledUl = styled.ul`
  width: 70%;
  padding-left: 0;
`;

export const StyledLi = styled.li`
  color: #1a2b34;
  background-color: orange;
  list-style-type: none;
  text-align: center;
  border-radius: 30px;
  padding: 10px 0;
  font-size: 20px;
  font-family: Georgia, serif;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #6868ac;
    font-size: 27px;
  }
`;
