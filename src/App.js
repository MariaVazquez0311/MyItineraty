import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    ---------------------------

    render (){ return (
      <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <div>
      {
       ["Gustavo","Dante","Camila","Adrian"].map((nombreAlumno,i)=>{
        return ( <GreetingEverybody nombre={nombreAlumno}></GreetingEverybody>)
       })
      }
      --------------------------
    </div>
  </div>
)
}

    </div>
  );
}

export default App;
