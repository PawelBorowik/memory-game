import React, {useState} from 'react';
import './App.css';


function App() {


  const [cards, setCards]= useState(["red", "red","brown", "brown", "green", "green", "blue", "blue", 
  "yellow", "yellow", "orangered", "orangered", "violet", "violet", "steelblue", "steelblue"])
  
 
      const iii = cards.map( card =>{
        const position =Math.floor(Math.random()*cards.length)
        // setCards(cards.splice(position, 1))
        return(
          <div className={`card ${cards[position]}`}></div>
        )
        }
      )
    
     
  
    
      

  return (
    <div className="container">
      {/* <button onClick={()=>handleClick()}>Start</button> */}
    <div className="App">
          
        {iii}
      
        </div>
    </div>
    
  );
  
}

export default App;
