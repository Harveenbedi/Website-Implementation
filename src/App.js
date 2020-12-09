import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import ReactPlayer from "react-player"

function App() {
  return (
    <div className="App">
     <Navbar/>
     <ReactPlayer
     url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
     />
    <h1>
    You have been Rick rolled
    </h1>
    </div>

  );
}

export default App;
