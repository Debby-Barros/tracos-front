import React from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import {
  Container,
  GlobalStyle,
  LogoContainer,
  Logosvg,
  NavigationMenu,
  Title
} from "./styles";
import { Button } from "../Button";

export function Header({name="Debora"}) {
  return (
    <Container>
      <GlobalStyle />

      <Link to="/home">
        <LogoContainer>
          <Logosvg src={Logo} />
        </LogoContainer>
      </Link>
      <NavigationMenu>
        <Title>ranking</Title>
        <Title>meus anúncios</Title>
        <Link to="/profile" style={{textDecoration: 'none'}}>
          <Button content={name}  picture="https://picsum.photos/24"/>
        </Link>
        <Link to="/announce" style={{textDecoration: 'none'}}>
          <Button content="anunciar"/>
        </Link>
      </NavigationMenu>
    </Container>
  );
}
