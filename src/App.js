import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material";

import theme from "./config/theme";
import { store } from "./store/store";
import AppRouter from "./routes/AppRouter";
import AuthContextProvider from "./services/auth/AuthContext";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <AuthContextProvider>
            <AppRouter />
          </AuthContextProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;