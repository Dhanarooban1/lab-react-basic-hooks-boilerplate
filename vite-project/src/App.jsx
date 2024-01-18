// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// // import UseState from './Component/UseState'
// import UseEffect from './Component/UseEffect'
// import { createContext } from 'react'
// import INITIALIZESTATEFROMFUNCTION from './Component/INITIALIZESTATEFROMFUNCTION'
// import INITIALIZESTATEFROMFUNCTION from './Component/INITIALIZESTATEFROMFUNCTION'
// import UseState from './Component/UseState'
// import UseEffect from './Component/UseEffect'
import { useState } from 'react'
import './App.css'
import UseContext from './Component/UseContext'
import React from 'react'
import { createContext } from 'react'

export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext/>
    </ToggleTheme.Provider>
  );
}

export default App;