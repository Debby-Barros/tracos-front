import React, { useState } from "react";
import {
  Container,
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
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';

export function Announce() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('livro');
  const [donation, setDonation] = useState(true);
  const [image, setImage] = useState('')
  const [saveImage, setSaveImage] = useState('');

  const handleSubmit = (event) => {
    const formData = new FormData();

    formData.append('name', name)
    formData.append('description', description)
    formData.append('category', category)
    formData.append('donation', donation)
    formData.append('productImage', saveImage)

    const jwt_token = localStorage.getItem('jwt-token');
    formData.append('owner', jwt_decode(jwt_token).sub);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        'Authorization': `Bearer ${jwt_token}`
      }
    }

    api.post('/api/v0/products', formData, config).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    })

    navigate('/home');
  }

  return (
    <>
      <Header />
      <Container>
        <GlobalStyle />
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Title>anunciar produto</Title>
            <Img>
              <Image src={image} style={{ height: 200 }} />
            </Img>
            <InputTitle>Imagem</InputTitle>
            <Input
              type="file"
              accept=".jpg"
              onChange={(event) => {
                setSaveImage(event.target.files[0])
                setImage(URL.createObjectURL(event.target.files[0]))
              }}
            />
            <InputTitle>nome do produto</InputTitle>
            <Input
              type="text"
              required
              onChange={(event) => {
                setName(event.target.value)
              }}
            />
            <InputTitle>descrição</InputTitle>
            <Input
              type="text"
              required
              onChange={(event) => {
                setDescription(event.target.value)
              }}
            />
            <InputTitle>categoria</InputTitle>
            <DropDown onChange={(event) => {
              setCategory(event.target.value)
            }}>
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
            <DropDown onChange={(event) => {
              setDonation(event.target.value)
            }}>
              <Option value={true}>doar</Option>
              <Option value={false}>trocar</Option>
            </DropDown>
            <br />
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