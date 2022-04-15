
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import Logo from "../../../Images/logo2.png";
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignIn = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user1, error1] = useAuthState(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const onEmailSubmit = e => {
    e?.preventDefault()
    signInWithEmailAndPassword(email, password)
    
    // It's not working
    if (user1) {
      console.log(user);
      navigate('/')
      
    } else {
      console.log(error);
    }
  }
  
  return (
    <div className="SignIn-container h-[61.7vh]">
      <div className="flex justify-center items-center py-16">
        <div>
          <img className="w-40 mx-auto" src={Logo} alt="" />
          <div >
            <input onBlur={e => setEmail(e.target.value)} className="block mt-5 py-3 w-96 pl-3 text-lg outline-none" type="text" placeholder="Email" />
            <input onBlur={e => setPassword(e.target.value)} className="block mt-5 py-3 w-96 pl-3 text-lg outline-none" type="password" placeholder="Password" />
            <input onClick={() =>onEmailSubmit()}  className="block my-5 w-96 bg-red-600 text-white py-3" type="submit" value="Sign In" />
          </div>
          <button onClick={() => navigate('/signup')} className="text-red-600 mx-auto block text-lg font-semibold">New to Red Onion</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
