import {ADMIN_INFO_ABI} from "../abi/admin_info"
import {ADMIN_ID} from "../abi/id"
import {encryptUsingPassword} from "../encryption_and_cpabe/encryption"

// Function to set encrypted private key
export async function setEncryptedPrivateKey(web3,password)  {



    //take an account from the ganache to provide private key
    const accounts=await web3.eth.getAccounts();
    const admin_account=accounts[5];
    console.log({admin_account})
    const private_key=admin_account.privateKey;

    //create contract from address and abi
    const contract = new web3.eth.Contract(ADMIN_INFO_ABI, ADMIN_ID);

    //estimate the gas for transaction
    const gasEstimate = await contract
    .methods
    .setEncryptedPrivateKey(encryptUsingPassword(private_key,password))//replace with whichever function
    .estimateGas({ from: admin_account });

    //transact the data to blockchain
    const transactionReceipt=await contract.methods
    .setEncryptedPrivateKey(encryptUsingPassword(private_key,password))//replace with whichever function
    .send({ from: admin_account,gas: gasEstimate })


    console.log('admin-gas',{transactionReceipt})
    
}

// Function to get encrypted private key
export function getEncryptedPrivateKey(){
   
}