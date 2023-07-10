import React from "react";
import Logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  GlobalStyle,
  LogoContainer,
  Logosvg,
  NavigationMenu,
  Title
} from "./styles";
import { Button } from "../Button";
import jwt_decode from 'jwt-decode';

export function Header({ name = "Debora" }) {

  const navigate = useNavigate();

  const getUserInfo = () => {
    const jwt_token = localStorage.getItem('jwt-token');

    if (jwt_token === undefined || jwt_token === null) {
      navigate('/');
    } else {
      return jwt_decode(jwt_token);
    }
  }

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
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <Button content={getUserInfo().nickname} />
        </Link>
        <Link to="/announce" style={{ textDecoration: 'none' }}>
          <Button content="anunciar" />
        </Link>
      </NavigationMenu>
    </Container>
  );
}
