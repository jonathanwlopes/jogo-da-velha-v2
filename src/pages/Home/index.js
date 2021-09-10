import { CenterPanel } from "../../components/CenterPanel"
import { LeftPanel } from "../../components/LeftPanel"
import { RightPanel } from "../../components/RightPanel"
import * as S from "./styles"

export const Home = () => {
  return (
    <S.Container>
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </S.Container>
  )
}
