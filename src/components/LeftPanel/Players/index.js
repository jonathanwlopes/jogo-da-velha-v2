import * as S from "./style"

export const Players = () => {
  return (
    <S.Container>

      <S.WrapperInput>
        <S.Input placeholder='Jogador 1'></S.Input>
      </S.WrapperInput>

      <S.WrapperInput>
        <S.Input placeholder='Jogador 2'></S.Input>
        <S.ToggleOption></S.ToggleOption>
      </S.WrapperInput>

    </S.Container>
  )
}
