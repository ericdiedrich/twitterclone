import React from 'react';
import Search from '../components/search'
import WhoToFollow from '../components/WhoToFollow'

function Rightside() {
    return (
        <div className="New">
            <div>
                <Search />
            </div>
            <div>
                <WhoToFollow />
            </div>
        </div>
    );
}

export default Rightside;