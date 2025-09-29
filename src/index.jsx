import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { I18nProvider } from "./i18n/i18n";
import AppRouter from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nProvider>
      <AppRouter />
    </I18nProvider>
  </React.StrictMode>
);
