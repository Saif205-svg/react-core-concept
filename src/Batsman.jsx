import { useState } from "react"

export default function Batsman(){
    const [scores,setScores] = useState(0);
    const handleSingle =()=>{
        const updatedScores = scores + 1;
        setScores(updatedScores)
    }

    const handleFour = () =>{
        const updatedScores = scores + 4;
        setScores(updatedScores);
    }
    const handleSix = () =>{
        const updatedScores = scores + 6;
        setScores(updatedScores);
    }
    return(
        <div style={{
            border:'3px solid green',
            margin:'20px',
            padding:'15px'
        }}>
            <h3>Player: Bangla Batsman</h3>
            {
                scores>50 && <p>Congratulation Your Scores is : {scores}</p>
            }
            <h1>Score: {scores}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}