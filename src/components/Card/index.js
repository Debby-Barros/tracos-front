import React from "react";
import { CardContainer, CardContent, ActionButton, P } from "./styles";
import { useNavigate } from "react-router-dom";

export function Card({ product }) {
  const navigate = useNavigate();

  return (
    <CardContainer>
      <CardContent>
        <img src={product.pictureUrl} alt="Product" style={{ height: "200px", width: "200px" }} />
        <span className="description">
          <h1>{product.name}</h1>
          <P>{product.description}</P>
        </span>
      </CardContent>
      <ActionButton onClick={() => navigate(`/product/${product.id}`)} type={product.donation}>{product.donation === false ? "troca" : "doação"} </ActionButton>
    </CardContainer>
  );  
}
