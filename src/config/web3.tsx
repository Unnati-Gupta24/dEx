import { configureChains, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";

// Replace with your actual WalletConnect project ID
const projectId = "YOUR_WALLETCONNECT_PROJECT_ID";

const { chains, publicClient } = configureChains(
  [mainnet, sepolia],
  [w3mProvider({ projectId })]
);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});

export const ethereumClient = new EthereumClient(wagmiConfig, chains);

export const web3Modal = (
  <Web3Modal
    projectId={projectId}
    ethereumClient={ethereumClient}
    defaultChain={mainnet}
  />
);
