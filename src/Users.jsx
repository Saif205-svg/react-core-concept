import {use} from 'react';
import User from './User';
export default function ({userAPI}){
    const user = use(userAPI);
    console.log(user);
    return (
        <div className='container'>
            <h3>All Users Info : {user.length}</h3>
            {
                user.map(user=> <User key={user.id} user={user}></User>)
            }
        </div>
    )
}