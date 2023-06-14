import searchIcon from "../../assets/search.svg";
import { Container, SearchInput, SearchButton } from "./styles";


export function Search({ onSearch }) {
  return (
    <Container>
      <SearchInput
        type="search"
        placeholder="Buscar produto..."
        onChange={(event) => onSearch(event.target.value)}
      />
      <SearchButton>
        <img src={searchIcon} alt="Search icon" width={16} />
      </SearchButton>
    </Container>
  );
}
