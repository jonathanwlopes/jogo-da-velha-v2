import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
`

export const Title = styled.span`
  color: #ffffff;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
`

export const WrapperBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
`
export const WrapperWinner = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: #ffffff;
  border-radius: 10px;
  padding: 5px 10px;
`

export const Text = styled.span`
  color: #ffffff;
`
export const TextWinner = styled.span`
  color: #45f391;
  font-size: 20px;
  line-height: 25px;
`

export const TextName = styled.span`
  color: #6a6a6a;
  font-size: 14px;
`
export const MiniScenery = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 20%;
  height: 100%;
`

export const MiniSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6a6a6a;
  font-weight: 600;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  background-color: #ffffff;
  cursor: default;
  margin-bottom: 4px;
`