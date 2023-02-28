import React from 'react'
import "./Sidebar.css"
import {Users} from "../../dummyData"
import {MdRssFeed, MdGroup} from "react-icons/md"
import {BiCalendarEvent} from "react-icons/bi"
import {GiGraduateCap} from "react-icons/gi"
import {BsFillChatLeftTextFill, BsFillBookmarkFill, BsQuestionCircle, BsBriefcase } from "react-icons/bs"
import {RxVideo } from "react-icons/rx"
import CloseFriend from '../closeFriends/CloseFriend'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper"> 
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdRssFeed className='sidebarIcon'/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <BsFillChatLeftTextFill className='sidebarIcon'/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <RxVideo className='sidebarIcon'/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <MdGroup className='sidebarIcon'/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BsFillBookmarkFill className='sidebarIcon'/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <BsQuestionCircle className='sidebarIcon'/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <BsBriefcase className='sidebarIcon'/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <BiCalendarEvent className='sidebarIcon'/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <GiGraduateCap className='sidebarIcon'/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
          {Users.map((u)=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
