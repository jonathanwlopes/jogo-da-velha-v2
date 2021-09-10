import * as S from "./styles"

export const HistoryMatch = () => {
  return (
    <S.Container>
      <S.Text>Histórico de Partidas</S.Text>
      <S.Content>
        <S.WrapperBox>
          <S.WrapperWinner>
            <S.TextWinner>Vencedor</S.TextWinner>
            <S.TextName>Nome do Jogador</S.TextName>
          </S.WrapperWinner>
          <S.Text>Cenário</S.Text>
          <S.MiniScenery></S.MiniScenery>
        </S.WrapperBox>
      </S.Content>
    </S.Container>
  )
}
