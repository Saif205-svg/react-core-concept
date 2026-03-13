import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);
    const handleClicked = () =>{
        // console.log('add btn clicked');
        const newCount = count+1;
        setCount(newCount)
    }
    return(
        <div style={{border:'3px solid red', margin:'20px',borderRadius:'25px',paddingBottom:'15px'}}>
            <h3>Count: {count}</h3>
            <button onClick={handleClicked}>Add</button>
        </div>
    )
}