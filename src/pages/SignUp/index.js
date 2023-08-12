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
  ButtonContainer
} from "./styles";
import api from "../../services/api";

export function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const handlePasswords = (repeatedPassword) => {
    // code to check if both passwords are the same
    if (password === repeatedPassword) {
      // condition
    }
  }
  const handleSubmit = (event) => {

    const formData = new FormData();

    formData.append('name', name);
    formData.append('nickname', nickname);
    formData.append('cpf', cpf);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('profilePicture', profilePicture);


    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    }

    api.post('/api/v0/users', formData, config).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    })
    navigate('/');
  }


  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Title>Cadastro</Title>
          <InputTitle>nome completo</InputTitle>
          <Input
            type="text"
            required
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <InputTitle>apelido</InputTitle>
          <Input
            type="text"
            required
            onChange={(event) => {
              setNickname(event.target.value);
            }}
          />
          <InputTitle>CPF</InputTitle>
          <Input
            type="text"
            required
            onChange={(event) => {
              setCpf(event.target.value);
            }}
          />
          <InputTitle>telefone</InputTitle>
          <Input
            type="tel"
            required
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            placeholder="(Opcional) será mostrado a outros usuários"
          />
          <InputTitle>email</InputTitle>
          <Input
            type="email"
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <InputTitle>senha</InputTitle>
          <Input
            type="password"
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <InputTitle>confirmar senha</InputTitle>
          <Input
            type="password"
            required
            onChange={(event) => {
              handlePasswords(event.target.value);
            }}
          />
          <InputTitle>Imagem de perfil</InputTitle>
          <Input
            type="file"
            accept=".jpg"
            name="pfp"
            onChange={(event) => {
              setProfilePicture(event.target.files[0]);
            }}
          />
          <br />
          <ButtonContainer>
            <RegisterLink>
              <Link to="/" style={{
                textDecoration: 'none',
                color: '#FFB627',
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