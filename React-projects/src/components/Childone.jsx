import React , {useContext} from 'react'
import Subchildone from './Subchildone'
import { Themecontext } from '../main'
 

function Childone() {

  const {toggletheme} = useContext(Themecontext);
  return (
    <>
    <div style={{background : "black", color:'white', height: '50px', font:"bold",fontSize : "25px", justifyContent: 'center', display:"flex", alignItems:"center"}}>Childone</div>
     <Subchildone  />

     <div style={{background : "black", color:'white', height: '50px', font:"bold",fontSize : "25px", justifyContent: 'center', display:"flex", alignItems:"center"}}>
      <button onClick={toggletheme} style={{background: 'gray', color : 'white' , height : '40px '}}> change mode </button>
     </div>
     
      

    </>


  )
}

export default Childone