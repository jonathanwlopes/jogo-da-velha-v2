import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
`

export const Button = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 15px;
  cursor: pointer;
  color: #0097e6;
  font-size: 20px;
  background: #ffffff;

  transition: all .1ms linear;

  &:hover {
    box-shadow: 0px 3px 6px #cd5c5c;
  }
`
