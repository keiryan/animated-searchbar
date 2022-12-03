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
  flex-direction: column;
`;

export const ArrayContainer = styled(Base)`
 gap: 10px;
`;

export const ArrayItem = styled.div`
 
`;


