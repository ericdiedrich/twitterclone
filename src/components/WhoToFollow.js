import React from 'react'

import WhoToFollowSingle from '../components/WhoToFollowSingle'
import Copyrights from './copyrights'

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
            <Copyrights/>

        </div>
    )
}
