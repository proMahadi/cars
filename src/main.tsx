import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouterApp from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterApp />
    </Provider>
  </StrictMode>
);
