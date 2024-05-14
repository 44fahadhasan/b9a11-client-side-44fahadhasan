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
import auth from "../firebase/firebase.config";
import useAxiousSecureURL from "../hooks/useAxiousSecureURL";

// context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // axios secure url
  const axiosSecureURL = useAxiousSecureURL();

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
        // user login success
        setUser(currentUser);

        const activeUserEmail = { email: currentUser?.email };

        // jwt token http request start
        axiosSecureURL
          .post("/jwtToken", activeUserEmail)
          .then((response) => {
            console.log(response?.data);
          })
          .catch((error) => {
            console.log(error?.message);
          });

        // jwt token http request end
      } else {
        // user logout success
        setUser(null);

        // jwt token http request start
        axiosSecureURL
          .get("/logout")
          .then((response) => {
            console.log(response?.data);
          })
          .catch((error) => {
            console.log(error?.message);
          });

        // jwt token http request end
      }
    });

    // clean up firebase observer mathod
    return () => unSubscribe();
  }, [axiosSecureURL]);

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
