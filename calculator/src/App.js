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

  function btnSevenAction(){
    // alert('button seven is pressed')
    document.getElementById("value").textContent = '7'
  }
  
  function btnSixAction(){
    // alert('button six is clicked')
    document.getElementById("value").textContent = '6'
  }

  function btnEightAction(){
    // alert('button eight is clicked')
    document.getElementById("value").textContent = '8'
  }

  function btnNineAction(){
    // alert('button nine is clicked')
    document.getElementById("value").textContent = '9'
  }

  function btnFiveAction(){
    // alert('button five is clicked')
    document.getElementById("value").textContent = '5'
  }

  function btnFourAction(){
    // alert('button four is clicked')
    document.getElementById("value").textContent = '4'
  }

  function btnThreeAction(){
    // alert('button three is clicked')
    document.getElementById("value").textContent = '3'
  }

  function btnTwoAction(){
    // alert('button two is clicked')
    document.getElementById("value").textContent = '2'
  }

  function btnOneAction(){
    // alert('button one is clicked')
    document.getElementById("value").textContent = '1'
  }

  function btnZeroAction(){
    // alert('button zero is clicked')
    document.getElementById("value").textContent = '0'
  }

  function btnAdditionAction(){
    alert('button addition is clicked')
  }

  function btnSubstractionAction(){
    alert('button substraction is clicked')
  }

  function btnMultiplicationAction(){
    alert('button multiplication is clicked')
  }

  function btnEqualsAction(){
    alert('button equals is pressed')
  }

  function btnDecimalAction(){
    alert('button decimal is clicked')
  }
  
  return (
    <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>A simple calcultor</h1>
      </header>
    </div>
    <label style = {marLeftStyle} id = 'value'>Enter the number here</label>
    <br></br>
    <button className= "box" style= {{...styles1,...marLeftStyle}} id='seven' onClick = {btnSevenAction}  >7</button>
    <button className= "box" style= {styles1} id = 'eight' onClick = {btnEightAction}>8</button>
    <button className= "box" style= {styles1} id = 'nine' onClick = {btnNineAction}>9</button>
    <button className= "box" style= {styles1} id = 'multiplication' onClick = {btnMultiplicationAction}>*</button>
    <br></br>
    <button className= "box" style= {{...styles1,...marLeftStyle}} id = 'four' onClick = {btnFourAction} >4</button>
    <button className= "box" style= {styles1} id = 'five' onClick = {btnFiveAction}>5</button>
    <button className= "box" style= {styles1} id = 'six' onClick = {btnSixAction}>6</button>
    <button className= "box" style= {styles1} id = 'substraction' onClick = {btnSubstractionAction}>-</button>
    <br></br>
    <button className= "box" style= {{...styles1,...marLeftStyle}} id = 'one' onClick = {btnOneAction}>1</button>
    <button className= "box" style= {styles1} id = 'two' onClick = {btnTwoAction}>2</button>
    <button className= "box" style= {styles1} id = 'three' onClick = {btnThreeAction}>3</button>
    <button className= "box" style= {styles1} id = 'addition' onClick = {btnAdditionAction}>+</button>
    <br></br>
    <button className= "box" style= {{...zeroButtonStyle,...marLeftStyle}} id = 'zero' onClick = {btnZeroAction}>0</button>
    <button className= "box" style= {styles1} id = 'decimal' onClick = {btnDecimalAction}>. </button>
    <button className= "box" style= {styles1} id = 'equlas' onClick = {btnEqualsAction} >=</button>
    <Header/>

    </div>
  );
}

class Header extends React.Component {
  render(){
    return(
      <div>sample text</div>
    );
  }
}

export default App;