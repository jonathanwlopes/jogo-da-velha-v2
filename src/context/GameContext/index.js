import { createContext, useContext, useState } from "react"

const GameContext = createContext({})

export const GameContextProvider = ({ children }) => {
  const [winner, setWinner] = useState("")

  return <GameContext.Provider value={{winner, setWinner}}>{children}</GameContext.Provider>
}

export const useGame = () => {
  const context = useContext(GameContext)
  return context
}
