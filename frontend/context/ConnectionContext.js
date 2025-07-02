import { ethers } from 'ethers';
import { useState, useEffect, createContext, useContext } from 'react';
import { SHOPPINGVERSE_ADDRESS, SHOPPINGVERSE_ABI } from '../config';

// Create the context
export const ConnectionContext = createContext();

// Custom hook to use the connection context
export const useConnection = () => useContext(ConnectionContext);

export const ConnectionProvider = ({ children }) => {
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  // Connect wallet function
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        console.log("Connecting to MetaMask...");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        
        // Request account access
        const accounts = await provider.send("eth_requestAccounts", []);
        const currentAccount = accounts[0];
        console.log("Connected to account:", currentAccount);
        setAccount(currentAccount);
        
        // Get signer
        const signer = provider.getSigner();
        setSigner(signer);
        setIsConnected(true);
        
        return signer;
      } else {
        throw new Error('Please install MetaMask!');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      throw error;
    }
  };

  // Initialize contract when signer changes
  useEffect(() => {
    const initContract = async () => {
      if (signer && SHOPPINGVERSE_ADDRESS && SHOPPINGVERSE_ABI) {
        try {
          console.log('Initializing contract with address:', SHOPPINGVERSE_ADDRESS);
          console.log('ABI:', SHOPPINGVERSE_ABI);
          
          const contractInstance = new ethers.Contract(
            SHOPPINGVERSE_ADDRESS,
            SHOPPINGVERSE_ABI,
            signer
          );
          
          console.log('Contract initialized successfully:', contractInstance);
          setContract(contractInstance);
        } catch (error) {
          console.error('Error initializing contract:', error);
        }
      } else {
        console.log('Missing dependencies for contract initialization:',
          { hasSigner: !!signer, 
            hasAddress: !!SHOPPINGVERSE_ADDRESS, 
            hasABI: !!SHOPPINGVERSE_ABI,
            address: SHOPPINGVERSE_ADDRESS
          });
      }
    };

    if (signer) {
      initContract();
    }
  }, [signer]);

  // User function to create buyer
  const createBuyer = async (buyerData) => {
    try {
      if (!contract) {
        // If contract is not available, try to connect and initialize again
        const newSigner = await connectWallet();
        if (!contract) {
          throw new Error('Contract not initialized. Please check the contract address and ABI.');
        }
      }
      
      console.log('Creating buyer with data:', buyerData);
      const tx = await contract.createBuyer(
        buyerData.name,
        buyerData.email,
        buyerData.phone,
        buyerData.birthday,
        buyerData.gender,
        buyerData.address,
        buyerData.city,
        buyerData.zipCode
      );
      
      console.log('Transaction sent:', tx.hash);
      await tx.wait();
      console.log('Transaction confirmed');
      return tx;
    } catch (error) {
      console.error('Error creating buyer:', error);
      throw error;
    }
  };

  return (
    <ConnectionContext.Provider value={{ 
      contract, 
      createBuyer, 
      connectWallet, 
      isConnected,
      account
    }}>
      {children}
    </ConnectionContext.Provider>
  );
}; 