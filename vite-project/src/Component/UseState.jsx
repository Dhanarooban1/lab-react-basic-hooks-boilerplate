import React from 'react'
import App from '../App';
import { useState } from 'react';


// PROGRESSION 1 | UPDATE STATE USING useState and PROGRESSION 2 | MULTIPLE STATE
export default function UseState() {
    const [Var , UpdateVar ] = useState(0);
    const [Var2 , UpdateVarL ] = useState(0);
// PROGRESSION 3 | USE OBJECT STATE
 const [State, SetState] = useState( {age:0,Sbi:0});
   const Increase = () =>{
    UpdateVar(Var+1)
    }

   const d = ()=> UpdateVarL(Var2-1)

  const AgeSbi = (v) =>{SetState(
    {
     ...State,[v]:State[v]+1
    }
   )

   }
const {age,Sbi} = State;
  return (
    <>
    <h1>Count {Var}</h1>
    <h2>Decreased Count {Var2}</h2>
     <button onClick={Increase}>Increase</button>
     <button onClick={d}>Decreased Age</button>
     <h3>My age:{age}</h3>
     <h3>My friend age: {Sbi}</h3>
     <button onClick={ ()=> AgeSbi('age') }>Increase My age</button>
     <button onClick={ ()=> AgeSbi('Sbi') }>Increase My age</button>
    </>
  )
}




