import { useBattlefield } from "../../../context/BattlefieldContext"
import * as S from "./styles"

export const Battlefield = () => {
  const { scenery, handleClickPlay } = useBattlefield()

  return (
    <S.Container>
      <S.Content>
        {scenery.map((play, position) => (
          <S.Play key={`position-${position}`} onClick={() => handleClickPlay(position)}>
            {play}
          </S.Play>
        ))}
      </S.Content>
    </S.Container>
  )
}
