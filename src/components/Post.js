import React from 'react';
import Heart from '../img/white-heart.png'
import profilepic from '../img/pphard.png'
import commentlogo from '../img/comment.png'
import retweetlogo from '../img/retweet.png'
import heartlogo from '../img/heart.png'
import sharelogo from '../img/share.png'

function PostText() {

    return (
        <div className="textpostContainer">
            <div className="likeContainer">
                <img className="likeImg" src={Heart} alt="heart" ></img>
                <h4 className="likeUser">adam22 liked</h4>
            </div>
            <div className="textpostFlexWrapper">
                <div>
                    <img className="profileImg" src={profilepic} alt="pic"></img>
                </div>
                <div className="max-widthContainter">
                    <div className="flexUser">
                        <h2 className="htagMargin" >adam22</h2>
                        {/* <img></img> */}
                        <h2 className="htagMargin" >@adam22</h2>
                        <h4 className="htagMargin">.</h4>
                        <h2 className="htagMargin">8h</h2>
                    </div>
                    <div>
                        <p className="postContent">New merch dropped on my website at: https://shop visit us now to grab the latest merch here</p>
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
export default PostText;