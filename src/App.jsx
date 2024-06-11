import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";

const clientId = import.meta.env.VITE_CLIENT_ID;
console.log(clientId);
function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
