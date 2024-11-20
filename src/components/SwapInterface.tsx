import { useState } from "react";
import { motion } from "framer-motion";
import TokenSelector from "./TokenSelector";
import { useWallet } from "../hooks/useWallet";

export default function SwapInterface() {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const { isConnected, connect, disconnect, address } = useWallet();

  const handleSwap = async () => {
    if (!isConnected) {
      await connect();
      return;
    }
    // Implement swap logic here
    console.log("Swapping tokens...");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md p-6 backdrop-blur-xl bg-black/30 rounded-2xl border border-purple-500/20 shadow-2xl"
    >
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Swap Tokens
      </h2>

      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            className="w-full px-4 py-3 bg-purple-900/20 rounded-lg border border-purple-500/30 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            placeholder="0.0"
          />
          <div className="absolute right-2 top-2">
            <TokenSelector token="ETH" onSelect={() => {}} />
          </div>
        </div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors"
          >
            ↓
          </motion.button>
        </div>

        <div className="relative">
          <input
            type="text"
            value={toAmount}
            onChange={(e) => setToAmount(e.target.value)}
            className="w-full px-4 py-3 bg-purple-900/20 rounded-lg border border-purple-500/30 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            placeholder="0.0"
          />
          <div className="absolute right-2 top-2">
            <TokenSelector token="USDC" onSelect={() => {}} />
          </div>
        </div>

        <button
          onClick={isConnected ? handleSwap : connect}
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-colors shadow-lg shadow-purple-500/30"
        >
          {isConnected ? "Swap" : "Connect Wallet"}
        </button>

        {isConnected && (
          <div className="text-sm text-purple-300 text-center">
            Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
          </div>
        )}
      </div>
    </motion.div>
  );
}
