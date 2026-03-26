import { useState , useEffect } from 'react'
import {useForm} from 'react-hook-form'
import {toast} from 'react-toastify'
import './App.css'

//function App() {

  // -------//basic handleform ---------

  // const [name, setname] = useState('')
  // const [email, setemail] = useState('')
  // const [phone, setphone] = useState('')


  // ---------upper Basic---------

  //   const[data , setdata] = useState({

  //     name: '',
  //     email : '',
  //     phone : ''

  //   })

  //   //validemail

  //   function validemail(email){
  //     const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //     return regex.test(email)

  //   }


  // //function handlesubmit

  // function handlesubmit (event){

  //   event.preventDefault()

  //       if(data.name == ''){
  //         alert("Provide the name");
  //         return
  //       }

  //       if(!validemail(data.email)){
  //         alert("enter valid email")
  //         return
  //       }

  //       if(data.phone.length !== 10){
  //         alert("enter 10 digits")
  //       }
  //      console.log(data.name,data.email,data.phone);
  // }

  // return (
  //   <>
  //     <form onSubmit={handlesubmit}>
  //       <div className='formcontainer'>
  //         <label>Name : </label>
  //         {/* <input type="text" value={name} onChange={(event) => setname(event.target.value)} /> */}

  //         <input type="text" value={data.name} onChange={(event) => setdata({...data,name:event.target.value})} />

  //       </div>

  //       <div>
  //         <label>Email :</label>
  //         {/* <input type="email" value={email} onChange={(event) => setemail(event.target.value)} /> */}

  //         <input type="email" value={data.email} onChange={(event) => setdata({...data, email : event.target.value})} />
  //       </div>

  //       <div>
  //         <label>Phone :</label>
  //         {/* <input type="number" value={phone} onChange={(event) => setphone(event.target.value)} /> */}

  //         <input type="number" value={data.phone} onChange={(event) => setdata({...data , phone : event.target.value})} />
  //       </div>

  //       <button type='submit'>Submit</button>
  //     </form>
   // </>
 // )
//}


                               //  create useform install react-hook-form 

     function App (){


      // step 2 : use hook 

      
       const { register, handleSubmit, formState: { errors } } = useForm();
      
      //useEffect 

      useEffect(() => {

        if(errors.name){
          toast.error(errors.name.message)
        }

        if(errors.email){
          toast.error(errors.email.message)
        }

        if(errors.phone){
          toast.error(errors.phone.message)
        }
      })


      // show data 

      function onSubmit(data) {
         console.log(data)
        
      }

      return(
      <>
      <form onSubmit={handleSubmit(onSubmit)} >
      
             <div className='form-container'>
             <div className='input-box'>
              <label>Name : </label>
              <input className='input-type' {...register('name',{required : 'Name is required'})} />
              {errors.name && <p>{errors.name.data}</p>}
             </div>

             <div className='input-box'>
              <label >Email : </label>
              <input className='input-type' {...register('email',{
                
                required : 'Email is required' ,
                pattern : {
                     value : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                     messege : "Email is not valid"
  
                }

                

              }
              
              )} />
              {errors.email  && <p>{errors.email.data}</p>}
             </div>

             <div className='input-box'>
               <label>Phone: </label>
               <input className='input-type' {...register('phone' , {
                required : "Phone number is required ",
                pattern : {
                  value : "^\\+(?:[0-9] ?){6,14}[0-9]$",
                  messege : " phone number is only 10 digits"
                }
               })} />
               {errors.phone  && <p>{errors.phone.data}</p>}
             </div>

             <button type='submit' >
  submit
</button>
       </div>
      </form>

      </>
      )
     }                          

export default App
