import React, { Component } from 'react';
import SettingsSymbol from '../img/settingsicon.png';
import TrendsSingle from './trendssingle';




class Trends extends Component {
    state = {
        titles: ["Entertainment · Trending", "Politics · Trending", "Trending in the United Kingdom", "CoronaVirusChallenge"],
        hashtag: ["#Harry Potter", "#BorisTheRacist", "InternationalWomensDay", "#CoronaVirusChallenge"],
        count: ["2,272 Tweets", "4,991 Tweets", "Trending with:#InternationalWomensDay", "84.6K"]
    }

    render() {


        return (
            <div className="trends-container">
                <div className="trends-top">
                    <h2>Trends for you</h2>

                    <div className="trends-symbol-container">
                        <img src={SettingsSymbol} alt="settingssymbol" />
                    </div>
                </div>
                <TrendsSingle title={this.state.titles[0]} hashtag={this.state.hashtag[0]} count={this.state.count[0]} />
                <TrendsSingle title={this.state.titles[1]} hashtag={this.state.hashtag[1]} count={this.state.count[1]} />
                <TrendsSingle title={this.state.titles[2]} hashtag={this.state.hashtag[2]} count={this.state.count[2]} />
                <TrendsSingle title={this.state.titles[3]} hashtag={this.state.hashtag[3]} count={this.state.count[3]} />
                <div className="holder">
                    <div className="show-more-container">
                        <p className="show-more">Show more</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Trends;

