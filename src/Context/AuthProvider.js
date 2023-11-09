import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children}) => {
    const [auth, setAuth] = useState({});
    const [isLogin, setIsLogin] = useState(localStorage.getItem('Login_Success'));
    console.log('isLogin Provider',isLogin);
    return (
        <AuthContext.Provider value={{ auth,isLogin,setIsLogin  }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;