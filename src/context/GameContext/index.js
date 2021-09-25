import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { useBattlefield } from "../BattlefieldContext"

const GameContext = createContext({})

export const GameContextProvider = ({ children }) => {
  const [winner, setWinner] = useState("")
  const [points, setPoints] = useState({ player1: 0, player2: 0 })
  const [namePlayer, setNamePlayer] = useState({ player1: "Jonathan", player2: "Raul" })
  const [startGame, setStartGame] = useState(false)
  const [isBot, setIsBot] = useState(false)
  const [bestOf, setBestOf] = useState(false)
  const { setSceneryWinner } = useBattlefield()

  const handleReset = useCallback(() => {
    setStartGame(false)
    setPoints({ player1: 0, player2: 0 })
    setSceneryWinner([])
  }, [setSceneryWinner])

  useEffect(() => {
    const { player1, player2 } = points
    if (!bestOf && (player1 === 3 || player2 === 3)) handleReset()
    if (bestOf && (player1 === 5 || player2 === 5)) handleReset()
  }, [handleReset, points, bestOf])

  return (
    <GameContext.Provider
      value={{
        winner,
        setWinner,
        points,
        setPoints,
        namePlayer,
        setNamePlayer,
        startGame,
        setStartGame,
        isBot,
        setIsBot,
        bestOf,
        setBestOf,
        handleReset,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGame = () => {
  const context = useContext(GameContext)
  return context
}
