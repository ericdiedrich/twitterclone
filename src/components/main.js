import React from 'react'
import Homebar from './Homebar'
import Post from './Post'
import  Imagepost from './ImagePost'
import Videopost from './VideoPost'
import Textinput from './TextInput'

function Main() {
    return(
        <div className="mainContainer">
           <Homebar />
           <Textinput />
           <Post />
           <Imagepost />
           <Videopost />
        </div>
    );
}

export default Main;