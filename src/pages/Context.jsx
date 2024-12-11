import React, { createContext, useState } from "react";
import { ethers } from "ethers";

const DexContext = createContext(null);

export const DexProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [account, setAccount] = useState(null);
  const [msg, setMsg] = useState("");

  // Move ConnectWallet inside the component body
  const ConnectWallet = async () => {
    if (!window.ethereum) {
      setMsg("Install MetaMask");
    } else {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const value = {
    ConnectWallet,
    account,
    msg,
  };

  return <DexContext.Provider value={value}>{children}</DexContext.Provider>;
};

export default DexContext;
