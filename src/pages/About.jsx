import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-full py-8 sm:py-10 lg:py-10">
        <div className="sm:mb-8 sm:flex sm:justify-center"></div>
        <div className=" flex justify-center">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
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
            className="w-3/4 md:w-1/2 h-auto"
          >
            <h1 className="font-bold m-6 text-3xl text-center">
              About the Token Swap DApp{" "}
            </h1>{" "}
            <div className="relative p-4 bg-black border-2 border-black shadow-lg group">
              <div className="absolute inset-0 -translate-x-2 border-2 -translate-y-2 border-black bg-green-300 group-hover:bg-green-200"></div>
              <div className="relative z-10 group-hover:bg-green-200">
                <p className="text-base font-mono">
                  Welcome to our Token Swap DApp, inspired by platforms like
                  Matcha.xyz and powered by the 0x Protocol. This decentralized
                  application provides a seamless experience for trading ERC-20
                  tokens, leveraging liquidity aggregation to ensure you always
                  get the best price.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row  justify-center  gap-6 m-10 w-3/4">
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{
                x: 0,
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
              className="relative p-4 bg-black border-2 border-black shadow-lg group w-1/3"
            >
              <div className="absolute inset-0 -translate-y-1 border-2 translate-x-1 border-black bg-white "></div>
              <div className="relative z-10 ">
                <h1 className="font-bold my-4  text-3xl">
                  Why Liquidity Aggregation Matters
                </h1>
                <p>
                  When swapping tokens, finding the optimal price is crucial.
                  Our DApp aggregates liquidity from various decentralized
                  exchange (DEX) networks, automated market makers (AMMs), and
                  even off-chain sources like market makers and order books. By
                  using the 0x Swap API, we ensure trades are executed with
                  minimal slippage, lower transaction costs, and optimal
                  routing, enhancing the overall trading experience.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{
                x: 0,
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
              className="relative p-4  bg-black border-2 border-black shadow-lg group w-1/3"
            >
              <div className="absolute inset-0 -translate-y-1 border-2 translate-x-1 border-black bg-white "></div>
              <div className="relative z-10 ">
                <h1 className="font-bold my-4  text-3xl">How It Works</h1>
                <div className="px-4">
                  <ul className="list-disc">
                    <li>
                      <strong> Connect Your Wallet:</strong> Link your wallet,
                      such as MetaMask, in just a few clicks.
                    </li>
                    <li>
                      {" "}
                      <strong> Select Tokens:</strong> Choose the tokens you
                      want to swap.{" "}
                    </li>
                    <li>
                      <strong> Get the Best Price:</strong> Our system instantly
                      fetches and displays the best available price for your
                      trade.
                    </li>

                    <li>
                      <strong> Confirm and Swap: </strong>Approve the
                      transaction, and you’re done!
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="  flex justify-center ">
          <div className="w-1/2 ">
            <h1 className="font-bold m-6 text-4xl text-center">
              Trusted Technology
            </h1>{" "}
            <p className="text-base  border-4 border-black text-center p-4 bg-red-300 ">
              Our DApp is powered by the 0x Protocol, the same trusted
              technology used by popular wallets like MetaMask and Coinbase
              Wallet. It ensures your trades are secure, efficient, and settled
              directly on the blockchain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
