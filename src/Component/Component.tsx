import { useState } from "react"

interface Game {
  id: number,
  player: {
    name: string
  }
}

const Component = () => {
  const [game, setGame] = useState<Game>({
      id: 1,
      player: {
          name: "Dylan"
      }
   })

  const handleClick = () => {
      setGame({...game,
        player: {
          ...game.player, 
          name:'Slim Shady'}})
  }

  return (
    <>
      <h2>Change User</h2>
      <h2>Hi, my name is {game.player.name}! </h2>
      <button onClick={handleClick}>Change Name</button>
    </>
  )
}

export default Component