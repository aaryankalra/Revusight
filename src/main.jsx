import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/react";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./components/theme-provider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ClerkProvider>
      <StrictMode>
        <ThemeProvider defaultTheme="system">
          <App />
        </ThemeProvider>
      </StrictMode>
    </ClerkProvider>
  </BrowserRouter>,
);
