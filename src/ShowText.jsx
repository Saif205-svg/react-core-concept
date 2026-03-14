import { useState } from "react"

export default function Text(){
    const [isvisible,setIsvisible] = useState(false);
    return(
        <div>
            {
                isvisible && <p>Hello React!!</p>
            }
            <button onClick={() => setIsvisible(true)}>Show Text</button>
            <button onClick={()=> setIsvisible(false)}>Hide Text</button>
        </div>
    )
}