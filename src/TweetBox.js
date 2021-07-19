import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase'

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    // function for posting te tweet
    const postTweet = e => {
        // preventing the page to refressh after the submit
        e.preventDefault();

        // adding data to the db
        db.collection("posts").add({
            displayName: "Harvey Specter",
            userName: "harvey",
            verified: true,
            text: tweetMessage,
            img: tweetImage,
            avatar: "https://cdn.squaremile.com/gallery/57b728d210157.jpeg"
        });

        // resetting the tweet box
        setTweetImage("");
        setTweetMessage("");
    }

    return <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://cdn.squaremile.com/gallery/57b728d210157.jpeg" />

                <input
                    onChange={e => setTweetMessage(e.target.value)}
                    value={tweetMessage} placeholder="What's happening?" type="text"></input>
            </div>
            <input
                onChange={e => setTweetImage(e.target.value)}
                value={tweetImage}
                placeholder="Enter image url" className="tweetBox__imageInput"></input>
            <Button onClick={postTweet} type="submit" className="tweetButton">Tweet</Button>
        </form>
    </div>

}

export default TweetBox;
