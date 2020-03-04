import React from 'react'
import mainlogo from '../img/twitterlogo.png'
import homelogo from '../img/home-run.png'
import explorelogo from '../img/hashtag.png'
import notificationslogo from '../img/notification.png'
import messageslogo from '../img/email.png'
import bookmarklogo from '../img/notification.png'
import listlogo from '../img/form.png'
import morelogo from '../img/more.png'
// import profilelogo from '../img'

function Nav() {
    return(
        <div className="navContainer">
            <img className="mainlogo" alt="logo" src={mainlogo} ></img>
            <a className="atag-navbar"><img className="mainlogo" src={homelogo} />Home</a>
            <a><img className="mainlogo" alt="logo" src={explorelogo} />Explore</a>
            <a><img className="mainlogo" alt="logo" src={notificationslogo} />Notifications</a>
            <a><img className="mainlogo" alt="logo" src={messageslogo} />Messages</a>
            <a><img className="mainlogo" alt="logo" src={bookmarklogo} />Bookmarks</a>
            <a><img className="mainlogo" alt="logo" src={listlogo} />Lists</a>
            <a><img className="mainlogo" alt="logo" src={homelogo} />Profile</a>
            <a><img className="mainlogo" alt="logo" src={morelogo} />More</a>
            <a className="tweetBtn">Tweet</a>
        </div>
    );
}

export default Nav;