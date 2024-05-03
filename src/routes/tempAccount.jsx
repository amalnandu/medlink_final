import React,{useState,useEffect} from "react"

const styles={
    upload_wrap:{
        position: "relative"
    },
    
    upload_btn:{
        position: "absolute",
        left: "0",
        opacity: "0"
    }
}

export const TempAccount=({web3})=>{

    return (
        
       <div style={styles.upload_wrap}>
            <button type="button" class="nice-button">upload_file</button>
            <input type="file" name="file" style={styles.upload_btn} onClick={(e)=>{console.log(e.target.files[0])}}/>
        </div>
     );
}