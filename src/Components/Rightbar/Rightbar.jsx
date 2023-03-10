import React from 'react'
import "./Rightbar.css"
import {Users} from "../../dummyData"
import Online from '../Online/Online'

export default function Rightbar({profile}) {
  let Homerightbar =()=> {
    return(
      <>
       <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/gift.png" alt="" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 other Friends</b> have birthday today.</span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    );
  };
  let Profilerightbar=()=>{
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Indore</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Delhi</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">RelationShip:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      </div>
      
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       {profile ? <Profilerightbar/> : <Homerightbar/>}
      </div>
    </div>
  )
}
