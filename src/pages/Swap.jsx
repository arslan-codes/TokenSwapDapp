import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
const Swap = () => {
  const [TokenText, SetTokenText] = useState("Select Token");
  const [token2, SetTokenText2] = useState("Select Token");

  const [gas, Setgas] = useState(0.0);

  const tokens = ["abc", "abdf", "dsfksd", "dfsdb"];

  const handleChangeToken = (token) => {
    SetTokenText(token);
    document.getElementById("my_modal_2").close();
  };
  const handleChangeTokenBelow = (token) => {
    SetTokenText2(token);
    document.getElementById("my_modal_3").close();
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
      className="mt-4 rounded-2xl"
    >
      <div className=" h-auto w-full  p-6 border-2 rounded-2xl flex flex-col">
        <div className="text-4xl font-semibold text-start">Swap</div>
        <div className=" mx-4 rounded-2xl my-2 bg-gray-100">
          <div className="flex h-32 justify-center items-center gap-4 p-4">
            <input
              type="text"
              placeholder="Amount "
              className="input input-bordered focus:border-none w-1/2 max-w-xs"
            />
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              {TokenText}
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box bg-none ">
                {tokens.map((token, index) => (
                  <p
                    key={index}
                    className="cursor-pointer p-2 hover:bg-gray-200 rounded-md"
                    onClick={() => handleChangeToken(token)}
                  >
                    {token}
                  </p>
                ))}
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
        {/*  */}
        <div className=" mx-4 rounded-2xl my-2 bg-gray-100">
          <div className="flex h-32 justify-center items-center gap-4 p-4">
            <input
              type="text"
              placeholder="Amount "
              className="input input-bordered focus:border-none w-1/2 max-w-xs"
            />
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              {token2}
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box bg-none ">
                {tokens.map((token, index) => (
                  <p
                    key={index}
                    className="cursor-pointer p-2 hover:bg-gray-200 rounded-md"
                    onClick={() => handleChangeTokenBelow(token)}
                  >
                    {token}
                  </p>
                ))}
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
        <div>
          <div className="text-start mx-6 my-2 ">
            <p>Estimated Gas : {gas} Wei</p>
          </div>
          <div>
            <div className=" btn btn-success  mx-4 rounded-2xl my-2 h-20 items-center flex justify-center">
              <p className="text-2xl font-bold text-black">Swap </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Swap;
