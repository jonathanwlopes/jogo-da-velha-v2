import styled from "styled-components"

export const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100px;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  height: 40px;
`

export const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 5px;
`

export const ToggleOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 82px;
  height: 25px;
  background: #0097e6;
  border-radius: 50px;
  margin-right: 5px;
  border: 1px solid #ffffff;
  padding: 5px;
  pointer-events: ${(props) => (props.disabled ? "none" : "")};
  cursor: pointer;

  &:after {
    content: "";
    width: 18px;
    height: 18px;
    border-radius: 50px;
    background: #ffffff;
    display: inline-block;
    box-shadow: 0px 3px 6px #00000029;
    margin-left: ${(props) => (props.isBot ? "50px" : "")};
    transition: all 0.3s linear;
  }
`
