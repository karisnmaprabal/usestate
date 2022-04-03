import React,{ useState } from 'react'

const UseStateArray = () => {
const myBioData =[
{  
    id:0,  myName:"Karishma", age:22

},{
    id:1,  myName:"Budhathoki", age:21
},{
    id:2,  myName:"prasai", age:20
}

]
const [myArray, setmyArray] = useState(myBioData);


const clearArray=()=>{
    setmyArray([]);
    
}


  return (
    <>

          { 
              myArray.map((curElm) => <h1 className="h1style"> Name:{curElm.myName} & age:{curElm.age}</h1>)
          }
          <button className="btn"  onClick={clearArray}>Clear</button>
    </>
  )
}

export default UseStateArray