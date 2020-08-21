import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person ={name:'zafru', 
  job:"programmer"

  }
  var person2 ={name:'Taeem', 
  job:"Student"

  }
  var style = {
    color:'red',
    backgroundColor: 'white'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
  <h1 className ="" style ={style}>My heading: {person.name+' '+ person.job}</h1>
  <h3 style = {{color:"greenyellow",backgroundColor:'cyan'}}>Name:{person2.name+" "+ person2.job}</h3>
        <p>My first paragraph</p>
       
      </header>
    </div>
  );
}

export default App;
