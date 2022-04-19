import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import Logo from "../../Images/logo2.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged Out");
      })
      .catch((error) => {
        toast.error("A problem occured");
      });
  };
  return (
    <div className="flex items-center justify-between h-20 container mx-auto">
      <Helmet>
        <title>Home - Red Onion</title>
      </Helmet>
      <div onClick={() => navigate("/")}>
        <img className="w-32" src={Logo} alt="" />
      </div>
      <nav className="flex items-center">
        <Link className="ml-8 text-xl font-bold" to={"/cart"}>
          <BsCart3 />
        </Link>
        {user ? (
          <button onClick={logOut} className="ml-8 text-lg font-semibold">
            Log Out
          </button>
        ) : (
          <Link className="ml-8 text-lg font-semibold" to={"/signin"}>
            Log In
          </Link>
        )}
        <Link
          className="ml-8 text-lg font-semibold bg-red-600 py-1 rounded-full text-white px-5"
          to={"/signup"}
        >
          Sign Up
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
