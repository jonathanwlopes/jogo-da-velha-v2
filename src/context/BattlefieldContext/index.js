import { createContext, useContext, useState } from "react"
import { useGame } from "../GameContext"

const BattlefieldContext = createContext({})

export const BattlefieldProvider = ({ children }) => {
  const INITIAL_SCENERY = ["", "", "", "", "", "", "", "", ""]
  const [scenery, setScenery] = useState(INITIAL_SCENERY)
  const [move, setMove] = useState("X")
  const { winner, setWinner } = useGame()


  const isFull = (newScenery) => {
    const hasEmpty = newScenery.some((field) => !field)

    if (hasEmpty) return false
    if (!hasEmpty) return true
  }

  const toggleMove = () => {
    if (move === "X") {
      setMove("O")
    } else {
      setMove("X")
    }
  }

  const resetBattlefield = () => {
    setScenery(INITIAL_SCENERY)
  }

  const verifyWinner = (newScenery) => {

    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ]

    winningPositions.forEach((winnerPosition) => {
      if (newScenery[winnerPosition[0]] === "X" && newScenery[winnerPosition[1]] === "X" && newScenery[winnerPosition[2]] === "X") {
        setWinner("X")
        setTimeout(resetBattlefield, 500)
      }

      if (newScenery[winnerPosition[0]] === "O" && newScenery[winnerPosition[1]] === "O" && newScenery[winnerPosition[2]] === "O") {
        setWinner("O")
        setTimeout(resetBattlefield, 500)
      }
    })

    if (!winner && isFull(newScenery)) {
      setTimeout(resetBattlefield, 500)
    }
  }

  const handleClickPlay = (position) => {
    const newScenery = [...scenery]
    if (newScenery[position] !== "") return
    newScenery[position] = move
    setScenery(newScenery)
    verifyWinner(newScenery)
    toggleMove()
  }

  return <BattlefieldContext.Provider value={{ scenery, setScenery, move, setMove, handleClickPlay }}>{children}</BattlefieldContext.Provider>
}

export const useBattlefield = () => {
  const context = useContext(BattlefieldContext)
  return context
}
