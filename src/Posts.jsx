import {use} from 'react';
import Post from './Post';
export default function PostS({PostApi}){
    const posts = use(PostApi)
    console.log(posts);
    return(
        <div className="container">
            <h2>All Post are here : {posts.length}</h2>
            {
                posts.map(post=> <Post key={post.id} post = {post}></Post>)
            }
        </div>
    )
}