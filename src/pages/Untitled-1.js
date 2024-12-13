// import React, { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import axios from "axios";

// // Token list with addresses and decimals
// const TOKENS = {
//   ETH: {
//     address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
//     decimals: 18,
//     symbol: "ETH",
//   },
//   DAI: {
//     address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
//     decimals: 18,
//     symbol: "DAI",
//   },
//   USDC: {
//     address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
//     decimals: 6,
//     symbol: "USDC",
//   },
// };

// const TokenSwapDApp: React.FC = () => {
//   const [account, setAccount] = (useState < string) | (null > null);
//   const [sellToken, setSellToken] = useState("ETH");
//   const [buyToken, setBuyToken] = useState("DAI");
//   const [sellAmount, setSellAmount] = useState("");
//   const [price, setPrice] = useState < any > null;

//   // Connect Wallet
//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         const accounts = await window.ethereum.request({
//           method: "eth_requestAccounts",
//         });
//         setAccount(accounts[0]);
//       } catch (error) {
//         console.error("Failed to connect wallet", error);
//       }
//     }
//   };

// Fetch Price
const fetchPrice = async () => {
  if (!sellAmount) return;

  const params = {
    sellToken: TOKENS[sellToken].address,
    buyToken: TOKENS[buyToken].address,
    sellAmount: ethers
      .parseUnits(sellAmount, TOKENS[sellToken].decimals)
      .toString(),
  };

  try {
    const response = await axios.get("https://api.0x.org/swap/v1/price", {
      params,
      headers: {
        "0x-api-key": "YOUR_0X_API_KEY", // Replace with your actual key
      },
    });
    setPrice(response.data);
  } catch (error) {
    console.error("Price fetch error", error);
  }
};

//   // Execute Swap
//   const executeSwap = async () => {
//     if (!price) return;

//     try {
//       const params = {
//         sellToken: TOKENS[sellToken].address,
//         buyToken: TOKENS[buyToken].address,
//         sellAmount: ethers
//           .parseUnits(sellAmount, TOKENS[sellToken].decimals)
//           .toString(),
//         takerAddress: account,
//       };

//       const response = await axios.get("https://api.0x.org/swap/v1/quote", {
//         params,
//         headers: {
//           "0x-api-key": "YOUR_0X_API_KEY", // Replace with your actual key
//         },
//       });

//       const tx = {
//         from: account,
//         to: response.data.to,
//         data: response.data.data,
//         value: response.data.value,
//       };

//       await window.ethereum.request({
//         method: "eth_sendTransaction",
//         params: [tx],
//       });
//     } catch (error) {
//       console.error("Swap execution error", error);
//     }
//   };

//   // Use Effect for Price Fetching
//   useEffect(() => {
//     if (sellAmount) {
//       const timer = setTimeout(fetchPrice, 500);
//       return () => clearTimeout(timer);
//     }
//   }, [sellAmount, sellToken, buyToken]);

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
//       {!account ? (
//         <button
//           onClick={connectWallet}
//           className="w-full bg-blue-500 text-white p-2 rounded"
//         >
//           Connect Wallet
//         </button>
//       ) : (
//         <>
//           <div className="mb-4">
//             <select
//               value={sellToken}
//               onChange={(e) => setSellToken(e.target.value)}
//               className="w-full p-2 border rounded"
//             >
//               {Object.keys(TOKENS).map((token) => (
//                 <option key={token} value={token}>
//                   {token}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="mb-4">
//             <input
//               type="number"
//               value={sellAmount}
//               onChange={(e) => setSellAmount(e.target.value)}
//               placeholder="Enter sell amount"
//               className="w-full p-2 border rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <select
//               value={buyToken}
//               onChange={(e) => setBuyToken(e.target.value)}
//               className="w-full p-2 border rounded"
//             >
//               {Object.keys(TOKENS).map((token) => (
//                 <option key={token} value={token}>
//                   {token}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {price && (
//             <div className="mb-4">
//               <p>
//                 You'll receive:{" "}
//                 {ethers.formatUnits(price.buyAmount, TOKENS[buyToken].decimals)}{" "}
//                 {buyToken}
//               </p>
//             </div>
//           )}

//           <button
//             onClick={executeSwap}
//             disabled={!price}
//             className="w-full bg-green-500 text-white p-2 rounded disabled:opacity-50"
//           >
//             Swap
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default TokenSwapDApp;
