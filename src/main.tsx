import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AxiosInterceptor } from "@/interceptors";
import { layoutContainer } from "@/styled-components";
import { Provider } from "react-redux";
import { store } from "@/redux";

AxiosInterceptor();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
      <App />
  </Provider>
);
