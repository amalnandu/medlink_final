import { encryptUsingPassword } from "../encryption_and_cpabe/encryption";
import {REGISTRATION_ABI} from "../abi/registration"
import { REGISTRATION_ID } from "../abi/id";
import { getData } from "../storage/session";

// Function to set user data
export async function setRegistrationData(
    _username,
    _name,
    _dob,
    _place,
    _sex,
    _aadharNumber,
    _role,
    accountAddress
)  {

    const password=getData('password')

    //encrypt data
    const name=encryptUsingPassword(_name,password)
    const dob=encryptUsingPassword(_dob,password)
    const place=encryptUsingPassword(_place,password)
    const sex=encryptUsingPassword(_sex,password)
    const aadharNumber=encryptUsingPassword(_aadharNumber,password)
    
    //create contract from address and abi
    const contract = new web3.eth.Contract(REGISTRATION_ABI, REGISTRATION_ID);

    //estimate the gas for transaction
    const gasEstimate = await contract.methods.setRegistrationData(
        _username,
        name,
        dob,
        place,
        sex,
        aadharNumber,
        _role,
        accountAddress
    ).estimateGas({ from: getData('account-address') });

    //transact the data to blockchain
    const transactionReceipt=await contract.methods.setRegistrationData(
        _username,
        name,
        dob,
        place,
        sex,
        aadharNumber,
        _role,
        accountAddress
    ).send({ from: getData('account-address'),gas: gasEstimate })
    console.log({transactionReceipt})
}

// Function to get user data
export function getRegistrationData(_username){

}

// Function to verify user
export function verify(_username,_name)  {

}
// Function to reject user
export function reject(_username)  {

}