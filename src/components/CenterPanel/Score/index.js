import * as S from "./styles"

export const Score = () => {
  return (
    <S.Container>
      <S.ScorePlayer>01</S.ScorePlayer>
      <S.WrapperBox>
        <S.Title>Placar</S.Title>
        <S.Player>Nome do Jogador</S.Player>
      </S.WrapperBox>
      <S.ScorePlayer>02</S.ScorePlayer>
    </S.Container>
  )
}
