import { Battlefield } from "./Battlefileld"
import { Score } from "./Score"
import * as S from "./style"

export const CenterPanel = () => {
  return (
    <S.Container>
      <S.Content>
        <Score />
        <Battlefield />
      </S.Content>
    </S.Container>
  )
}
