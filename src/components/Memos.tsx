import { useState,useEffect } from "react";
// import {  MemosType, StateType } from "../type.t";
import { MemosType, StateType, memosMessage } from "ethers-simple-test";

interface MemosProps{
  state: StateType
}



const Memos=({state}:MemosProps)=>{
    const [memos,setMemos]=useState<MemosType[]>([]);
    const {contract}=state;
    useEffect(()=>{
      
        const memosMessageFun = async()=>{
          const _memos = await memosMessage({state})
          setMemos(_memos)
          // console.log(await contract.getMemos())
          // const memos = await contract.getMemos();
          // setMemos(memos)
          //console.log(memos)
        }
        contract && memosMessageFun()
    },[contract])
    return (
        <div className="container-fluid">
          <h3 style={{ textAlign: "center", marginTop: "20px" }}>Messages</h3>           
                <table>
                <tbody >
          {memos.map((memo,index) => {
            return (
                    <tr key={index}>
                      <td 
                        style={{
                          backgroundColor: "dodgerblue",
                          border: "1px solid white",
                          borderCollapse: "collapse",
                          padding: "7px",
                          width: "100px",
                          color:"white",
                         
                        }}
                      >
                        {memo.name}
                      </td>
                      <td 
                        style={{
                          backgroundColor: "dodgerblue",
                          border: "1px solid white",
                          borderCollapse: "collapse",
                          padding: "7px",
                          width: "800px",
                          color:"white"
                        }}
                      >
                        {new Date(memo.timestamp * 1000).toLocaleString()}
                      </td>
                      <td  
                        style={{
                          backgroundColor: "dodgerblue",
                          border: "1px solid white",
                          borderCollapse: "collapse",
                          padding: "7px",
                          width: "300px",
                          color:"white"
                        }}
                      >
                        {memo.message}
                      </td>
                      <td  className="container-fluid"
                        style={{
                          backgroundColor: "dodgerblue",
                          border: "1px solid white",
                          borderCollapse: "collapse",
                          padding: "7px",
                          width: "400px",
                          color:"white"
                        }}
                      >
                        {memo.from}
                      </td>
                    </tr>
             
            );
          })}
               </tbody>
                </table>
        </div>
      );
}
export default Memos;