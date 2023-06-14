import { styled } from "styled-components";

export const Container = styled.button`
  width: 144px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background: none;
  border-radius: 24px;
  border: 2px solid;
  border-color: #fe9000;
  color: white;

  font-size: 16px;
  font-weight: bold;
  font-family: "Poppins";
  text-decoration: none;

  cursor: pointer;
  transition: all 200ms;

  &:hover {
    background-color: #fe9000;
    transition: all 200ms;
    color: black;
  }
`;
