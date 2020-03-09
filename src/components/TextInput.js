import React, { Component } from "react"
import Heart from '../img/white-heart.png'
import profilepic from '../img/pphard.png'
import commentlogo from '../img/comment.png'
import retweetlogo from '../img/retweet.png'
import heartlogo from '../img/heart.png'
import sharelogo from '../img/share.png'
import SubmitTxtBox from "./SubmitTxtBox"


class Textinput extends Component {
    state = {
        posts: [
            { profilepic: profilepic, user: "adam22", content: "New merch dropped on my website at: https://shop visit us now to grab the latest merch here<" },
        ],
        currentPost: { profilepic: "", user: "", content: "" }
    }

    recordPostHandler = (e) => {
        this.setState({
            currentPost: { profilepic: profilepic, user: "Adam22", content: e.target.value }
        })
    }

    addPostHandler = (e) => { 
      if (e.key === "Enter"){
        this.setState({
            posts: [...this.state.posts, this.state.currentPost],
            currentPost: { profilepic: "", user: "", content: "" }
        })}
    }

    render() {
        const allPosts = this.state.posts.map((posts, index) => {
            return <li key={index} className="textpostContainer">
                <div className="likeContainer">
                    <img className="likeImg" src={Heart} alt="heart" ></img>
                    <h4 className="likeUser">adam22 liked</h4>
                </div>
                <div className="textpostFlexWrapper">
                    <div>
                        <img className="profileImg" src={posts.profilepic} alt="pic"></img>
                    </div>
                    <div className="max-widthContainter">
                        <div className="flexUser">
                            <h2 className="htagMargin" >{posts.user}</h2>
                            {/* <img></img> */}
                            <h2 className="htagMargin" >@{posts.user}</h2>
                            <h4 className="htagMargin">.</h4>
                            <h2 className="htagMargin">8h</h2>
                        </div>
                        <div>
                            <p className="postContent">{posts.content}</p>
                        </div>
                        <div className="tweetImageFlexWrapper">
                            <img className="tweetlogo" alt="logo" src={commentlogo} ></img>
                            <img className="tweetlogo" alt="logo" src={retweetlogo} ></img>
                            <img className="tweetlogo" alt="logo" src={heartlogo} ></img>
                            <img className="tweetlogo" alt="logo" src={sharelogo} ></img>
                        </div>
                    </div>
                </div>
            </li>

        }
        )

        return (<div>
          <SubmitTxtBox tweet={this.addPostHandler} />
            {/* <input onChange={this.recordPostHandler} value={this.state.currentPost.content}></input> */}
            {/* <button onClick={this.addPostHandler}>Submit</button> */}
            <ul>
                {allPosts}
            </ul>
        </div>
        )
    }

}

export default Textinput;