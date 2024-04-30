import React,{useState,useEffect} from "react"
import {Create,Register,Login} from "../routes/routes"
import {createAccount} from "../blockchain/registerUser"


export const TempAccount=({web3,registrationType})=>{
    const [registerType,setRegisterType]=useState();
    const [tempAccount,setTempAccount]=useState();

    async function initialize(){
        console.log("temp account",{web3,registrationType});
        if(web3!=null){
        const _tempAccount=await createAccount(web3);
        setTempAccount(_tempAccount);
        }
        
    }

    useEffect(()=>{
        initialize();
    },[]);

    return (
        <div>
           <Create web3={web3} tempAccount={tempAccount}/>; 
        {
            
        }   
        </div> 
     );
}