import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container, GlobalStyle, Title } from "./styles";
import { Cards } from "../HomePage/styles";
import { Card } from "../../components/Card";
import { Search } from "../../components/Search";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import jwt_decode from 'jwt-decode';

export function MyAnnounce() {

    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const jwt_token = localStorage.getItem('jwt-token');

        const headers = { 'Authorization': `Bearer ${jwt_token}` }

        const jwt_info = jwt_decode(jwt_token)
        console.log(jwt_info);

        api.get(`/api/v0/products/creator/${jwt_info.sub}`, { headers }).then((response) => {
            const data = response.data;
            if (data.length !== 0) {
                setProducts(data);
            }

        }).catch((error) => {
            if (error.response.status === 401) {
                localStorage.clear();
                navigate('/');
            } else {
                console.log(error);
            }
        })
    }, [navigate])

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Header />
            <Container>
                <GlobalStyle />
                <Title> Meus Anúncios </Title>
                <Search onSearch={setSearch} />
                {filteredProducts.length === 0 ? (
                    <p className="not-found">Produto não encontrado!</p>
                ) : (
                    <Cards>
                        {filteredProducts?.map((product) => (
                            <Card product={product} key={product.id} />
                        ))}
                    </Cards>
                    
                )}
            </Container>

        </>

    )

}