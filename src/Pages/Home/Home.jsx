import React from 'react'
import "./home.css"
import Topbar from '../../Components/Topbar/topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Rightbar from '../../Components/Rightbar/Rightbar'

export default function Home() {
    return (
        <> <Topbar />
        <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
        </div>
            
        </>

    );



}
