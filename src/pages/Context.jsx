import React, { createContext, useState } from "react";
import { ethers } from "ethers";

const DexContext = createContext(null);

export const DexProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [account, setAccount] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const ConnectWallet = async () => {
    if (loading) return; // Prevent duplicate requests
    setLoading(true);

    if (window.ethereum) {
      try {
        // Check if already connected
        const existingAccounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (existingAccounts.length > 0) {
          setAccount(existingAccounts[0]);
          setMsg("Connected");
        } else {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setAccount(accounts[0]);
          setMsg("Connected");
        }
      } catch (error) {
        if (error.code === 4001) {
          setMsg("Connection request rejected by the user");
        } else if (error.code === -32002) {
          setMsg("Connection request already in progress. Please wait.");
        } else {
          setMsg("Connection failed. Please try again.");
        }
        console.error("Error during wallet connection:", error);
      }
    } else {
      setMsg(
        "MetaMask is not installed. Please install it to connect your wallet."
      );
    }

    setLoading(false);
  };

  const value = {
    ConnectWallet,
    account,
    msg,
    loading,
  };

  return <DexContext.Provider value={value}>{children}</DexContext.Provider>;
};

export default DexContext;
