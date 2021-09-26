import { useBattlefield } from "../../../context/BattlefieldContext"
import { useGame } from "../../../context/GameContext"
import * as S from "./styles"

export const HistoryPlays = () => {
  const titleSequence = ["Primeiro", "Segundo", "Terceiro", "Quarto", "Quinto", "Sexto", "Setimo", "Oitavo", "Nono"]

  const { plays, setScenery } = useBattlefield()
  const { namePlayer, isBot } = useGame()

  const { player1, player2, bot } = namePlayer

  const handleBackPlays = (position) => {
    setScenery(plays[position].sceneryBack)
  }

  return (
    <S.Container>
      <S.Title>Histórico de Jogadas</S.Title>
      <S.Content>
        {plays.map((play, position) => (
          <S.WrapperBox key={`play-${position}`} onClick={() => handleBackPlays(position)}>
            <S.Play>{play.movePlay}</S.Play>
            <S.WrapperPlayer>
              <S.Player>{play.movePlay === "X" ? player1 : !isBot ? player2 : bot}</S.Player>
              <S.SquarePlay>{`${titleSequence[play.movePosition]} quadrado`}</S.SquarePlay>
            </S.WrapperPlayer>
          </S.WrapperBox>
        ))}
      </S.Content>
    </S.Container>
  )
}
