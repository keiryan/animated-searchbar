import "./App.css";
import { Container, ArrayContainer, ArrayItem } from "./styles.app.js";
import Search from "./Search/search.js";

// List of items to display in the search results
const list = [
  "Apple",
  "Banana",
  "Cantaloupe",
  "Dragonfruit",
  "Elderberry",
  "Fig",
  "Grape",
  "Honey",
];

export default function App() {
  return (
    <Container>
      <Search list={list} />
      <ArrayContainer>
        {list.map((item) => (
          <ArrayItem key={list}>{item}</ArrayItem>
        ))}
      </ArrayContainer>
    </Container>
  );
}
