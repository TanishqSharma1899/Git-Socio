import React, { useState } from 'react'
import "./Post.css"
import {BsThreeDotsVertical} from "react-icons/bs"
import {Users} from "../../dummyData"

export default function Post({post}) {
    let [like, setlike]=useState (post.like)
    let [IsLiked, setIsLiked]=useState (false)

    let likeHandler=()=>{
        setlike(IsLiked ? like-1: like+1)
        setIsLiked(!IsLiked)
    }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <BsThreeDotsVertical/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className='postImg' src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeicon' src="/assets/like.png" onClick={likeHandler} alt="" />
                    <img className='likeicon' src="/assets/heart.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} People Like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
