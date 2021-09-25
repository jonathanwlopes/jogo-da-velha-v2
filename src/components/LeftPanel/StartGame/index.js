import { useGame } from "../../../context/GameContext"
import * as S from "./styles"

export const StartGame = () => {
  const { setStartGame, startGame } = useGame()

  const handleStartGame = () => {
    setStartGame(true)
  }

  return (
    <S.Container>
      <S.Button disabled={startGame} onClick={handleStartGame}>
        Jogar
      </S.Button>
    </S.Container>
  )
}
