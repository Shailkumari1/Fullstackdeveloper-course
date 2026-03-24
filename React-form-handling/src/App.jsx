import { useState } from 'react'
import './App.css'

function App() {

  // -------//basic handleform ---------

  // const [name, setname] = useState('')
  // const [email, setemail] = useState('')
  // const [phone, setphone] = useState('')


  // ---------upper Basic---------

    const[data , setdata] = useState({

      name: '',
      email : '',
      phone : ''

    })

    //validemail

    function validemail(email){
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      return regex.test(email)

    }


  //function handlesubmit

  function handlesubmit (event){

    event.preventDefault()

        if(data.name == ''){
          alert("Provide the name");
          return
        }

        if(!validemail(data.email)){
          alert("enter valid email")
          return
        }

        if(data.phone.length !== 10){
          alert("enter 10 digits")
        }
       console.log(data.name,data.email,data.phone);
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <div className='formcontainer'>
          <label>Name : </label>
          {/* <input type="text" value={name} onChange={(event) => setname(event.target.value)} /> */}

          <input type="text" value={data.name} onChange={(event) => setdata({...data,name:event.target.value})} />

        </div>

        <div>
          <label>Email :</label>
          {/* <input type="email" value={email} onChange={(event) => setemail(event.target.value)} /> */}

          <input type="email" value={data.email} onChange={(event) => setdata({...data, email : event.target.value})} />
        </div>

        <div>
          <label>Phone :</label>
          {/* <input type="number" value={phone} onChange={(event) => setphone(event.target.value)} /> */}

          <input type="number" value={data.phone} onChange={(event) => setdata({...data , phone : event.target.value})} />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
