import React from "react";
import { Link } from "react-router-dom";
import 
{   Container, 
    GlobalStyle,
    FormContainer,
    Form,
    Title,
    InputTitle,
    Input,
    Button,
    ButtonContainer
} from "./styles";

import { Header } from "../../components/Header";

export function Profile() {
  return (
    <>
      <Header />
      <Container>
        <GlobalStyle />
        <FormContainer>
          <Form>
            <Title>meu perfil</Title>
            <InputTitle>apelido</InputTitle>
            <Input 
              type="text"
              required
            />
            <InputTitle>telefone</InputTitle>
            <Input
              type="tel"
              required
            />
            <InputTitle>senha</InputTitle>
            <Input
              type="password"
              required
            />
            <br/>
            <ButtonContainer>
              <Button
                type="submit"
              >editar
              </Button> 

              <Button
                type="submit"
              >salvar
              </Button> 
            </ButtonContainer>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
}