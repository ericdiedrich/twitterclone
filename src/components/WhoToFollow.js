import React from 'react'
import cn from '../img/cnprof.png'
import mcr from '../img/mcrdigiprof.png'
import trafford from '../img/traffcolprof.jpg'
import profilepic from '../img/pphard.png'
import verified from '../img/correct.png'
import WhoToFollowSingle from '../components/WhoToFollowSingle'

export default function WhoToFollow() {
    return (
        <div>
            <div className="whotofollow-top">
                <p className="follow">Who to follow</p>   
            </div>
            <WhoToFollowSingle />
            <WhoToFollowSingle />
            <WhoToFollowSingle />
            
            <div className="whotofollow-bottom">
                <a className="showMore">Show more</a>
            </div>
        </div>
    )
}
