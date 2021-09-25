import { createContext, useContext, useState } from "react"
import { useGame } from "../GameContext"

const BattlefieldContext = createContext({})

export const BattlefieldProvider = ({ children }) => {
  const INITIAL_SCENERY = ["", "", "", "", "", "", "", "", ""]
  const [scenery, setScenery] = useState(INITIAL_SCENERY)
  const [move, setMove] = useState("X")
  const { winner, setWinner, setPoints, points, startGame } = useGame()
  const [plays, setPlays] = useState([])
  const [sceneryWinner, setSceneryWinner] = useState([])
  const { namePlayer } = useGame()

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
    setWinner("")
    setPlays([])
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
        setPoints({ ...points, player1: points.player1 + 1 })
        setSceneryWinner([...sceneryWinner, { newScenery, winner: namePlayer.player1 }])
        setTimeout(resetBattlefield, 500)
      }

      if (newScenery[winnerPosition[0]] === "O" && newScenery[winnerPosition[1]] === "O" && newScenery[winnerPosition[2]] === "O") {
        setWinner("O")
        setPoints({ ...points, player2: points.player2 + 1 })
        setSceneryWinner([...sceneryWinner, { newScenery, winner: namePlayer.player2 }])
        setTimeout(resetBattlefield, 500)
      }
    })

    if (!winner && isFull(newScenery)) {
      setSceneryWinner([...sceneryWinner, { newScenery, winner: "Empate" }])
      setTimeout(resetBattlefield, 500)
    }
  }

  const handleClickPlay = (position) => {
    const newScenery = [...scenery]
    if (newScenery[position] !== "") return
    if (!startGame) return
    if (winner) return
    newScenery[position] = move
    setScenery(newScenery)
    verifyWinner(newScenery)
    setPlays([...plays, { movePlay: move }])
    toggleMove()
  }

  return (
    <BattlefieldContext.Provider value={{ scenery, setScenery, move, setMove, handleClickPlay, plays, setPlays, sceneryWinner, setSceneryWinner }}>
      {children}
    </BattlefieldContext.Provider>
  )
}

export const useBattlefield = () => {
  const context = useContext(BattlefieldContext)
  return context
}
