import { useBattlefield } from "../../../context/BattlefieldContext"
import { useGame } from "../../../context/GameContext"
import * as S from "./styles"

export const ResetGame = () => {
  const { startGame, resetGame } = useGame()
  const { resetBattlefield } = useBattlefield()

  const handleReset = () => {
    resetBattlefield()
    resetGame()
  }

  return (
    <S.Container>
      <S.Button disabled={!startGame} onClick={handleReset}>
        Reiniciar
      </S.Button>
    </S.Container>
  )
}
