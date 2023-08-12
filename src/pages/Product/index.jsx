import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Header } from "../../components/Header";
import { Container, GlobalStyle, Title, Text, Description } from "./styles";

export function ProductPage() {
    const { id } = useParams()
    const [product, setProduct] = useState({});

    useEffect(() => {
        const jwt_token = localStorage.getItem('jwt-token');
        const headers = { 'Authorization': `Bearer ${jwt_token}` }

        api.get(`/api/v0/products/${id}`, { headers }).then((response) => {
            const data = response.data;
            setProduct(data);
        })
    }, [id])
    return (
        <>
            <Header />
            <Container>
                <GlobalStyle />
                <Title> {product.name} </Title>
                <img src={product.pictureUrl} alt='product shown' style={{width: "500px", margin: "auto", display:"block"}}/>
                <div>
                    <Description> Descrição </Description>
                </div>
                <Text>{product.description}</Text>
                {console.log(product.phone)}
                {product.phone === null ? (false) : (<><Description> Telefone </Description><Text>{product.phone}</Text></>)}
                <Description> email </Description>
                <Text>{product.email}</Text>

                 </Container>
        </>
    )
}





