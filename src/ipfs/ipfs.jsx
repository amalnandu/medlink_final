import React from "react";
import axios from "axios";
import FormData from "form-data";
import fs from "node:fs";


//for sending sendFile(e.target.file[0])
export async function sendFile(file) {
    
    const ipfs=await pinFileToIPFS(file);
    const hash=ipfs.IpfsHash;
   
    return hash;
}



//modify 
export function retriveFile(hash){

  const link='https://emerald-large-fox-579.mypinata.cloud/ipfs/'+hash;
}




export function getPath(e){
    var file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
      console.log("path",reader.result)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    }
}


const JWT = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI5NjkwZDQ2YS05NjYwLTQyMDQtOGZlYy1hZDk1MmQ1MTRlYjAiLCJlbWFpbCI6InJpcm9qb24xMzZAaWxpa2VuLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiOTkwOWJhNzU2Y2Q3Yjg1OTI5YyIsInNjb3BlZEtleVNlY3JldCI6ImZiYzRjZWNiYTEzNDQ4YjMzOWI2NTMwOTE1ZGYzYzQ2YWExZWExNjI5Y2U5NWJiYjkyOTM1YWRhYjgwMjUxNzIiLCJpYXQiOjE3MTM3NzA0MDR9.YJ1wMBflpOlg1AHORjzdWEMKWAnCwii7yQeDaswKiZg`

const pinFileToIPFS = async (file) => {
    const formData = new FormData();
    //const src = "path/to/file.png";
    
    //const file = fs.createReadStream(src)
    formData.append('file', file)
    
    const pinataMetadata = JSON.stringify({
      name: 'File name',
    });
    formData.append('pinataMetadata', pinataMetadata);
    
    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', pinataOptions);

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          'Authorization': `Bearer ${JWT}`
        }
      });
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
}
