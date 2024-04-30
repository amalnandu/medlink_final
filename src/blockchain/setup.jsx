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

// export async function register(contract, account, details) {
//   console.log("contract register", contract, account, details);
//   const taskCount = await contract.methods
//     .register(
//       details.name,
//       details.dob,
//       details.place,
//       details.sex,
//       details.aadhaar
//     )
//     .send({ from: account })
//     .once("receipt", (receipt) => {
//       console.log(receipt);
//     });

//   console.log(taskCount);
// }
export async function register(contract, account, details) {
  try {
    console.log("contract register", contract, account, details);

    // Convert Aadhaar number to number type
    const aadhaarNumber = parseInt(details.aadhaar, 10); // Assuming Aadhaar number is represented as a string

    // Check data types of arguments
    console.log("Name data type:", typeof details.name);
    console.log("DOB data type:", typeof details.dob);
    console.log("Place data type:", typeof details.place);
    console.log("Sex data type:", typeof details.sex);
    console.log("Aadhaar data type:", typeof aadhaarNumber); // Check Aadhaar number data type

    const transactionReceipt = await contract.methods
      .register(
        details.name,
        details.dob,
        details.place,
        details.sex,
        aadhaarNumber // Pass Aadhaar number as a number type
      )
      .send({ from: account, gas: 3000000 });

    console.log("Transaction receipt:", transactionReceipt);
  } catch (error) {
    console.error("Error registering:", error);
  }
}
