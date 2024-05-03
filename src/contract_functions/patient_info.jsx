import {PATIENT_INFO_ABI}  from "../abi/patinet_info" 
import { PATIENT_INFO_ID } from "../abi/id";
import { getData } from "../storage/session";

// Function to set user data
export async function setUserData(
    web3,
    _username,
    _encryptedPrivateKey,
    _encryptedCPABESecretKey,
    _attributes
)  
{
    console.log('patient data', _username, _encryptedPrivateKey, _encryptedCPABESecretKey, _attributes);

    const contract = new web3.eth.Contract(PATIENT_INFO_ABI, PATIENT_INFO_ID);
    console.log({ contract }, contract.methods);

    //const balance = await web3.eth.getBalance(getData('account-address'));
    //console.log(balance, getData('account-address'));

    const gasEstimate = await contract.methods.setUserData(
        _username,
        _encryptedPrivateKey,
        _encryptedCPABESecretKey,
        _attributes
    ).estimateGas({ from: getData('account-address') });

    console.log('Gas estimate:', gasEstimate);

    const transactionReceipt=await contract.methods.setUserData(
        _username,
        _encryptedPrivateKey,
        _encryptedCPABESecretKey,
        _attributes
    ).send({ from: getData('account-address'),gas: gasEstimate })

    console.log("Transaction receipt:", transactionReceipt,getData('account-address'));
}




// Function to get user data
export function getUserData( _username){
    
}

// Function to update user status
export function updateUserStatus( _username, _status)  {
    
}

// Function to reset notifications array and set notification flag to false
export function resetNotifications( _username)  {
    
}

// Function to add a notification string to the notifications array and set notification flag to true
export function addNotification( _username,  _notification)  {
    
}

// Function to clear private, cp-abe keys
export function blacklist( _username)  {
    
}
// Function to insert CP-ABE secret key
export function insertCPABEKey( _username, _encryptedCPABESecretKey )  {
    
}
// Function to add an attribute to the attribute array and clear CP-ABE secret key
export function addAttribute( _username,  _attribute)  {

}

// Function to remove an attribute from the attribute array and clear CP-ABE secret key
export function removeAttribute( _username,  _attribute)  {
    
}

// Function to return the list of attributes
export function getAttributes( _username)  {
    
}

// Function to add a family member
export function addFamilyMember(_username, _familyMember)  {
    
}

// Function to remove a family member
export function removeFamilyMember( _username,  _familyMember)  {
    
}

//function to delete a user
export function deleteUser(_username)  {

}

// Function to insert CID into tempFiles array
export function insertCID(_username, _cid)  {
    
}

// Function to remove old CID from tempFiles array
export function removeCID(_username,  _oldCID, _newCID)  {

}