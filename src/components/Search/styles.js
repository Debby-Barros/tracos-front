import { styled } from "styled-components";
import { theme } from "../../global/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};
`;

export const SearchInput = styled.input`
  width: 500px;
  height: 32px;

  background: none;

  padding-left: 16px;

  border: 1px solid ${theme.colors.white};
  border-right: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  color: ${theme.colors.white};

  outline: none;
`;

export const SearchButton = styled.button`
  background: none;

  padding: 4px;
  height: 32px;

  border: 1px solid ${theme.colors.white};
  border-left: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  color: ${theme.colors.blue};

  outline: none;
  cursor: pointer;
`;
