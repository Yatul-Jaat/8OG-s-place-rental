import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import UseSelectedContext from "./consumer/components/context/useSelectedContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseSelectedContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UseSelectedContext>
  </StrictMode>
);
