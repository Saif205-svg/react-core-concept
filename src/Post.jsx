export default function Post({post}){
    return(
        <div className="card">
            <h3>{post.title}</h3>
            <h4>{post.body}</h4>
        </div>
    )
}