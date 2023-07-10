import styled from "styled-components";
import { theme } from "../../global/theme";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 475px;
  height: 192px;
  .action-button {
    width: 100px;
    align-self: flex-end;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 475px;
  background-color: #fff;
  .description h1, .description p{
    padding: 16px;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 2px 0;
  width: 100px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  background-color: ${(props) =>
    props.type === false ? theme.colors.orange : theme.colors.green};
  border: 0;
  /* width: 100%; */
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
  align-self: flex-end;
`;
