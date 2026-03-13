import { useState } from "react"

export default function Shopping(){
    const [item,setItem] = useState(0);
    const addItem = ()=>{
        const addedItem = item + 1;
        setItem(addedItem);
    }
    const removeItem = () =>{
        if(item>0){
            setItem(item-1)
        }
    }
    return(
        <div style={{
            border:'3px solid cyan',
            borderRadius:'20px',
            margin:'20px',
            padding:'25px'
        }}>
            <h3>My Shopping Cart</h3>
            <p>Total Shopping Item: {item}</p>
            <button style={{marginRight:'10px'}} onClick={addItem}>Add to Cart</button>
            <button onClick={removeItem}>Remove to Cart</button>
        </div>
    )
}