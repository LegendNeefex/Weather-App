import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"
import cors from "cors";


cors({
  origin: 'http://localhost:3000',
});


const root = createRoot(document.querySelector("#root"))

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)