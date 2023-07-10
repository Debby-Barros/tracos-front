import React from "react";
import { CardContainer, CardContent, ActionButton } from "./styles";
import { useNavigate } from "react-router-dom";

export function Card({ product }) {
  const navigate = useNavigate();

  return (
    <CardContainer>
      <CardContent>
        <img src={product.pictureUrl} alt="Product" style={{ height: 200 }} />
        <span className="description">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </span>
      </CardContent>
      <ActionButton onClick={() => navigate(`/product/${product.id}`)} type={product.donation}>{product.donation === false ? "troca" : "doação"} </ActionButton>
    </CardContainer>
  );  
}
