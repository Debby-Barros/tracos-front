import { Container } from "./styles";

export function Button({ picture, content }) {
  return (
    <Container>
      {picture ? (
        <>
          <img src={picture} alt="Profile picture" />
          <span>{content}</span>
        </>
      ) : (
        <span>{content}</span>
      )}
    </Container>
  );
}
