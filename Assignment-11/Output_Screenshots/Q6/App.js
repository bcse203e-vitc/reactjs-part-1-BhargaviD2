import React from 'react';
function App() {
const logged=false;
if(logged){
  return(<h1>Logged in!</h1>)
}
else{
  return(<h1>Pleae log in!</h1>)
}
}

export default App;
