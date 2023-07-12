import './styles/App.css';
//import './styles/main.css';
// import { useState, useEffect } from "react";
import TabContainer from "./components/TabContainer.component";

import Accordion from './react.dev/sharing-state-between-components/Accordion.component';
import { useState, useEffect } from 'react';




const Hello = () => {
  let red = { color: 'red' }
  let green = { color: 'green' }
  const [state, setState] = useState(0);

  useEffect(() => {
      setInterval(() => {
          if (state === 0) {
            setState(1);
          } else if (state === 1) {
            setState(0);
          }
      }, 1000)   
  }, [state, setState])

  return (
    <>
      <h1>The current state is {state}</h1>
    </>
  )
}

const App = () => {
  return (
    <>
      <Hello />
      <TabContainer />
    </>
  );
}



export default App;
