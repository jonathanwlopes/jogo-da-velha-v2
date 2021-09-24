import { useGame } from "../../../context/GameContext"
import * as S from "./style"

export const Players = () => {
  const { namePlayer, setNamePlayer } = useGame()

  return (
    <S.Container>
      <S.WrapperInput>
        <S.Input placeholder="Jogador 1" onChange={(e) => setNamePlayer({ ...namePlayer, player1: e.target.value })}></S.Input>
      </S.WrapperInput>

      <S.WrapperInput>
        <S.Input placeholder="Jogador 2" onChange={(e) => setNamePlayer({ ...namePlayer, player2: e.target.value })}></S.Input>
        <S.ToggleOption></S.ToggleOption>
      </S.WrapperInput>
    </S.Container>
  )
}
