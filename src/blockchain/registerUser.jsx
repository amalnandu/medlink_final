import {MASTER_LIST_ID,MASTER_LIST_ABI} from "../../info"
import CryptoJS from "crypto-js"

export async function createAccount(web3){
    console.log({web3})
    //optional
    const entropy=[];
    //setup the account object to take data from created account
    let account={
        privateKey:"",
        address:"",
    }

    //create a temporary account
    const tempAccount =await web3.eth.accounts.create(entropy);
    const retrivedAccount=web3.eth.accounts.privateKeyToAccount(tempAccount.privateKey)

    //create references
    account={
        privateKey:tempAccount.privateKey,
        adresss:tempAccount.address,
    }
    console.log({retrivedAccount,account})
    const accounts = await web3.eth.getAccounts();
    const transfer=await web3.eth.sendTransaction({to:retrivedAccount.address, from:accounts[3], value:web3.utils.toWei("10.0", "ether")});
    
    //console.log({transfer});
    return {accountInfo:account,account:tempAccount};
}


//check if the user already exits else promts to use some other name
export async function checkIfUserAlreadyExists(userName,web3,accountInfo){

    const ADDRESS=MASTER_LIST_ID;
    const ABI=MASTER_LIST_ABI;

    const validAcount = new web3.eth.Contract(ABI, ADDRESS);
    console.log("before transaction",{ADDRESS,ABI,validAcount,accountInfo},validAcount.methods)

    const balance=await web3.eth.getBalance(accountInfo.address)
    console.log({accountInfo},accountInfo.address,balance);
    
    const exists=await validAcount.methods.usernameExists(userName).call();

    // //.send({from:accountInfo.address }).once('receipt', (receipt) => {
    //     console.log(receipt)
    //   });
    // ;

    return exists;
}

export async function encryptUsingPassword(key,password){
    const encrypted=CryptoJS.AES.encrypt(key,password).toString();
    return encrypted;
}

export async function decryptUsingPassword(encryptedKey,password){
    const decrypted=CryptoJS.AES.decrypt(encryptedKey,password).toString(CryptoJS.enc.Utf8);
    return decrypted;
}