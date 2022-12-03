import styled from "styled-components";

export const Base = styled.div`
  display: flex;
`;

export const Container = styled(Base)`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const ArrayContainer = styled(Base)`
flex-direction: column;
  gap: 10px;
  margin: 20px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: bold;
`;

export const ArrayItem = styled.div``;
