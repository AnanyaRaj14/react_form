import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPass] = useState("");
  const [conPass, setconPass] = useState("");



  const submitData = () => {
    if(!name || !mail || !password || !conPass){
      alert("kindly fill name, email, and both password field!!");
      return;
    }
    if(password != conPass){
      alert("both password do not matches!!")
      return;
    }


    console.log("welcome");
    // console.log(`Welcome ${name}, your email id is ${mail}`);

    
  }

  return (
    <>
     <h1>Registration Form</h1>
     <input 
        type="text" 
        placeholder='Enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input 
        type="email" 
        placeholder='Enter your email'
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <br />
      <input 
        type="password" 
        placeholder='Enter password'
        value={password}
        onChange={(e) => setPass(e.target.value)}
      />
      <br />
      <input 
        type="password" 
        placeholder='Confirm Password'
        value={conPass}
        onChange={(e) => setconPass(e.target.value)}
      />
      <br />
     <button onClick={submitData}>Submit</button>
    </>
  )
}

export default App
