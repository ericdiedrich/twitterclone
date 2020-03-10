import React from 'react';
import Heart from '../img/white-heart.png'
import profilepic from '../img/pphard.png'
import commentlogo from '../img/comment.png'
import retweetlogo from '../img/retweet.png'
import heartlogo from '../img/heart.png'
import sharelogo from '../img/share.png'
import video from '../img/video.png'

function PostVideo() {

    return (
        <div className="textpostContainer">
            <div className="likeContainer">
                <img className="likeImg" src={Heart} alt="heart" ></img>
                <h4 className="likeUser">adam22 liked</h4>
            </div>
            <div className="textpostFlexWrapper">
                <div>
                    <img className="profileImg" src={profilepic} alt="profilepic"></img>
                </div>
                <div className="max-widthContainter">
                    <div className="flexUser">
                        <h2 className="htagMargin" >adam22</h2>
                        <h2 className="htagMargin" >@adam22</h2>
                        <h4 className="htagMargin">.</h4>
                        <h2 className="htagMargin">8h</h2>
                    </div>
                    <div className="postVideoWrapper">
                        <p className="postContent"></p>
                        <div className="postvideoDiv">
                            <img className="postvideo" src={video} alt="video" />
                        </div>
                    </div>
                    <div className="tweetImageFlexWrapper">
                        <img className="tweetlogo" alt="logo" src={commentlogo} ></img>
                        <img className="tweetlogo" alt="logo" src={retweetlogo} ></img>
                        <img className="tweetlogo" alt="logo" src={heartlogo} ></img>
                        <img className="tweetlogo" alt="logo" src={sharelogo} ></img>
                    </div>
                </div>
            </div>
        </div>
        );
    }
export default PostVideo;