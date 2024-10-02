import { signOut } from "firebase/auth";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <>
      <div className="absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        ></img>
     {user &&(  <div className="flex  align-middle">
        
        <img
          alt="userIcon "
          src={user?.photoURL}
          className="w-8 h-8 mt-4"
        ></img>
   
        <button onClick={handleSignout} className="font-bold text-white p-2 ">
          Sign Out{" "}
        </button>  
      </div>)}
      </div>
    </>
  );
}

export default Header;
