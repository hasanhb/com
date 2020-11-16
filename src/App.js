import React from "react";
import Head from "./compenent/Head";
import hb from "./hb.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <Head name="hbh"/>
      <br/>
        <img src={hb} alt="hb" height="150px"/>
        <br/>

      <img src="/nat.jpg" alt="nat"/>
      <br/>
      <video controls width={673.5} height={449.7}>
      <source src="" type="video/mp4" />
</video>
      
    </div>
  );
}

export default App; 
