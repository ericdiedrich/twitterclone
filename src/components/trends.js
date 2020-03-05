import React from 'react';
import SettingsSymbol from '../img/settingssymbol.svg'
import TrendsSingle from './trendssingle';



export default function Trends() {
    return (
        <div className="trends-container">
            <div className="trends-top">
                <h2>Trends for you</h2>

                <div className="trends-symbol-container">
                    <img src={SettingsSymbol} alt="settingssymbol" />
                </div>
            </div>
            <TrendsSingle />
            <TrendsSingle />
            <TrendsSingle />
            <TrendsSingle />
             <div className="holder">
            <div className="show-more-container">
                <p className="show-more">Show more</p>
            </div>
</div> 
        </div>
    )
}


