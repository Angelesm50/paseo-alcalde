import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";

// import I18nextProvider from "react-i18next";
// import i18next from "i18next";
// import global_es from './translations/es/global_es.json';

// i18next.init({
//   interpolation: {
//     escapeValue: false,
//   },
//   lng: "es",
//   resources: {
//     es: {
//       global: global_es
//     }
//   }
// });
// <I18nextProvider i18n={i18next}>
// </I18nextProvider>

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
