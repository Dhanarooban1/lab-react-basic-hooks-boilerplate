import { useContext, useState } from "react";
import { ToggleTheme } from "../App";

function UseContext(){
    const theme = useContext(ToggleTheme);
    const [state ,setState] = useState(0);
    const [showContent ,setShow] = useState(true)
    const themeStyle = {
        backgroundColor: theme?"black":"grey",
        color:theme?"grey":"black",
        padding:"2rem",
        margin:"2rem"
    }



  return(
    <>
    
     <div style={themeStyle}>
     {showContent && <p>This is made by Dhana Rooban</p>} 
      <p>{state}</p> 
      <button onClick={()=>setShow(!showContent)}>View</button>
      <button onClick={()=>{ setState(state+1)} }>Click  to like</button>
    </div>
    </>
  )
}

export default UseContext;