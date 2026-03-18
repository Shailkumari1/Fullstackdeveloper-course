import React , {useContext}from 'react'
import { Themecontext } from '../main'


function Subchildone() {
const {theme} = useContext(Themecontext);



  return (
    <div style={{background:'gray', color:'white' , display: "flex", justifyContent:'center', alignItems:'center', height:'40px' ,fontSize:'20px', font:"bold"}}>Subchildone :{theme}</div>
  )
}

export default Subchildone