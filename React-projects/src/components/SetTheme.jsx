import React, { useState , useEffect , useRef , useReducer} from 'react'

function SetTheme() {
    const [theme,setTheme] = useState("black")

    const themeRef = useRef(null);

    //useEffect()

    useEffect(() => {
        setTheme("brown")

    }, [])

    //useRef()

     function handleClickChange() {

      themeRef.current.style.color = "yellow"; 
    
  }

    //useReducer()

    //step 2 : set initalvalue 

    const Initaialvalue = {count : 0 , messege : ''}

    // step 3 : create reducer function

    const reducer = ( state , action) => {

        switch(action.type){
            case 'inc': 
            return {count : state.count + 1 , messege : "INCREMENT"}
            case 'dec':
            return { count : state.count - 1, messege : 'DECREMENT'}
            case 'reset' :
            return { count : 0 , messege : ' RESET'}

        }


    }

    // step 4 : use useReducer hook usage 
    const [state , dispatch] = useReducer(reducer , Initaialvalue);



    // change theme function
    function changeTheme (){

        if(theme == 'black'){
            setTheme("red")
        }
        else{
            setTheme("black")
        }
    }
  return (
    <>
    <div style={{background: theme, width: '100%', height: '100px',justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
        <button  onClick={changeTheme} className='increament' >Change Theme</button>

         <h1 ref={themeRef} onClick={handleClickChange}>This is my useRef</h1>
         
    </div>

    <div style={{background:"gray",height:'100px', widht: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', color: 'white', gap:'20px'}}>
        <h1 style={{color: 'darkgreen'}}> useReducer counter : <span style={{background : "green", color : "white"}}> {state.count} </span> and state was {state.messege}</h1>
        
        <button style={{fontSize : "30px", background : 'green'}} onClick={() => dispatch({type : 'inc' })}>+</button>
        <button style={{fontSize : "30px",background : 'green'}} onClick={()=> dispatch({type : 'dec'  })}>-</button>
        <button style={{fontSize : "30px",background : 'green'}} onClick={() => dispatch({type : 'reset' })}>Reset</button>
        
    </div>

    
    
    </>
  )
}

export default SetTheme
