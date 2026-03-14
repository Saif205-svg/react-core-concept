import {use} from 'react';
import Photo from './Photo';
export default function Photos({photosApi}){
    const photos = use(photosApi); 
    // console.log(photos);
    return(
        <div className="container">
            <h3>All Photos are here: {photos.length}</h3>
            {
                photos.map(photos => <Photo key={photos.id} photos={photos}></Photo>)
            }
        </div>
    )
}