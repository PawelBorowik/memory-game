import React from 'react';
import './App.css';


function App() {
  const cardColors=["red","red","brown","brown","green","green","blue","blue","yellow"
  ,"yellow",
  "orangered","orangered","violet","violet","steelblue","steelblue"]

  

  let cards=[...cardColors]
  // console.log(cards.length)

  const randomCard = cards.map( (el, index)=>{
      const position = Math.floor(Math.random()*cards.length)
      const cardColor = cards.splice(position,1)
      
      
      console.log(position)
    return(
      <div key={index} className={`card ${cardColor}`}>{position}</div>
      )
  })

  return (
    <div className="container">
      <div className="App">
          {randomCard}
      </div>
    </div>
  );
  
}

export default App;
