import React from 'react';
import Search from '../components/search'
import WhoToFollow from '../components/WhoToFollow'
import Trends from './trends';

function Rightside() {
    return (
        <div className="New">
            <div>
                <Search />
            </div>
            <div className="trends-div">
                <Trends />
            </div>
            <div className="whotofollow-container">
                <WhoToFollow />
            </div>
        </div>
    );
}

export default Rightside;