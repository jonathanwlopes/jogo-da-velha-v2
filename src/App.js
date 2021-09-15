import { BattlefieldProvider } from "./context/BattlefieldContext"
import { GameContextProvider } from "./context/GameContext"
import { Home } from "./pages/Home"
import { GlobalStyles } from "./styles"

function App() {
  return (
    <GameContextProvider>
      <BattlefieldProvider>
        <Home />
        <GlobalStyles />
      </BattlefieldProvider>
    </GameContextProvider>
  )
}

export default App
