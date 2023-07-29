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
    SubTitle,
    Image,
    Img
  } from "./styles";
  import jwt_decode from 'jwt-decode';
  
  import { Header } from "../../components/Header";
  import api from "../../services/api";
  import { useEffect, useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  
  
  export function EditProfile() {
  
    const navigate = useNavigate();
  
    const [apelido, setApelido] = useState('#Apelido')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [profilePicture, setProfilePicture] = useState('https://picsum.photos/200')
  
  
    useEffect(() => {
      const jwt_token = localStorage.getItem('jwt-token');
  
      const headers = { 'Authorization': `Bearer ${jwt_token}` }
  
      api.get(`/api/v0/users/${jwt_decode(jwt_token).sub}`, { headers }).then((response) => {
        const data = response.data;
        setApelido(data.nickname);
        setTelefone(data.phone);
        setEmail(data.email);
        if (data.pictureUrl.length !== 0) {
          setProfilePicture(data.pictureUrl);
        }
  
      }).catch((error) => {
        if (error.response.status === 401) {
          localStorage.clear();
          navigate('/');
        } else {
          console.log(error);
        }
      })
    });
  
    return (
      <>
        <Header />
        <Container>
          <GlobalStyle />
          <FormContainer>
            <Form>
              <Title>meu perfil</Title>
              <Img>
                <Image src={profilePicture} style={{ height: 200 }} />
              </Img>
              <SubTitle>{apelido}</SubTitle>
              
              <InputTitle>apelido</InputTitle>
              <Input type="text" value={apelido}/>
  
              <InputTitle>telefone</InputTitle>
              <Input type="tel" value={telefone}/>
  
              <InputTitle>email</InputTitle>
              <Input type="email" value={email}/>
              
              <InputTitle>senha</InputTitle>
              <Input type="password" />
         
              <br />
              <Link to="/profile">
                <ButtonContainer>
                    <Button
                    type="submit"
                    >salvar
                    </Button>
                </ButtonContainer>
              </Link>
            </Form>
          </FormContainer>
        </Container>
      </>
    );
  }