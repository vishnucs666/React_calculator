import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
   
  var styles1 = {
    color : 'red',
    width : '6%',
    height : '10%',
    backgroundColor : 'black',
    fontSize : '150%',
  };
  var marLeftStyle ={
    marginLeft: '35%',
  };
  var zeroButtonStyle = {
    color : 'red',
    width : '12%',
    height : '10%',
    backgroundColor : 'black',
    fontSize : '150%',
  };



  return (
    <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>A simple calcultor</h1>
      </header>
    </div>

    <button className= "box" style= {{...styles1,...marLeftStyle}}>7</button>
    <button className= "box" style= {styles1}>8</button>
    <button className= "box" style= {styles1}>9</button>
    <button className= "box" style= {styles1}>*</button>
    <br></br>
    <button className= "box" style= {{...styles1,...marLeftStyle}}>4</button>
    <button className= "box" style= {styles1}>5</button>
    <button className= "box" style= {styles1}>6</button>
    <button className= "box" style= {styles1}>-</button>
    <br></br>
    <button className= "box" style= {{...styles1,...marLeftStyle}}>1</button>
    <button className= "box" style= {styles1}>2</button>
    <button className= "box" style= {styles1}>3</button>
    <button className= "box" style= {styles1}>+</button>
    <br></br>
    <button className= "box" style= {{...zeroButtonStyle,...marLeftStyle}}>0</button>
    <button className= "box" style= {styles1}>. </button>
    <button className= "box" style= {styles1}>=</button>
    
    </div>
  );
}

export default App;