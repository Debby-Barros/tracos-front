import React, { useState } from "react";
import { Container, GlobalStyle, Cards } from "./styles";

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";

export function HomePage() {
  const [search, setSearch] = useState("");

  const PRODUCTS = [
    {
      name: "Paçoca",
      description: "Product description example",
      type: "troca",
      image: "https://picsum.photos/200",
    },
    {
      name: "Product",
      description: "Product description example",
      type: "troca",
      image: "https://picsum.photos/200",
    },
    {
      name: "Product",
      description: "Product description example",
      type: "troca",
      image: "https://picsum.photos/200",
    },
    {
      name: "Product",
      description: "Product description example",
      type: "doação",
      image: "https://picsum.photos/200",
    },
    {
      name: "salve",
      description: "salve description example",
      type: "troca",
      image: "https://picsum.photos/200",
    },
    {
      name: "ulala",
      description: "ulala description example",
      type: "troca",
      image: "https://picsum.photos/200",
    },
    {
      name: "Product",
      description: "Product description example",
      type: "troca",
      image: "https://picsum.photos/200",
    },
  ];

  const filteredProducts = PRODUCTS.filter((product) =>
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
            {filteredProducts.map((product) => (
              <Card product={product} />
            ))}
          </Cards>
        )}
      </Container>
    </>
  );
}
