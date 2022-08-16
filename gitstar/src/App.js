import React from 'react';
 
import './App.css';
import All from './Components/All';
import { Link } from 'react-router-dom';
import Css from './Components/Css';
import Html from './Components/Html';
import Javascript from './Components/Javascript';
 


function App() {
 
  return (
    <div className="App">
      <div className='menu'> 
          <Link to="/all"><All/> <button className='allbtn'>All </button> </Link>
          <Link to="/css"><Css/> <button className='cssbtn'>Css</button>  </Link>
          <Link to="/html"><Html/> <button className=' cssbtn'>HTML</button>  </Link>
          <Link to="/javascript">  <button className=' cssbtn'>Javascript</button> <Javascript /> </Link>
 
          </div>


             
    </div>
  );
}

export default App;
