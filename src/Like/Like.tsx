import { useState } from "react"
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Like = () => {

  const [likes, setLikes] = useState(0)
  const [liked, setLiked] = useState([false, <FaRegHeart />])

  const handleClick = () => {
    setLiked([true, <FaHeart />]); setLikes(likes + 1)}
    

return (
    <>
      <h2>Like <FaRegHeart /></h2>
      {liked.map((liked, index) => {
        return <h3 key={index}>{liked}</h3>
      })}
      <button   onClick={handleClick}>{likes} Like Button</button>
    </>
  )
}

export default Like