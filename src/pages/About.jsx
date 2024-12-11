// It's more than likely that it uses a liquidity aggregator which sources all the possible prices across off-chain (e.g. Market Makers, Orderbooks) and on-chain (e.g. DEXs, AMMs) and routes the best price for the user.

// In this tutorial, we will learn how to use the 0x API swap endpoint which allows users to fetch available quotes across the liquidity supply and uses smart order routing to split up a transaction across decentralized exchange networks to be filled with the lowest slippage possible while minimizing transaction costs.

// This is the same endpoint that is behind swaps in major wallets and exchanges such as MetaMask, Coinbase wallet, Zapper, and many more.

// Note that we won’t need to write any smart contracts to find and settle the trade! Instead, the 0x API allows web3 developers to easily tap into the 0x Protocol smart contracts which take care of all the logic used to settle a trade, allowing web developers to focus on building the best trade experience.

// By the end of this tutorial, you will learn how to do the following:

//     Understand why Liquidity Aggregation is important
//     Query and display an ERC20 token list
//     Use 0x API /swap Endpoint
//     Set a Token Allowance
//     Build a Simple Token Swap DApp that connects to MetaMask using web3.js
// A couple of key features to call out (code found in index.html):

//     Sign-in with MetaMask button - When this app is complete, clicking this button will enable the user to connect to their MetaMask wallet and enable the "Swap" button.
//     Swap Box
//         SELECT A TOKEN - Currently these sections just change color when a cursor hovers over them; by the end, users will be able to click and display a list of available tokens to swap.
//         amount - This is an input form that allows user to input a number.
//     Estimated Gas - The swap endpoint will return back estimated gas for the swap to go through. We will display that here.
//     Swap Button - As mentioned above, the "Swap" button is currently disabled, but we will enable it when the user has signed into MetaMask.

// Take a look around these elements in index.js taking note of their ids, class well as their corresponding styling in style.css.

import React from "react";

const About = () => {
  return <div>About</div>;
};

export default About;
