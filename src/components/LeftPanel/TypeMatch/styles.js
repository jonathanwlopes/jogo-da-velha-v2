import styled from "styled-components"

export const Container = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
`

export const Title = styled.span`
  color: #45f391;
`

export const WrapperBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Text = styled.span`
  color: #ffffff;
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
  border: 1px solid #FFFFFF;
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
    margin-left: ${(props) => (props.isBestOf ? "50px" : "")};
    transition: all 0.3s linear;
  }
`
