import CryptoJS from "crypto-js"


//encrypts the given key with the password
export  function encryptUsingPassword(key,password){
    const encrypted=CryptoJS.AES.encrypt(key,password).toString();
    return encrypted;
}


//decrypts the given key with password
export  function decryptUsingPassword(encryptedKey,password){
    const decrypted=CryptoJS.AES.decrypt(encryptedKey,password).toString(CryptoJS.enc.Utf8);
    return decrypted;
}