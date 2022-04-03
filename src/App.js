import React, { useState } from 'react'
import './App.css'; 
//import RulesHook from "./components/RulesHook";
import  UseStateArray from "./components/UseStateArray";
const App = () => {

  
   // const[myName, setMyName]=useState('Prashna ');


    //const ChangeName= () => { 
      //let Val=myName;
      //if(Val==='Prashna'){

        ///setMyName('Karishma Budhathoki')

     // }else{

        //setMyName('Prashna')

     // }

      
   // }

  //console.log(myName);
  return(   
    <div>
{/*<h1> { myName }</h1>

  <button className='btn' onClick={ChangeName}>Click me plz</button>*/}
    
    
    
  {/*<RulesHook/>*/}
  <UseStateArray />
    
    </div>
  )
}

export default App