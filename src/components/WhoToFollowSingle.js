import React from 'react'
import profilepic from '../img/pphard.png'
import verified from '../img/correct.png'

export default function WhoToFollow(props) {
    return (
        <div className="followFlexContainer">
            <div>
                <img className="profileImgFollowSection" src={profilepic} alt="profilepic"></img>
            </div>
            <div className="followFlexWrapper">
                <div className="followFlexUser">
                    <div>
                        <h2 className="htagFollowSection">{props.name}</h2>
                    </div>
                    <div className="verifiedDiv">
                        <img className="verifiedIcon" src={verified} alt="verified" />
                    </div>
                </div>
                <h4 className="htagFollowSectionUser">{props.tagname}</h4>
            </div>
            <div className="followUserDiv">
                <a className="followUserBtn">Follow</a>
            </div>
        </div>
    )
}
