import React, { createContext, useEffect, useState } from 'react';
import {
   createUserWithEmailAndPassword,
   deleteUser,
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from 'firebase/auth';
import app from '../Firebase/Firebase';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loader, setLoader] = useState(true);
   //CreateUser
   const createUser = (email, password) => {
      setLoader(false);
      return createUserWithEmailAndPassword(auth, email, password);
   };
   //Update User
   const updateUser = (name) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
      });
   };
   //Login user
   const login = (email, password) => {
      setLoader(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   //Logout user
   const logout = () => {
      return signOut(auth);
   };

   const googleLogin = () => {
      return signInWithPopup(auth, provider);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoader(false);
         console.log('current user', currentUser);
      });
      return () => unSubscribe();
   }, []);

   const authInfo = { createUser, updateUser, login, logout, user, loader, googleLogin };
   return (
      <div>
         <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      </div>
   );
};

export default AuthProvider;
