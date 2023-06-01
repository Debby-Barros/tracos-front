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
  ButtonContainer
} from "./styles";

export function SignUp() {
  return (
    <Container>
      <FormContainer>
        <Form>
          <Title>Cadastro</Title>
          <InputTitle>nome completo</InputTitle>
          <Input
            type="text"
            required
          />
          <InputTitle>apelido</InputTitle>
          <Input
            type="text"
            required
            />
            <InputTitle>CPF</InputTitle>
            <Input
              type="text" 
              required
            />
            <InputTitle>telefone</InputTitle>
            <Input
              type="tel"
              required
            />
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
            <InputTitle>confirmar senha</InputTitle>
            <Input
              type="password"
              required
            />
            <br/>
            <ButtonContainer>
              <RegisterLink>
                <Link to="/" style={{
                  textDecoration: 'none',
                  color: '#FFB627'
                }}>
                  registrar
                </Link>    
              </RegisterLink>
              <Button  
                type="submit"
              >cadastrar</Button> 
            </ButtonContainer>

          </Form>
      </FormContainer>
    </Container>
  )
}