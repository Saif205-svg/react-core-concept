import {use} from 'react';
import Freind  from './Freind';  
export default function Friends ({friendsPromise}){
    const friends = use(friendsPromise)
    // console.log(friends);
    return(
        <div className="card">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(freind => <Freind key={freind.id} freind = {freind}></Freind>)
            }
        </div>
    )
}