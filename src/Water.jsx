import { useState } from "react"

export default function Water() {
    const [water, Setwater] = useState(0);
    const drinkWater = () => {
        const drinkWater = water + 1;
        Setwater(drinkWater);
    }
    return (
        <div style={{
            border: '3px solid red',
            borderRadius: '30px'
        }}>
            {
                water>10 && <h4>থাক আর পানি দিওনা পিপাসা মিতে গেছে😂</h4>
            }
            <h3>পানি দাও ভাই পিপাসা লাগছে</h3>
            <p>বর্তমান কত গ্লাস পানি খেলামঃ {water}</p>
            <button  onClick={drinkWater}>এক গ্লাস পানি খাও</button>
        </div>
    )
}