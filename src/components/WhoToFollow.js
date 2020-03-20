import React, { Component } from 'react'

import WhoToFollowSingle from '../components/WhoToFollowSingle'
import Copyrights from './copyrights'

// export default function WhoToFollow() {
//     return (
//         <div>
//             <div className="whotofollow-top">
//                 <p className="follow">Who to follow</p>   
//             </div>
//             <WhoToFollowSingle />
//             <WhoToFollowSingle />
//             <WhoToFollowSingle />
//             <div className="whotofollow-bottom">
//                 <a className="showMore">Show more</a>
//             </div>
//             <Copyrights />

//         </div>
//     )
// }

class WhoToFollow extends Component {
    state = {
        name: ["Huawei Developers", "Rob Benedict", "Samantha Smith"],
        tagname: ["@Huawei_devs", "@Rob Benedict", "@Samantha Smith"]
    }
    render() {
        return (
            <div>
                <div className="whotofollow-top">
                    <p className="follow">Who to follow</p>
                </div>
                <WhoToFollowSingle name={this.state.name[0]} tagname={this.state.tagname[0]} />
                <WhoToFollowSingle name={this.state.name[1]} tagname={this.state.tagname[1]} />
                <WhoToFollowSingle name={this.state.name[2]} tagname={this.state.tagname[2]} />
                <div className="whotofollow-bottom">
                    <a className="showMore">Show more</a>
                </div>
                <Copyrights />

            </div>
        )
    }


}

export default WhoToFollow;