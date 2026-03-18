import { useState } from 'react'
import './App.css'
import Counter from './components/counter'
import SetTheme from './components/SetTheme'
import Childone from './components/Childone'




function App() {
  const [count, setCount] = useState(0)


  //counter 

  function handleIncreament(){
    setCount(count + 1)
  }

  function handleReset(){
    setCount(0)
  }

  function handleDecreament(){
    if(count >= 1){
        setCount(count - 1)
    }
     
  }

  return (
    <>
    <div className="container">
      
          
     
      <button className="increament" onClick={handleIncreament}>+</button>
       <Counter count={count}/>
      <button className="decreament" onClick={handleDecreament}>-</button>

      
      <button className="increament" onClick={handleReset}>Reset</button>
    
      </div>

      <SetTheme/>
      <Childone />
      
      
 
    </>
  )
}

export default App
