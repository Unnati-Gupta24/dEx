import { motion } from "framer-motion";

interface TokenSelectorProps {
  token: string;
  onSelect: () => void;
}

export default function TokenSelector({ token, onSelect }: TokenSelectorProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onSelect}
      className="px-3 py-1 bg-purple-500/20 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-colors"
    >
      {token}
    </motion.button>
  );
}
