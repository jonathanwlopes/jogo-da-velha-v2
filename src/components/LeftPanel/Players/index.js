import { useGame } from "../../../context/GameContext"

import * as S from "./style"

export const Players = () => {
  const { namePlayer, setNamePlayer, startGame, isBot, setIsBot } = useGame()

  return (
    <S.Container>
      <S.WrapperInput>
        <S.Input disabled={startGame} placeholder="Jogador 1" onChange={(e) => setNamePlayer({ ...namePlayer, player1: e.target.value })}></S.Input>
      </S.WrapperInput>

      <S.WrapperInput>
        <S.Input
          disabled={startGame | isBot}
          placeholder="Jogador 2"
          onChange={(e) => setNamePlayer({ ...namePlayer, player2: e.target.value })}
        ></S.Input>
        <S.ToggleOption disabled={startGame} isBot={isBot} onClick={() => setIsBot(!isBot)}></S.ToggleOption>
      </S.WrapperInput>
    </S.Container>
  )
}
