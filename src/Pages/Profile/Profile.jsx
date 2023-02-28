import React from 'react'
import "./Profile.css"
import Topbar from '../../Components/Topbar/topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Rightbar from '../../Components/Rightbar/Rightbar'

export default function Profile() {
  return (
    <> <Topbar />
    <div className="profile">
    <Sidebar />
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img className='profileCoverImg' src="/assets/post/3.jpeg" alt="" />
            <img className='profileUserImg' src="/assets/post/7.jpeg" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>Tanishq Sharma</h4>
                <span className='profileInfoDesc'>Hello Everyone!</span>
            </div>
        </div>
        <div className="profileRightBottom">
    <Feed />
    <Rightbar profile />
    </div>
    </div>
    
    </div>
        
    </>
  )
}
