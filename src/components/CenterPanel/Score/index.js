import { useBattlefield } from "../../../context/BattlefieldContext"
import { useGame } from "../../../context/GameContext"
import * as S from "./styles"

export const Score = () => {
  const { namePlayer, points, isBot } = useGame()
  const { move } = useBattlefield()

  const { player1, player2, bot } = namePlayer

  return (
    <S.Container>
      <S.ScorePlayer>{points.player1}</S.ScorePlayer>
      <S.WrapperBox>
        <S.Title>Placar</S.Title>
        <S.Player>{move === "X" ? player1 : (!isBot ? player2 : bot)}</S.Player>
      </S.WrapperBox>
      <S.ScorePlayer>{points.player2}</S.ScorePlayer>
    </S.Container>
  )
}
