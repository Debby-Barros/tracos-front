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
    Image,
    Img,
    DropDown,
    Option
} from "./styles";

import { Header } from "../../components/Header";

export function Announce() {
  return (
    <>
      <Header />
      <Container>
        <GlobalStyle />
        <FormContainer>
          <Form>
            <Title>anunciar produto</Title>
            <Img>
              <Image src="https://picsum.photos/200" />
            </Img>
            <InputTitle>nome do produto</InputTitle>
            <Input 
              type="text"
              required
            />
            <InputTitle>descrição</InputTitle>
            <Input
              type="text"
              required
            />
            <InputTitle>categoria</InputTitle>
            <DropDown>
                <Option>livro</Option>
                <Option>caderno</Option>
                <Option>caneta</Option>
                <Option>mochila</Option>
                <Option>lápis</Option>
                <Option>borracha</Option>
                <Option>estojo</Option>
                <Option>Pincel</Option>
                <Option>Marcador</Option>
            </DropDown>

            <InputTitle>doar ou trocar</InputTitle>
            <DropDown>
                <Option>doar</Option>
                <Option>trocar</Option>
            </DropDown>

            <InputTitle>CEP</InputTitle>
            <Input
              type="text"
              required
            />
            <br/>
            <ButtonContainer>
              <Button
                type="submit"
              >publicar
              </Button> 
            </ButtonContainer>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
}