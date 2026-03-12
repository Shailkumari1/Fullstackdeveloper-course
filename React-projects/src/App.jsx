import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './counter'


function App() {
  const [count, setCount] = useState(0)

  function handleIncreament(){
    setCount(count + 1)
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

      </div>
 
    </>
  )
}

export default App
