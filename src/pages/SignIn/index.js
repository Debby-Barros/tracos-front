import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  FormContainer,
  Form,
  Title,
  InputTitle,
  Input,
  Button,
  RegisterLink,
  ButtonContainer,
  GlobalStyle,
  Logosvg,
  LogoContainer
} from "./styles";

import Logo from "../../assets/logo.svg"
import api from "../../services/api";

export function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    api.post('/api/auth/login', {
      email: email,
      password: password
    }).then((response) => {
      if (!response) {
        return;
      }
      const data = response.data;
      const token = data.token;

      if (!token) {
        alert('Unable to login. Please try after some time.');
        return;
      }

      localStorage.clear();
      localStorage.setItem('auth-token', token);

      navigate('/home');
    }).catch((error) => {
      alert('Unable to login. Please try after some time.');
      console.log(error);
    })
  }

  return (
    <Container>
      <GlobalStyle />
      <FormContainer>
        <LogoContainer>
          <Logosvg
            src={Logo}
          />
        </LogoContainer>
        <Form onSubmit={handleLogin}>
          <Title>login</Title>
          <InputTitle>email</InputTitle>
          <Input
            type="email"
            required
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <InputTitle>senha</InputTitle>
          <Input
            type="password"
            required
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />
          <br />
          <ButtonContainer>
            <RegisterLink>
              <Link to="/cadastro" style={{
                textDecoration: 'none',
                color: '#FFB627',
              }}>
                criar conta
              </Link>
            </RegisterLink>

            <Button
              type="submit"
            >entrar
            </Button>
          </ButtonContainer>

        </Form>
      </FormContainer>
    </Container>
  )
}