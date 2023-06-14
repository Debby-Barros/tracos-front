import React from "react";
import { Link } from "react-router-dom";
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

export function SignIn() {
    return(
      <Container>
        <GlobalStyle/>
        <FormContainer>
          <LogoContainer>
            <Logosvg
              src={Logo}        
              />
          </LogoContainer>
          <Form>
            <Title>login</Title>
            <InputTitle>email</InputTitle>
            <Input 
              type="email"
              required
            />
            <InputTitle>senha</InputTitle>
            <Input
              type="password"
              required
            />
            <br/>
            <ButtonContainer>
              <RegisterLink>
                <Link to="/cadastro" style={{
                  textDecoration: 'none',
                  color: '#FFB627',
                }}>
                  criar conta
                </Link>    
              </RegisterLink>

              <Link to="/home"> 
                <Button
                  type="submit"
                >entrar
                </Button> 
              </Link> 
            </ButtonContainer>
            
          </Form>
        </FormContainer>
      </Container>
    )
}