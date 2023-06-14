import React from "react";
import { CardContainer, CardContent, ActionButton } from "./styles";

export function Card({ product }) {
  return (
    <CardContainer>
      <CardContent>
        <img src={product.image} alt="Product" />
        <span className="description">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </span>
      </CardContent>
      <ActionButton type={product.type}>{product.type}</ActionButton>
    </CardContainer>
  );
}
