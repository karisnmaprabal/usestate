import React,{ useState } from 'react'
import './App.css';
const App = () => {

   //console.log(useState('prashna prasai'));
    //let myFirstVal =useState('prasai')[0];
    //console.log(myFirstVal);

    //var val="prashna prasai";
    const[myName, setMyName]=useState('prashna prasai');


    const ChangeName= () => { 

      setMyName("Karishma Budhathoki")
    }

  console.log(myName);
  return(   
    <div>
<h1> { myName }</h1>
<button className='btn' onClick={ChangeName}>Click me plz</button>
    
    
    
    
    
    
    </div>
  )
}

export default App