// step 1 :ADD createcontext
import { StrictMode, createContext, useState} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// step 2 : creating context 

const Themecontext = createContext();
export {Themecontext}

// step 3 : creating provider (provides context in  parents components )

function Themeprovider({children}){

  const [theme,settheme] = useState(  "dark" );

  function toggletheme (){
    settheme((previoustheme) => (previoustheme === 'dark' ? 'light' : 'dark'))
  }

  return(
    <Themecontext.Provider value = {{theme, toggletheme}}>
      {children}
      </Themecontext.Provider>
  )
  
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Themeprovider>
     <App />
   </Themeprovider>

  </StrictMode>,
)
