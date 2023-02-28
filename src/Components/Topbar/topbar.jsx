import React from 'react'
import { BsSearch, BsPersonFill, BsFillChatLeftTextFill, BsBellFill } from "react-icons/bs"
import "./topbar.css";

export default function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">Socio</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <BsSearch className='searchIcon' />
                    <input placeholder='Search for Friends, Post, Videos' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <BsPersonFill />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <BsFillChatLeftTextFill  />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <BsBellFill />
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>  
                <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>

        </div>
    )
}
