import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../api';
import SearchItems from './SearchItems';

const Posts = ({ posts, token }) => {
    const tempPosts = Array.from(posts);
    const temp2Posts = [...posts];
    const [filteredPosts, setFilteredPosts] = useState(tempPosts);

    const deletePostConfirm = async (token, postIdToDelete) => {
        const isConfirmed = window.confirm('Are you sure you want to delete this post?')

        const deleted = await deletePost(token, postIdToDelete)
        return deleted;
    }

    return (
        <div id="outer div element">
            <div>
                <h2>Items For Sale</h2>
                <SearchItems posts={posts} setFilteredPosts={setFilteredPosts} />
            </div>
            {
                filteredPosts.map((post) => {
                    const { description, location, price, title, _id, isAuthor } = post;
                    return (
                        <div key={_id}>
                            <h3>{title}</h3>
                            <p>Description: {description}</p>
                            <p>Price: {price}</p>
                            <p>Location: {location}</p>
                            {
                                isAuthor ? (
                                    <>
                                        <button>
                                            <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
                                        </button>
                                        <button onClick={(event) => { deletePostConfirm(token, _id) }}>Delete Post
                                        </button>
                                    </>
                                ) : (
                                    <Link to={`/posts/${_id}`}>View Post</Link>
                                )
                            }
                        </div>
                    )
                })


            }
        </div>
    )
}

export default Posts;