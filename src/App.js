
import { useState } from 'react';
import './App.css';
// import Countries from './components/Countries/Countries';

function App() { 
   
  let time=new Date().toLocaleTimeString() 
  let [cTime,setTime]=useState(time) 

  setInterval(() => {
    let newTime=new Date().toLocaleTimeString()
    setTime(newTime)
  }, 1000);
 function changeTime(){ 
   let newTime=new Date().toLocaleTimeString()
   setTime(newTime)
 }
  return (
    <div className="App">
      <h2>{cTime}</h2> 
      <button onClick={changeTime}>Change</button> 

    </div>
  );
}

export default App;
