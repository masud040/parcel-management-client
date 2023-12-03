import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, SetLoading] = useState(true);
  const createUser = (email, password) => {
    SetLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    SetLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithSocial = (provider) => {
    SetLoading(true);
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    SetLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current user-->", currentUser);
      SetLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    createUser,
    signIn,
    signInWithSocial,
    logOut,
    updateUserProfile,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
