import React from 'react'
// import twit from '../img/twitterbirdprofpic.png'
import gallery from '../img/photo.png'
import gif from '../img/gif.png'
import poll from '../img/poll.png'
import emoji from '../img/smile.png'
import pphard from '../img/pphard.png'

function SubmitTxtBox(props, e) {
    return (
        <div className="submitcontainer">

            <div className="twitprofpic">
                <img src={pphard} className="profileImg" alt="twitter bird profile pic" />
            </div>
            <div className="flexContainer">
                <div className="happening">
                    <input onChange={props.recordtweet} onKeyPress={props.tweet} className="happeningcontent" placeholder="What's happening?" />
                </div>
                <div className="posticons">
                    {/* <div className="picicon">
                            <a><img src={gallery} width="15px" height="15px" alt="emoji icon"></img></a>
                            <button></img src={gallery} width="15px" height="15px" alt="gallery icon" /></button>
                        </div>
                        <div className="gificon">
                            <a><img src={gif} className="gifIconSubmit" alt="emoji icon"></img></a>
                            <button><img src={gif} width="15px" height="15px" alt="gif icon"/></button>
                        </div>
                        <div className="pollicon">
                            <a><img src={poll} width="15px" height="15px" alt="emoji icon"></img></a>
                            <button><img src={poll} width="15px" height="15px" alt="poll icon"/></button>
                        </div>
                        <div className="smileicon">
                            <a><img src={emoji} width="15px" height="15px" alt="emoji icon"></img></a>
                            <button><img src={emoji} width="15px" height="15px" alt="emoji icon"/></button>
                        </div> */}
                    {/* <div className="smileicon">
                        <a><img src={emoji} width="15px" height="15px" alt="emoji icon"></img></a>
                        <button><img src={emoji} width="15px" height="15px" alt="emoji icon"/></button>
                        </div> */}

                    <div className="submiticons">
                        <a><img src={gallery} className="iconSubmit" alt="emoji icon"></img></a>
                        <a><img src={gif} className="iconSubmit" alt="emoji icon"></img></a>
                        <a><img src={poll} className="iconSubmit" alt="emoji icon"></img></a>
                        <a><img src={emoji} className="iconSubmit" alt="emoji icon"></img></a>
                        <a className="tweet-Btn">Tweet</a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SubmitTxtBox;