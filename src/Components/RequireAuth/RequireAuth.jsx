import { sendEmailVerification } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const RequireAuth = ({ children }) => {
  let location = useLocation();

  const emailVarification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent
      toast.success("Verification mail Sent", {id: 'test'})
    });
  };

  const [user] = useAuthState(auth);

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div className="flex justify-center items-center h-[62vh] bg-slate-200">
        <div className="text-center">
          <p className="text-red-600 font-bold text-4xl">
            Your Email isn't verified.
          </p>
          <button onClick={emailVarification} className="bg-lime-500 mt-5  py-1 px-5 rounded text-white font-semibold">
            Sent Verification Mail
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
