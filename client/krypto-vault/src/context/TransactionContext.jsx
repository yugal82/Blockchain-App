import React, { createContext, useEffect, useState } from "react";
import { ethers } from 'ethers';
import { contractABI } from "../utils/constants";
import { contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

    return transactionContract;
}

export const TransactionProvider = ({ children }) => {

    const [connectedAccounts, setConnectedAccounts] = useState('')
    const [formData, setFormData] = useState({addressTo: '',amount:'',keyword:'',message:''});

    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));


    const handleSubmitButton = (e,name) => {
        setFormData((prevState) => ({...prevState,[name]:e.target.value}));
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert("Please install metamask!");
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (accounts.length) {
                setConnectedAccounts(accounts[0]);
            } else {
                console.log("No accounts connected!");
            }
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install metamask!");
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setConnectedAccounts(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    }
    const sendTransaction = async () => {
        try {
            if(!ethereum) return alert("Please install MetaMask!");

            //get the data from the form from welcome.jsx
            const {addressTo, amount,keyword,message} = formData;
            const transactionContract = getEthereumContract();

            const parsedAmount = ethers.utils.parseEther(amount);
            await ethereum.request({
                method:'eth_sendTransaction',
                params:[{
                    from:connectedAccounts,
                    to: addressTo,
                    gas:'0x5208',
                    value: parsedAmount._hex,
                }]
            })

            const transactionHash = await transactionContract.addToBlockchain(addressTo,parsedAmount,message,keyword);

            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            setIsLoading(false);
            console.log(`Success - ${transactionHash.hash}`);

            const transactionCount = await transactionContract.getEthereumContract();

            setTransactionCount(transactionCount.toNumber());
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);
    return (
        <TransactionContext.Provider value={{ connectWallet, connectedAccounts, formData,setFormData ,handleSubmitButton, sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}