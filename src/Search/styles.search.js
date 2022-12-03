import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius:${props => props.open ? '8px 8px 0px 0px' : '8px'};
  position: relative;
  transition: all 0.3s ease-in-out;
  width: 600px;
`;

export const StyledForm = styled.form`
  display: flex;
  background-color: inherit;
  padding: 10px;
  align-items: center;
  border-radius: 8px;
  justify-content: space-between;
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: ${(props) => (props.opened.open ? "10px" : "0px")};
  max-height: ${(props) => (props.opened.open ? "1000px" : "0px")};
  transition: max-height 0.3s ease-in-out;
  position: absolute;
  top: calc(100% - 10px);
  width: 100%;
  border-top: ${props => props.opened.open ? '1px solid #e0e0e0' : 'none'};
  border-radius: 0 0 8px 8px;
`;

export const ListItem = styled.div`
  padding: 10px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: #f2f2f2;
    cursor: pointer;
    font-weight: bold;
  }
`;

export const IconContainer = styled.div`
  display: ${(props) => (props.opened.open ? "block" : "none")};
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
