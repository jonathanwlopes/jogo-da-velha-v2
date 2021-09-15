import styled from "styled-components"

export const Container = styled.div`
  width: 95%;
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Play = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  font-weight: 700;
  color: #6a6a6a;
  background: #ffffff;
  border-radius: 10px;
  min-width: 32%;
  margin-bottom: 10px;
  padding: 14px 0;
  cursor: pointer;
  box-shadow: 0px 0px 0px #00000029;
  transition: all 0.15s linear;
  min-height: 11rem;
  &:hover {
    box-shadow: 0px 3px 6px #000000;
  }
`
