import App from "../App";
import { useState } from "react";
export default function INITIALIZESTATEFROMFUNCTION() {
    const [currAge, setAge] = useState(19);
    const [SbiCurr, setSbiAge] = useState(3);
 
    return (
        <>
            <h2>My current age : {currAge}</h2>
            <h2>My Sibling age :{SbiCurr}</h2>
            <button onClick={() => setAge(prevAge => prevAge + 1)}>Increase Age</button>
            <button onClick={() => setSbiAge(prevSbiAge => prevSbiAge + 1)}>Increase Sibling Age</button>
        </>
    );
 }
