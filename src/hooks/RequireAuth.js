import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";
import { render } from "react-dom";

const RequireAuth = (  ) => {
    const location = useLocation();
    const {  auth,isLogin,setIsLogin  } = useAuth();
   
    if ( isLogin === null ) {
        return <Navigate to="/login" state={{ from: location }}  replace/>;
        // return <Navigate to="/login"  />;
    }else if(isLogin === true){
        return <Outlet />;
    }
        return <Outlet />;

    
}

export default RequireAuth;