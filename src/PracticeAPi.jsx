import {use} from 'react'
export default function Practice({fetchAPI}){
    const api = use(fetchAPI)
    console.log(api);
    return(
        <div className="card">
            <h3>My User API: {api.length}</h3>
        </div>
    )
}