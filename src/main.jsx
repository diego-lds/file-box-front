import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { onLCP, onINP, onCLS } from "web-vitals";

onCLS(console.log);
onINP(console.log);
onLCP(console.log);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
