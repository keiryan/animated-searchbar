import { useState } from "react";
import {
  Container,
  StyledForm,
  StyledInput,
  ListContainer,
  ListItem,
  IconContainer,
} from "./styles.search";

export default function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const searchResultsList = props.list.filter((item) =>
      item.toLowerCase().includes(e.target.value)
    );

    if (e.target.value !== "") {
      setSearchResults([...searchResultsList]);
    } else {
      setSearchResults([]);
    }

    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  const handleClose = () => {
    setSearchResults([]);
    setSearchTerm("");
  };

  const opened = { open: searchResults.length !== 0 };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <IconContainer onClick={handleSubmit} opened={{ open: true }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#393939"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </IconContainer>
        <StyledInput
          placeholder="Search..."
          onChange={handleChange}
          value={searchTerm}
        />

        <IconContainer onClick={handleClose} opened={opened}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#393939"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </IconContainer>
      </StyledForm>
      <ListContainer opened={opened}>
        {searchResults.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </ListContainer>
    </Container>
  );
}
