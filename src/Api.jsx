//example of api fetch how to use api

// fetch('https://jsonplaceholder.typicode.com/comments')
// .then((res)=>res.json())
// .then((data)=>console.log(data));

// const loadData = async() =>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/comments");
//     const data = response.json();
//     return data
// }
import { use } from 'react';
export default function Users({fetchUsers}){

    const users = use(fetchUsers);
    console.log(users);
    return(
        <div className="card">
            <h3>Users: {Users.length}</h3>
        </div>
    )
}