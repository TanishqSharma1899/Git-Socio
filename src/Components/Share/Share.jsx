import React from 'react'
import "./Share.css"
import {MdPermMedia, MdLocationOn} from "react-icons/md"
import {AiFillTag} from "react-icons/ai"
import {BsFillEmojiLaughingFill} from "react-icons/bs"

export default function Share() {
  return (
    <div className='share'><div className="shareWrapper">
        <div className="shareTop">
            <img className='shareProfileImg' src="assets/person/1.jpeg" alt="" />
            <input placeholder="What's in Your Mind "
            className='shareInput'
            />
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <MdPermMedia color="tomato" className='shareIcon'/>
                    <span className='shareOptionText'>Photo Or Video</span>
                </div>
                <div className="shareOption">
                    <AiFillTag color="blue" className='shareIcon'/>
                    <span className='shareOptionText'>Tag</span>
                </div>
                <div className="shareOption">
                    <MdLocationOn color='green'  className='shareIcon'/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOption">
                    <BsFillEmojiLaughingFill color="gold" className='shareIcon'/>
                    <span className='shareOptionText'>Feelings</span>
                </div>
            </div>
            <button className='shareButton'>Share</button>
        </div>
    </div>
    </div>
  )
}
