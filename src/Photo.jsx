export default function Photo({photos}){
    return(
        <div className="card">
            <h4>{photos.title}</h4>
            <h4>{photos.albumId}</h4>
        </div>
    )
}