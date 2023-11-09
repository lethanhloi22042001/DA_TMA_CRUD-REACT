import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children}) => {
     
    const [auth, setAuth] = useState({});
    const  userArr_Admin = [
        {
          id: "1",
          email: "quangHuy@gmail.com",
          password: "123",
          address: "Quang Nam",
          firstName: "Lê",
          lastName: "Lợi",
          phoneNumber: "08766291022",
          ErollNumber: "9010923912838102",
          days: "22/04/2001",
        },
        {
          id: "2",
          email: "lethanhloi@gmail.com",
          password: "123",
          address: "Quang Nam",
          firstName: "Huy",
          lastName: "Lợi",
          phoneNumber: "08766291022",
          ErollNumber: "9010923912838102",
          days: "22/04/2001",
        },
      ] ;
      const [isLogin_AuthContext, setIsLogin_AuthContext] = useState(localStorage.getItem('Login_Success'));

    return (
        <AuthContext.Provider value={{ auth, setAuth,userArr_Admin,isLogin_AuthContext  }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;