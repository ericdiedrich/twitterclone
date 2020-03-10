import React from 'react';

export default function Trendssingle(props) {
    return (
        <div className="trends-holder top">
            <p className="trends-title">{props.title}</p>
            <p className="trends-hashtag">{props.hashtag}</p>
            <p className="trends-amount">{props.count}</p>
        </div>
    )
}
