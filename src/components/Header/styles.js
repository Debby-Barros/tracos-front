import { theme } from "../../global/theme";
import styled, { createGlobalStyle } from "styled-components";
import SVG from "react-inlinesvg";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Poppins', sans-serif;

    }
`;

export const Logosvg = styled(SVG)`
  width: 100px;
  height: 100px;
`;

export const LogoContainer = styled.header`
  display: flex;
  /* padding-bottom: 40px; */
`;
export const Container = styled.div`
  padding: 0 48px;
  background-color: ${theme.colors.primary};
  /* width: 100%; */
  height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  color: ${theme.fontColor.colorTitle};
  font-weight: bold;
`;

export const NavigationMenu = styled.nav`
  display: flex;
  gap: 24px;
  align-items: center;
`;