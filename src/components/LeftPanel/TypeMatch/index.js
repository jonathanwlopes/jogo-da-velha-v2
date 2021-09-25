import { useGame } from "../../../context/GameContext"
import * as S from "./styles"

export const TypeMatch = () => {
  const { startGame, bestOf, setBestOf } = useGame()

  return (
    <S.Container>
      <S.Title>Tipo de Partida</S.Title>
      <S.WrapperBox>
        <S.Text>Melhor de 3</S.Text>
        <S.ToggleOption disabled={startGame} isBestOf={bestOf} onClick={() => setBestOf(!bestOf)}></S.ToggleOption>
        <S.Text>Melhor de 5</S.Text>
      </S.WrapperBox>
    </S.Container>
  )
}
