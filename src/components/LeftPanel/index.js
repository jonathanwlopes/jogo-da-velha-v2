import { TypeMatch } from "./TypeMatch"
import { Players } from "./Players"
import { StartGame } from "./StartGame"
import * as S from "./styles"
import { HistoryMatch } from "./HistoryMatch"
import { ResetGame } from "./ResetGame"

export const LeftPanel = () => {
  return (
    <S.Container>
      <S.Content>
        <Players />
        <TypeMatch />
        <StartGame />
        <HistoryMatch />
        <ResetGame />
      </S.Content>
    </S.Container>
  )
}
