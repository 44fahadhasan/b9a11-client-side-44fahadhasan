import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

// context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const githubProvider = new GithubAuthProvider();
  const googlProvider = new GoogleAuthProvider();

  // github login
  const loginWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // google login
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googlProvider);
  };

  // create new user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // setup user name & profile picture
  const updateUserProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  // user login with email
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user logout
  const userLogOut = () => {
    return signOut(auth);
  };

  // user current status
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if (currentUser) {
        // login
        setUser(currentUser);
      } else {
        // logout
        setUser(null);
      }
    });

    // clean up
    return () => unSubscribe();
  }, []);

  console.log("active user:", user);

  const authInfo = {
    user,
    loading,
    loginWithGithub,
    loginWithGoogle,
    createNewUser,
    updateUserProfile,
    userLogin,
    userLogOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
