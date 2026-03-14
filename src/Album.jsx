export default function Album({album}){
    return(
        <div className="card">
            <h4>Album Title: {album.title}</h4>
            <h4>Album UserID: {album.userId}</h4>
        </div>
    )
}