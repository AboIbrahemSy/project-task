import { useState,useEffect } from 'react'
import abi from "./artifacts/contracts/chai.sol/chai.json"
// import {ethers} from "ethers"
import Buy from './components/Buy'
import Memos from './components/Memos'
import './App.css'
import { StateType } from './type.t'
import  {ethersSimpleTestStarting}  from "ethers-simple-test";

// declare global {
//   interface Window {
//       ethereum: any
//   }
// }


function App() {
  const [state,setState]=useState<StateType>({
    provider:null,
    signer:null,
    contract:null as any
  })
  const [account,setAccount]=useState<string>('Not connected');

  useEffect(()=>{
    const template=async()=>{
   
      const contractAddres="0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contractABI=abi.abi;
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
      try{

        // const {provider,signer,contract, account}:StateType = 
        // ethersSimpleTestStarting
        const {provider,signer,contract, account} = 
        await ethersSimpleTestStarting({contractAddres:contractAddres,contractABI:contractABI})

        setState({provider,signer,contract});
        setAccount(account);
      //   const {ethereum}=window;
      //   const account = await ethereum.request({
      //     method:"eth_requestAccounts"
      //   })
 
      //   window.ethereum.on("accountsChanged",()=>{
      //    window.location.reload()
      //   })
      //   setAccount(account);
      //   const provider = new ethers.providers.Web3Provider(ethereum);//read the Blockchain
      //   const signer =  provider.getSigner(); //write the blockchain
        
      //   const contract = new ethers.Contract(
      //     contractAddres,
      //     contractABI,
      //     signer
      //   )
      //   console.log(contract)
      // setState({provider,signer,contract});
       
      }catch(error){
        console.log(error)
      }
    }
    template();
  },[])


  return (
    <div >
    <p style={{ marginTop: "10px", marginLeft: "5px" }}>
      <small>Connected Account - {account}</small>
    </p>
      <Buy state={state} />
      <Memos state={state} />
  </div>
  )
}

export default App
