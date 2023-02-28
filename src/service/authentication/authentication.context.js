import { getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState, createContext } from "react";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children,navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const auth = getAuth();
  onAuthStateChanged(auth, (usr)=>{

    if(usr){
        setUser(usr);
        // setIsLoading(false)
       
         
    }
    else{
        // setIsLoading(false)
        setUser(null)
        setError(null)
    }
  })

  const onLogout =()=>{
    setUser(null)
    signOut(auth);
    
   }

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        console.log(u)
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister =(email,password,repeatedPassword)=>{
    setIsLoading(true)
    if(password !== repeatedPassword){
        setError("error: password do not match")
        return;
    }
  

    createUserWithEmailAndPassword(auth,email,password).then((u) => {
        setUser(u);
        console.log(u)
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });;
  }
 
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};