import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";

import { loadDataHelper } from "../../helpers/loadDataHelper";
import { readNominaData } from "../actions/nominaAction";
import { auth } from "../../config/firebase";
import { login } from "../actions/authAction";

const AuthContext = createContext({
  currentUser: null,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setCurrentUser(user);
        const data = await loadDataHelper(user.uid);
        dispatch(readNominaData(data));
      } else {
        setCurrentUser(null);
      }
      return () => {
        unsubscribe();
      };
    });
  }, [dispatch, currentUser]);

  const value = {
    currentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
