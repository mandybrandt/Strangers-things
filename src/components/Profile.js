import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ user, username }) => {
    const messages = user.messages;
    const userID = user._id;

    return (
        <div>
            <div>
                <h1>Welcome {`${username}`}!</h1>
                <h2>Create a new post</h2>
                <button>
                    <Link to='/posts/create-post'>Add Post</Link>
                </button>

                <h2>You have Messages!</h2>
                {
                    messages && messages.map(message => {
                        const fromUserID = message.fromUser._id;
                        const { username } = message.fromUser;
                        const { title } = message.post;

                        if (userID !== fromUserID) {
                            return (
                                <div key={message._id}>
                                    <p>From User: {username} </p>
                                    <p>Message: {message.content}</p>
                                    <p>Post Reference: {title}</p>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div>
                <h2>Outgoing Messages:</h2>
                {
                    messages && messages.map(message => {
                        const fromUserID = message.fromUser._id;

                        if (userID === fromUserID) {
                            return (
                                <div key={message._id}>{message.content}</div>
                            )
                        }
                    })
                }
            </div>
        </div>

    )

}
export default Profile;
