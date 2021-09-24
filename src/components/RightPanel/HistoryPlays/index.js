import { useBattlefield } from "../../../context/BattlefieldContext"
import * as S from "./styles"

export const HistoryPlays = () => {
  const { plays } = useBattlefield()

  return (
    <S.Container>
      <S.Title>Histórico de Jogadas</S.Title>
      <S.Content>
        {plays.map((play, index) => (
          <S.WrapperBox key={`play-${index}`}>
            <S.Play>{play.movePlay}</S.Play>
            <S.WrapperPlayer>
              <S.Player>Nome do Jogador</S.Player>
              <S.SquarePlay>Primeiro Quadrado</S.SquarePlay>
            </S.WrapperPlayer>
          </S.WrapperBox>
        ))}
      </S.Content>
    </S.Container>
  )
}
