import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Container, GlobalStyle } from "./styles";

export function ProductPage() {
    const {id} = useParams()
    const [product, setProduct] = useState({});

    useEffect(() => {
        const jwt_token = localStorage.getItem('jwt-token');
        const headers = { 'Authorization': `Bearer ${jwt_token}`}
    
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
            <Card product={product} />
        </Container>
    </>
)
}





