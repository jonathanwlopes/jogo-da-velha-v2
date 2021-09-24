import styled from "styled-components"

export const Container = styled.div`
  margin-bottom: 45px;
  width: 100%;
`

export const Button = styled.button`
  width: 100%;
  background: ${(props) => (props.disabled ? "#f2f2f266" : "#45f39166")};
  border: none;
  border-radius: 15px;
  color: #f2f2f2;
  box-shadow: 0px 3px 6px #00000029;
  height: 50px;
  cursor: pointer;
  transition: 300ms;
  font-size: 18px;

  &:hover {
    filter: brightness(105%);
  }
`
