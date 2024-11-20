import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiConfig } from "wagmi";
import { config } from "./config/web3";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
);
