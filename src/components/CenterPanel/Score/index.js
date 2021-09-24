import { useBattlefield } from "../../../context/BattlefieldContext"
import { useGame } from "../../../context/GameContext"
import * as S from "./styles"

export const Score = () => {
  const { namePlayer, points } = useGame()
  const { move } = useBattlefield()
  return (
    <S.Container>
      <S.ScorePlayer>{points.player1}</S.ScorePlayer>
      <S.WrapperBox>
        <S.Title>Placar</S.Title>
        <S.Player>{move === "X" ? namePlayer.player1 : namePlayer.player2}</S.Player>
      </S.WrapperBox>
      <S.ScorePlayer>{points.player2}</S.ScorePlayer>
    </S.Container>
  )
}
