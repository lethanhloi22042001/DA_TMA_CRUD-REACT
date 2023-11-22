import { useLocation, Navigate, Outlet } from "react-router-dom";
import { render } from "react-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const RequireAuth = () => {
    const is_Login_Admin = useSelector((state) => state.admin.Login_Admin); 
    const location = useLocation();
    
    if ( is_Login_Admin == null || is_Login_Admin == false) {
        return <Navigate to="/login" state={{ from: location }}  replace/>;
    }else if(is_Login_Admin === true){
        return <Outlet />;
    }
    return <Outlet />;

}

export default RequireAuth;