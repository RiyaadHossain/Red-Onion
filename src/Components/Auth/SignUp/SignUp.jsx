import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../Images/logo2.png";
import auth from "../../../Firebase/Firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmCassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // On Email Submit
  const onEmailSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmCassword) {
      alert("Password didn't match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Account Created");
        navigate(from);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        console.log(errorMessage);
      });
  };
  return (
    <div className="SignIn-container">
      <div className="flex justify-center items-center py-16">
        <div>
          <img className="w-40 mx-auto" src={Logo} alt="" />
          <form onSubmit={onEmailSubmit}>
            <input
              className="block mt-5 py-3 w-96 pl-3 text-lg outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              className="block mt-5 py-3 w-96 pl-3 text-lg outline-none"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="block mt-5 py-3 w-96 pl-3 text-lg outline-none"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="block mt-5 py-3 w-96 pl-3 text-lg outline-none"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              className="block my-5 w-96 bg-red-600 text-white py-3"
              type="submit"
              value="Sign In"
            />
          </form>
          <button
            onClick={() => navigate("/signin")}
            className="text-red-600 mx-auto block text-lg font-semibold"
          >
            Already have an account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
