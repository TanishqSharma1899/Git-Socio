import React from 'react'
import "./Online.css"

export default function Online({user}) {
  return (
    <li className='rightbarFriend'>
    <div className="rightbarProfileImgContainer">
      <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
      <span className="rightbarOnlines"></span>
    </div>
    <span className="rightbarUsername">{user.username}</span>
  </li>
  )
}
