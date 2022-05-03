import { toast } from "react-toastify";

import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { types } from "../../types/types";
import { auth, googleAuthProvider } from "../../config/firebase";
import firebaseErrors from "../../translations/es/firebase_errors";

export const googleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        toast.error(firebaseErrors[error.message] || error.message);
      });
  };
};

export const emailAndPasswordLogin = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        toast.error(firebaseErrors[error.code] || error.message);
      });
  };
};

export const forgotPassword = (email) => {
  return (dispatch) => {
    sendPasswordResetEmail(auth, email, {
      url: `http://localhost:3000/login`,
    })
      .then(() => toast.success("¡Se ha enviado un enlace a tú correo!"))
      .catch((error) => {
        toast.error(firebaseErrors[error.code] || error.message);
      });
  };
};

export const resetPassword = (oobCode, newPassword) => {
  return (dispatch) => {
    confirmPasswordReset(auth, oobCode, newPassword)
      .then(() => toast.success("¡Se ha cambiado la contraseña!"))
      .catch((error) => {
        toast.error(firebaseErrors[error.code] || error.message);
      });
  };
};

export const register = (fullname, email, password) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      updateProfile(auth.currentUser, {
        displayName: fullname,
      })
        .then(() => {
          dispatch(login(auth.currentUser.uid, auth.currentUser.displayName));
        })
        .catch((error) => {
          toast.error(firebaseErrors[error.code] || error.message);
        })
    );
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const logout = () => {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch({
          type: types.logout,
        });
      })
      .catch((error) => {
        // console.log(error);
        toast.error(error)
      });
  };
};
