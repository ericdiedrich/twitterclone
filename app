import React from 'react'
import commentlogo from '../img/comment.png'
import retweetlogo from '../img/retweet.png'
import heartlogo from '../img/heart.png'
import sharelogo from '../img/heart.png'

function Tweettext() {
    return(
        <div className="postContainer">
           <p>adam22 liked</p>
           <div>
               <img></img>
           </div>
           <div>
               <div>
                   <h2></h2>
                   <h3></h3>
                   <h3></h3>
               </div>
               <p></p>
               <div>
                   <img className="mainlogo" alt="logo" src={commentlogo} ></img>
                   <img className="mainlogo" alt="logo" src={retweetlogo} ></img>
                   <img className="mainlogo" alt="logo" src={heartlogo} ></img>
                   <img className="mainlogo" alt="logo" src={sharelogo} ></img>
               </div>
           </div>
        </div>
    );
}

export default Tweettext;