import { createContext, useContext, useState } from "react"

const GameContext = createContext({})

export const GameContextProvider = ({ children }) => {
  const [winner, setWinner] = useState("")
  const [points, setPoints] = useState({ player1: 0, player2: 0 })
  const [namePlayer, setNamePlayer] = useState({ player1: "Jonathan", player2: "Raul" })
  const [startGame, setStartGame] = useState(false)

  return (
    <GameContext.Provider value={{ winner, setWinner, points, setPoints, namePlayer, setNamePlayer, startGame, setStartGame }}>
      {children}
    </GameContext.Provider>
  )
}

export const useGame = () => {
  const context = useContext(GameContext)
  return context
}
