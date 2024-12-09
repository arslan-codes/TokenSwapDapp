import React from "react";
import { useState } from "react";

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
    <div className="mt-4">
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
          <div className="text-start mx-6 ">
            <p>Extimated Gas : {gas} Wei</p>
          </div>
          <div>
            <div className="btn btn-warning mx-4 rounded-2xl my-2 w-5/6">
              Swap Token
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
