import Web3 from "web3"
import WalletConnectProvider from "@walletconnect/web3-provider"

export const web3WalletConnectProvider = new WalletConnectProvider({
  infuraId: "af2d3ad9d6a44a18bd3eb7296fc044a9",
});

export function getWeb3Auto() {
  let web3 = null

  try {
    let provider = window.ethereum

    if (!provider && web3WalletConnectProvider.connected) {
      provider = web3WalletConnectProvider
    }
  
    web3 = new Web3(provider)
  } catch (error) {
    // Ignore
  }

  return web3
}

export function getWeb3(walletType) {
  let provider = window.ethereum

  if (walletType === 'wc') {
    provider = web3WalletConnectProvider
  }

  const web3 = new Web3(provider)

  return web3
}
