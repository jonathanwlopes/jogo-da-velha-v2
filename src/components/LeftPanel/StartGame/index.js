import { useGame } from "../../../context/GameContext"
import * as S from "./styles"

export const StartGame = () => {
  const { setStartGame, startGame } = useGame()

  return (
    <S.Container>
      <S.Button disabled={startGame} onClick={() => setStartGame(true)}>Jogar</S.Button>
    </S.Container>
  )
}
