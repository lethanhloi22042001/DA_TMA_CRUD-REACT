import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = (  ) => {
    const location = useLocation();
    const { isLogin_AuthContext  } = useAuth();
   
    if ( isLogin_AuthContext === null || isLogin_AuthContext === false) {
        return <Navigate to="/login" state={{ from: location }}  replace/>;
      }
    
    return <Outlet />;
}

export default RequireAuth;