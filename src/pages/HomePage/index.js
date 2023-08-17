import React, { useEffect, useState } from "react";
import { Container, GlobalStyle, Cards } from "./styles";

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export function HomePage() {

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const jwt_token = localStorage.getItem('jwt-token');

    const headers = { 'Authorization': `Bearer ${jwt_token}` }

    api.get('/api/v0/products', { headers }).then((response) => {
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

  // console.log(filteredProducts);

  return (
    <>
      <Header />
      <Search onSearch={setSearch} />
      <Container>
        <GlobalStyle />

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
  );
}
