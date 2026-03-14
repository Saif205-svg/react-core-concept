import {use} from "react";
import Album from './Album';
export default function Albums({albumApi}){
    const album = use(albumApi)
    console.log(album);
    return(
        <div className="container">
            <h3>All Albums here : {album.length}</h3>
            {
                album.map(album=> <Album key={album.id} album={album}></Album>)
            }
        </div>
    )
}