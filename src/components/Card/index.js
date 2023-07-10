import React from "react";
import { CardContainer, CardContent, ActionButton } from "./styles";

export function Card({ product }) {

  return (
    <CardContainer>
      <CardContent>
        <img src={product.pictureUrl} alt="Product" style={{ height: 200 }} />
        <span className="description">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </span>
      </CardContent>
      <ActionButton type={product.donation}>{product.donation === false ? "troca" : "doação"}</ActionButton>
    </CardContainer>
  );
}
