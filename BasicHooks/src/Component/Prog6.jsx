import { useState } from 'react';
import React from 'react';
import UseContext from './UseContext.jsx';

export const ToggleTheme = React.createContext()

function Prog6() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button className='togglebtn' onClick={handleToggle}>Toggle</button>
      <UseContext/>
    </ToggleTheme.Provider>
  );
}

export default Prog6;