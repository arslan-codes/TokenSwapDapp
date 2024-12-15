import React, { useState, useEffect, useRef, useContext } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { RiExchangeBoxLine } from "react-icons/ri";
import { ethers } from "ethers";
import DexContext from "./Context";
const ZEROX_API_KEY = import.meta.env.ZEROX_API_KEY;

import qs from "qs";
const Swap = () => {
  const modalRef = useRef(null);
  const [token1, setToken1] = useState();
  const [token2, setToken2] = useState();
  const { ConnectWallet, account, msg } = useContext(DexContext);

  const [formAmmount, SetFromAmmount] = useState(); //price to sell
  const [toAmount, SettoAmount] = useState(); //price to get
  const [price, setPrice] = useState();
  const [ErrorMsg, setErrorMsg] = useState();
  const [searchKeyword, SetSearchItem] = useState();
  const [AllToken, ResetALLToken] = useState();

  const [tokens, setAllTokens] = useState([]);
  const [gas, SetGas] = useState(0.0);
  // 593f132c-54c2-4cd9-a3aa-880f5ee4880c

  useEffect(() => {
    async function fetch() {
      console.log("Fetching tokens...");
      try {
        const response = await axios.get(
          "https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokenlist.aave.eth.link"
        );

        // const tokens = response.data.tokens.slice(0, 100);
        setAllTokens(response.data.tokens || []);
        ResetALLToken(response.data.tokens || []);
      } catch (error) {
        console.error("Error fetching tokens:", error);
      }
    }
    fetch();
    console.log("fetched");
  }, []);

  function searchTokens(value) {
    if (!value) {
      // Reset tokens to the original list when the search value is cleared
      setAllTokens(AllToken);
    } else {
      // Filter tokens based on the search value
      const filteredTokens = tokens.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setAllTokens(filteredTokens);
    }
  }

  async function Getprice() {
    if (!formAmmount || !token1 || !token2) return;
    const priceParams = {
      chainId: 1,
      sellToken: token1.address,
      buyToken: token2.address,
      sellAmount: ethers.parseUnits(formAmmount, token1.decimals),
      taker: account,
    };
    const headers = {
      "0x-api-key": "593f132c-54c2-4cd9-a3aa-880f5ee4880c",
      "0x-version": "v2",
    };
    console.log("params", priceParams, "");
    try {
      const response = await axios.get(
        `/0x-api/swap/permit2/quote?${qs.stringify(priceParams)}`,
        { headers }
      );
      if (response.data.liquidityAvailable === false) {
        setErrorMsg("Liquidity is unavailable for the given trade");
        SettoAmount(0);
        console.log("Liquidity is unavailable for the given trade.");
        return; // exit the function or handle accordingly
      }
      setErrorMsg("");
      const buyAmount = response.data.buyAmount / 10 ** token2.decimals;
      // const gasEstimate = response.data.gas;
      const gasEstimate =
        response.data?.fees?.gasFee ?? "Gas fee not available";
      console.log(gasEstimate);

      console.log(response);
      console.log(buyAmount, gasEstimate);
      SettoAmount(buyAmount);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    if (formAmmount && token1 && token2) {
      const timer = setTimeout(Getprice, 500);
      return () => clearTimeout(timer);
    }
  }, [formAmmount, token1, token2]);

  const handleOpenModal = () => {
    const modal = document.getElementById("my_modal_2");

    modal.showModal();
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleChangeToken = (token) => {
    // SetTokenText(token.symbol);
    // SetToken1Image(token.logoURI);
    setToken1(token);
    setAllTokens(AllToken);

    document.getElementById("my_modal_2").close();
  };

  const handleChangeTokenBelow = (token) => {
    setToken2(token);
    setAllTokens(AllToken);
    document.getElementById("my_modal_3").close();
  };

  const getLogoUrl = (logoURI) => {
    // If the logo URI starts with 'ipfs://', convert it to a full IPFS URL
    if (logoURI && logoURI.startsWith("ipfs://")) {
      return `https://ipfs.io/ipfs/${logoURI.split("ipfs://")[1]}`;
    }
    return logoURI || "https://via.placeholder.com/40"; // Default image if no logo
  };

  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 10,
          mass: 1,
          bounce: 0.5,
          duration: 2,
        },
      }}
      className="mt-4 rounded-2xl "
    >
      <div class="relative p-6 bg-black border-2 border-black shadow-lg">
        <div class="absolute inset-0 -translate-y-3 border-4 -translate-x-3 border-black bg-white"></div>
        <div class="relative z-10 ">
          <div className=" relative z-10 h-auto w-full  flex flex-col">
            <div className="text-4xl font-semibold  text-center">
              <div className="flex justify-center ">
                <RiExchangeBoxLine className="h-10 mx-4" />
                <span> Swap</span>
              </div>
            </div>

            {/* Token Input 1 */}
            <div className="mx-4  my-2 bg-gray-50">
              <div className="flex h-32 justify-between items-center gap-4 p-4 ">
                <input
                  type="text"
                  value={formAmmount}
                  placeholder="0.023"
                  className="input p-2 focus:border-none rounded-none input-bordered text-lg w-1/2 max-w-xs h-14"
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow only numbers and decimals
                    if (/^\d*\.?\d*$/.test(value)) {
                      SetFromAmmount(value);
                    }
                  }}
                />

                <button
                  className="w-44 p-2 flex justify-evenly border-2 border-black hover:bg-gray-200"
                  onClick={handleOpenModal}
                >
                  {/* {token4.name} */}
                  <span>
                    {" "}
                    {token1 ? (
                      <div className="flex items-center justify-around w-44 ">
                        <img
                          src={getLogoUrl(token1.logoURI)}
                          alt={"img"}
                          className="w-10 h-10 cover rounded-full"
                          onError={(e) =>
                            (e.target.src = "https://via.placeholder.com/40")
                          }
                        />
                        <span>{token1.symbol}</span>
                      </div>
                    ) : (
                      <p>Select Token</p>
                    )}{" "}
                  </span>
                </button>

                <dialog
                  id="my_modal_2"
                  ref={modalRef}
                  className="fixed modal inset-0 flex justify-center items-center  bg-gray-100 z-50"
                >
                  <div className="modal-box bg-white rounded-lg p-4 max-h-[80vh] overflow-y-auto">
                    <div>
                      <h2 className="text-xl font-semibold uppercase py-2">
                        Search Tokens
                      </h2>
                      <div className="flex justify-around">
                        <input
                          type="text"
                          value={searchKeyword}
                          placeholder="Search Tokens"
                          className="input w-full mx-4 h-12 focus:border-none input-bordered rounded-none"
                          onChange={(e) => {
                            SetSearchItem(e.target.value);
                            searchTokens(e.target.value);
                          }}
                        />
                        <button
                          className="btn  rounded-none btn-success p-4 h-12 hover:bg-gray-300  border-2 hover:border-2 hover:border-black border-black"
                          onClick={searchTokens}
                        >
                          Search
                        </button>
                      </div>
                    </div>
                    {tokens.map((token) => (
                      <div
                        key={token.address}
                        className="cursor-pointer flex items-center gap-4 p-2 hover:bg-gray-200 rounded-md"
                        onClick={() => handleChangeToken(token)}
                      >
                        <img
                          src={getLogoUrl(token.logoURI)}
                          alt={token.symbol}
                          className="w-10 h-10 rounded-full cover"
                          onError={(e) =>
                            (e.target.src = "https://via.placeholder.com/40")
                          }
                        />
                        <div className="flex font-sans px-4 flex-col  text-justify">
                          <span>{token.name}</span>
                          <span>{token.symbol}</span>
                        </div>
                      </div>
                    ))}
                    <button
                      className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                      onClick={() =>
                        document.getElementById("my_modal_2").close()
                      }
                    >
                      Close
                    </button>
                  </div>
                </dialog>
              </div>
            </div>
            {ErrorMsg ? (
              <div className=" mx-4 shadow-2xl h-10 border-4 border-black shadow-black bg-red-300 text-white">
                {ErrorMsg}
              </div>
            ) : (
              <p></p>
            )}
            {/* Token Input 2 */}
            <div className="mx-4  my-2 bg-gray-50 ">
              <div className="flex h-32 justify-between items-center gap-4 p-4">
                <input
                  type="text"
                  value={toAmount}
                  placeholder="0.023"
                  className="input p-2 focus:border-none rounded-none input-bordered text-lg w-1/2 max-w-xs h-14"
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow only numbers and decimals
                    if (/^\d*\.?\d*$/.test(value)) {
                      SettoAmount(value);
                    }
                  }}
                />
                <button
                  className="w-44 p-2 flex justify-evenly border-2 border-black hover:bg-gray-200"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  <span>
                    {" "}
                    {token2 ? (
                      <div className="flex items-center justify-around w-44 ">
                        <img
                          src={getLogoUrl(token2.logoURI)}
                          alt={"img"}
                          className="w-10 h-10 cover rounded-full"
                          onError={(e) =>
                            (e.target.src = "https://via.placeholder.com/40")
                          }
                        />
                        <span>{token2.symbol}</span>
                      </div>
                    ) : (
                      <p>Select Token</p>
                    )}{" "}
                  </span>
                </button>

                <dialog
                  id="my_modal_3"
                  className="fixed modal inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
                >
                  <div className="modal-box  rounded-lg p-4 max-h-[80vh] overflow-y-auto">
                    <div>
                      <h2 className="text-xl font-semibold uppercase py-2">
                        Search Tokens
                      </h2>
                      <div className="flex justify-around">
                        <input
                          type="text"
                          value={searchKeyword}
                          placeholder="Search Tokens"
                          className="input w-full mx-4 h-12 focus:border-none input-bordered rounded-none"
                          onChange={(e) => {
                            SetSearchItem(e.target.value);
                            searchTokens(e.target.value);
                          }}
                        />
                        <button
                          className="btn  rounded-none btn-success p-4 h-12 hover:bg-gray-300  border-2 hover:border-2 hover:border-black border-black"
                          onClick={searchTokens}
                        >
                          Search
                        </button>
                      </div>
                    </div>
                    {tokens.map((token) => (
                      <div
                        key={token.address}
                        className="cursor-pointer flex items-center  p-2 hover:bg-gray-200 rounded-md"
                        onClick={() => handleChangeTokenBelow(token)}
                      >
                        <img
                          src={getLogoUrl(token.logoURI)}
                          alt={token.symbol}
                          className="w-8 h-8 rounded-full"
                          onError={(e) =>
                            (e.target.src = "https://via.placeholder.com/40")
                          }
                        />
                        <div className="flex font-sans px-4 flex-col  text-justify">
                          <span>{token.name}</span>
                          <span>{token.symbol}</span>
                        </div>
                      </div>
                    ))}
                    <button
                      className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                      onClick={() =>
                        document.getElementById("my_modal_3").close()
                      }
                    >
                      Close
                    </button>
                  </div>
                </dialog>
              </div>
            </div>

            {/* Gas Estimate and Swap Button */}
            <div>
              <p className="text-start mx-6 my-2">Estimated Gas: {gas} Wei</p>
              <div className="btn btn-success mx-4 rounded-none  border-black my-2 h-20 items-center flex justify-center">
                <p className="text-2xl font-bold text-black">Swap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Swap;
