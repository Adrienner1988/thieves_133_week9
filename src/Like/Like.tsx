import { useState } from "react"
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Like = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    if (liked === false) {
      setLiked((prevState) => !prevState); console.log('liked');
    } else {
      setLiked(false); console.log('unliked');
    }
  }

  return (
    <>
      <h2 className="header-like">Like Button <FaRegHeart /></h2>
      <button className="btn" onClick={handleClick}>{liked === true ? <FaHeart /> : <FaRegHeart />}</button>
    </>
  )
}

export default Like