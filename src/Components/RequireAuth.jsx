import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase.init";
import Loading from "./Loading";

const RequireAuth=({children})=>{
    const [user, loading]=useAuthState(auth);
    const location=useLocation()
    // const navigate=useNavigate()
    if(loading){
      return <Loading></Loading> 
    }
    if(!user){
      return <Navigate to='/login' state={{from: location}} replace></Navigate>
     
    }
    if(!(user.emailVerified)){
      return <Navigate to='/email-verify' state={{from: location}} replace></Navigate>
     
    }
    return children;
}
export default RequireAuth;