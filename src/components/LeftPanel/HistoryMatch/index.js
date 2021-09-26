import { useGame } from "../../../context/GameContext"

import * as S from "./styles"

export const HistoryMatch = () => {
  const { sceneryWinner } = useGame()

  return (
    <S.Container>
      <S.Text>Histórico de Partidas</S.Text>
      <S.Content>
        {sceneryWinner.map((scenery, index) => {
          return (
            <S.WrapperBox key={`winner-${index}`}>
              <S.WrapperWinner>
                <S.TextWinner>{scenery.winner !== "Empate" ? "Vencedor" : ""}</S.TextWinner>
                <S.TextName>{scenery.winner}</S.TextName>
              </S.WrapperWinner>
              <S.Text>Cenário</S.Text>
              <S.MiniScenery>
                {scenery.newScenery.map((play, index) => (
                  <S.MiniSquare key={`play-${index}`}>{play}</S.MiniSquare>
                ))}
              </S.MiniScenery>
            </S.WrapperBox>
          )
        })}
      </S.Content>
    </S.Container>
  )
}
