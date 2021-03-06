import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search..." type="text"></input>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening...</h2>
                <TwitterTweetEmbed tweetId={"1416453816069857283"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="narendramodi"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={"https://facebook.com/"}
                    options={{ text: "#twitter clone with react" }}
                />
            </div>
        </div>
    )
}

export default Widgets;
