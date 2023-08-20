// pages/index.js
import React from 'react';
import BigButton from '../components/BigButton';

const addEthereumChain = async () => {
  if (typeof window.ethereum == 'undefined') {  
    alert("Metamask is not installed");
    return;
  } else {
    const currentNetwork = await window.ethereum.request({ method: 'eth_chainId' });
    if (currentNetwork == "0x474a3") {
      alert("You are already connected to Cipherem Testnet");
      return;
    } else {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [{
            chainId: "0x474a3",
            rpcUrls: ["https://testnet.cipherem.com/"],
            chainName: "Cipherem Testnet",
            nativeCurrency: {
              name: "Cipherem",
              symbol: "CIP",
              decimals: 18
            }
          }]
        });
        alert("Cipherem chain added successfully!");
      } catch (error) {
        console.error("Error adding Cipherem chain:", error);
        alert("Error adding Cipherem chain:", error);
      }
    }
  }
};

const HomePage = () => {
  return (
    <div className="centered-container">
      <h1 className='headline'>Cipherem zkEVM Testnet</h1>
      <BigButton buttonText="Add Cipherem Chain" onClick={addEthereumChain} />
    </div>
  );
};

export default HomePage;
