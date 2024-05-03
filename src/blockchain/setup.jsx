import Web3 from "web3";
import { useState } from "react";




export async function loadBlockchain(){

  //get reference of web3 from ganache
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545", null, {
    vmErrorsOptions: {
      onVmError: (error) => {
        console.error("VM Error:", error.message);
        console.error("Revert Reason:", error.reason);
      },
    },
  });
  
  return web3;
}


export async function fetchAccount(username,password,web3){

  
  // ############### Replace with fetc logic ########## just testing ######
  const accounts=await web3.eth.getAccounts();

  const type="";
  const address=accounts[0].address;

  const account={
    type:type,
    address:address
  }

  return account;
}

