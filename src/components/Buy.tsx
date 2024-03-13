import {ethers} from "ethers"
import "./Buy.css";
import { useState } from "react";

interface BuyProps{
  state:any
}

const Buy=({state}:BuyProps)=>{
    const [name,setName] = useState<string>('')
    const [message,setMessage] = useState<string>('')


    const buyChai = async(event : any)=>{
      event.preventDefault();
      const {contract}=state;
      // const name = document.querySelector("#name").value ;
      // const message = document.querySelector("#message").value;
      //const amount = document.querySelector("#amount").value;
//       let signature = await signer.signMessage("Hello World");
// console.log(signature)
      const amount = {value:ethers.utils.parseEther("1.00")}
      const transaction = await contract.buyChai(name,message,amount)
      // const transaction = await contract.buyChai(name,message)
      await transaction.wait();
      alert("Transaction is successul");
      window.location.reload();
    }
    return  (
      <div className="center">
       <h1>Thanks</h1>
        <form onSubmit={buyChai}>
          <div className="inputbox">
            <input type="text" required id="name" onChange={(e)=>{setName(e.target.value)}}/>
            <span>Name</span>
          </div>
          <div className="inputbox">
            <input type="text" required id="message"  onChange={(e)=>{setMessage(e.target.value)}}/>
            <span>Message</span>
          </div>
          <div className="inputbox">
            <button type="submit" disabled={!state.contract}>Pay</button>
          </div>
        </form>
          
        </div>
      );
}
export default Buy;