import React from 'react';
import Heart from '../img/white-heart.png'
import profilepic from '../img/pphard.png'
import commentlogo from '../img/comment.png'
import retweetlogo from '../img/retweet.png'
import heartlogo from '../img/heart.png'
import sharelogo from '../img/share.png'
import funny from '../img/funny.jpeg'

function PostImage() {

    return (
        <div className="textpostContainer">
            <div className="likeContainer">
                <img className="likeImg" src={Heart} ></img>
                <h4 className="likeUser">adam22 liked</h4>
            </div>
            <div className="textpostFlexWrapper">
                <div>
                    <img className="profileImg" src={profilepic}></img>
                </div>
                <div className="max-widthContainter">
                    <div className="flexUser">
                        <h2 className="htagMargin" >adam22</h2>
                        <img></img>
                        <h2 className="htagMargin" >@adam22</h2>
                        <h4 className="htagMargin">.</h4>
                        <h2 className="htagMargin">8h</h2>
                    </div>
                    <div>
                        <p className="postContent">What people think when you tell them your a backend developer</p>
                        <div>
                            <img className="postimage" src={funny} alt="meme image" />
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
export default PostImage;