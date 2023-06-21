import React from "react";
import 
{   Container, 
    GlobalStyle,
    FormContainer,
    Form,
    Title,
    InputTitle,
    Input,
    Button,
    ButtonContainer,
    SubTitle,
    Image,
    Img
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
            <Img>
              <Image src="https://picsum.photos/200" />
            </Img>
            <SubTitle>#apelido</SubTitle>
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
            <InputTitle>email</InputTitle>
            <Input 
              type="text"
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