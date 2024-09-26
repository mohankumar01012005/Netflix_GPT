import  { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidData } from "../utils/validate";

function Login() {
  const [isSignInForm,setIsSignInFrom] =useState(true)
  const [errorMessage,setErrorMessage]=useState(null)

  const email=useRef(null);
  const password = useRef(null);
  const name = useRef(null)


  const handleButtonClick=()=>{
    // validate the form data 

    const message = checkvalidData(name.current.value,email.current.value,password.current.value)
    console.log(message);
    setErrorMessage(message)
    
    
  }
  const toggleSigniInForm=()=>{
    setIsSignInFrom(!isSignInForm)
  }
  return (
    <>
      <Header></Header>
      <Header></Header>
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg"
      ></img>
      <form onSubmit={(e)=>e.preventDefault()} className="w-4/12 p-12  bg-black absolute my-28 mx-auto  right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl p-4 ">{isSignInForm?"Sign In":"Sign Up"} </h1>
      { !isSignInForm && (<input
          ref={name}
          type="text"
          placeholder="Full Name "
          className="py-4 px-3 m-4 w-full bg-gray-700 "
        ></input>)}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="py-4 px-3 m-4 w-full bg-gray-700 "
        ></input>
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="py-4 px-3 m-4 w-full bg-gray-700"
        ></input>
        <p className="text-red-500 px-6  text-lg ">{errorMessage}</p>
        <button className="p-4 m-4 bg-red-700  w-full rounded-lg " onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"} </button>
        <p className="p-4 cursor-pointer" onClick={toggleSigniInForm}>{isSignInForm?"New to Netflix? Sign Up Now ":"Already a user? Sign In "}</p>
      </form>
    </>
  );
}

export default Login;
