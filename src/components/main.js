import React from 'react'
import Homebar from './Homebar'
import Post from './Post'
import SubmitTxtBox from './SubmitTxtBox'
import  Imagepost from './ImagePost'
import Videopost from './VideoPost'

function Main() {
    return(
        <div className="mainContainer">
           <Homebar />
           <SubmitTxtBox />
           <Post />
           <Imagepost />
           <Videopost />
        </div>
    );
}

export default Main;