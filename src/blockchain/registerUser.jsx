import {MASTER_LIST_ID,MASTER_LIST_ABI} from "../../info"

export async function createAccount(web3){
   
    //optional
    const entropy=[];
    //setup the account object to take data from created account
    let account={
        privateKey:"",
        address:"",
    }

    //create a temporary account
    const tempAccount =await web3.eth.accounts.create(entropy);
    //retrive account test
    const retrivedAccount=web3.eth.accounts.privateKeyToAccount(tempAccount.privateKey)

    //create references
    account={
        privateKey:tempAccount.privateKey,
        adresss:tempAccount.address,
    }
    

    //the accounts from ganache to transfer ether
    const accounts = await web3.eth.getAccounts();
    const transfer=await web3.eth.sendTransaction({to:retrivedAccount.address, from:accounts[1], value:web3.utils.toWei("0.1", "ether")});
    
    //add to wallet
    web3.eth.accounts.wallet.add(tempAccount);
    
    return {accountInfo:account,account:tempAccount};
}


//check if the user already exits else promts to use some other name
export async function checkIfUserAlreadyExists(userName,web3){

    //address and abi
    const ADDRESS=MASTER_LIST_ID;
    const ABI=MASTER_LIST_ABI;

    //creates the contract
    const contract = new web3.eth.Contract(ABI, ADDRESS);


    //checks if the username exists in the deployed in  contract
    const exists=await contract.methods.usernameExists(userName).call();


    //returs true if exits else return false
    return exists;
}

