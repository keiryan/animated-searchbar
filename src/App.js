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
      <ArrayContainer>
        Possible searches:
        {list.map((item) => (
          <ArrayItem key={item}>{item}</ArrayItem>
        ))}
      </ArrayContainer>
      <Search list={list} />
    </Container>
  );
}
