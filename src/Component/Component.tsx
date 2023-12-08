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
      <h2 className="header-name">Change User</h2>
      <h2 className="header-name2">Hi, my name is {game.player.name}! </h2>
      <button className="btn" onClick={handleClick}>Change Name</button>
    </>
  )
}

export default Component