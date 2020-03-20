<div className="AppSearch">
            <div className="magnify-holder" >
                <img className="magnifyImg" src={magnify} alt="magnifyglass" />
            </div>
            <div className="search-holder">
                <input className="searchInput" placeholder="Search Twitter" />
            </div>
        </div>


 <div className="whotofollowcontainer">
                <div className="whotofollow">
                    <p className="follow">Who to follow</p>   
                </div>
                <div className="profile1">
                    <div className="cnlogo">
                        <img src={cn} alt="Code Nation" />
                    </div>
                    <div className="cncontent">
                        <p className="cnprofile">Code Nation</p>
                        <p className="atcn">@wearecodenation</p>
                    </div>
                    <div className="cnfollow">
                        <button className="follow-cn">Follow</button>
                    </div>
                    <div className="profile2">
                        <div className="mcrlogo">
                            <img src={mcr} alt="mcrdigital" />
                        </div>
                        <div className="mcrcontent">
                            <p className="mcrdigital">Manchester Digital</p>
                            <p className="atmcrdigital">@McrDig</p>
                        </div>
                        <div className="mcrfollow">
                            <button className="follow-mcr">Follow</button>
                        </div>
                    </div>
                    <div className="profile3">
                        <div className="trafflogo">
                            <img src={trafford} alt="trafford college" />
                        </div>
                        <div className="traffcontent">
                            <p className="trafford">Trafford College</p>
                            <p className="attrafford">@TraffordCollege</p>
                        </div>
                        <div className="followtraff">
                            <button className="follow-traff">Follow</button>
                        </div>
                    </div>
                </div>
            </div>



            const TrendsCard = this.state.Trends.map((Trends)=>{
        
        
        <p className="trends-holder">{Trends.trendstitle} {Trends.trendshashtag} {Trends.trendsamount}</p>
        <Trends trendstitle={Trends.trendstitle} trendshashtag={Trends.trendshashtag} trendsamount={Trends.trendsamount} key={index} />
    })