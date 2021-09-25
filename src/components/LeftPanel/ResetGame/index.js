import { useGame } from "../../../context/GameContext"
import * as S from "./styles"

export const ResetGame = () => {
  const { startGame, handleReset } = useGame()

  return (
    <S.Container>
      <S.Button disabled={!startGame} onClick={handleReset}>
        Reiniciar
      </S.Button>
    </S.Container>
  )
}
