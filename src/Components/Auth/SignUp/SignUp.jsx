import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../Images/logo2.png";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="SignIn-container">
      <div className="flex justify-center items-center py-16">
        <div>
          <img className="w-40 mx-auto" src={Logo} alt="" />
          <form>
            <input
              className="block mt-5 py-3 w-96 pl-3 text-lg outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              className="block mt-5 py-3 w-96 pl-3 text-lg outline-none"
              type="email"
              placeholder="Email"
            />
            <input
              className="block mt-5 py-3 w-96 pl-3 text-lg outline-none"
              type="password"
              placeholder="Password"
            />
            <input
              className="block mt-5 py-3 w-96 pl-3 text-lg outline-none"
              type="password"
              placeholder="Confirm Password"
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
