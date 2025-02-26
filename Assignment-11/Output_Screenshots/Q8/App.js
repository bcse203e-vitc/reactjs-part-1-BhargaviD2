
import React from 'react';

function App() {

  function clicker(){
    alert("Button Clicked!");
  }
  return(
    <button onClick={clicker}>Click Me!</button>
  )

}

export default App;
