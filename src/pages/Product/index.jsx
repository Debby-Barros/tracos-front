import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { Header } from "../../components/Header";
import { Container, GlobalStyle, Title, Text, Description } from "./styles";
import { PopUp } from "../../components/Popup";

export function ProductPage() {

    const navigate = useNavigate()

    const { id } = useParams()
    const [product, setProduct] = useState({});

    useEffect(() => {
        const jwt_token = localStorage.getItem('jwt-token');
        const headers = { 'Authorization': `Bearer ${jwt_token}` }

        api.get(`/api/v0/products/${id}`, { headers }).then((response) => {
            const data = response.data;
            setProduct(data);
        }).catch((error) => {
            if (error.response.status === 401) {
                localStorage.clear();
                navigate('/');
            } else {
                if (error.response.status === 404) {
                    navigate('/home');
                }
                console.log(error);
            }
        })
    }, [id])
    return (
        <>
            <Header />
            <Container>
                <GlobalStyle />
                <Title> {product.name} </Title>
                {product.pictureUrl === '' ? (false) : (<img src={product.pictureUrl} alt='product shown' style={{ width: "200px", margin: "auto", display: "block" }} />)}
                <div>
                    <Description> Descrição </Description>
                </div>
                <Text>{product.description}</Text>
                {product.phone === null ? (false) : (<><Description> Telefone </Description><Text>{product.phone}</Text></>)}
                <Description> email </Description>
                <Text>{product.email}</Text>
                <PopUp productId={product.id} />
            </Container>
        </>
    )
}





