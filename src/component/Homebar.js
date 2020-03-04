import React from 'react';
import star from '../img/twitterstar.png';

 function Homebar() {

    return (
        <div className="homebarContainer">
            <div className="homebar">
                <div className="home">
                    <p className="home">Home</p>
                </div>
                <div className="star">
                    <img className="starLogo" src={star} alt="staricon" /> 
                </div>
            </div>
        </div>
        );
    }

    export default Homebar;