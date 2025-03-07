// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = `rgb(25 26 42)`;
    } else {
      setMode("light");
      document.body.style.backgroundColor = `rgb(184 207 243 / 70%)`;
      // document.querySelector(".form-control").style.backgroundColor = '#e3ffff';
    }
  }
  return (
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-2">
              <TextForm heading="Enter your text" mode={mode} />
        </div>
    </>

  );
}

export default App;

