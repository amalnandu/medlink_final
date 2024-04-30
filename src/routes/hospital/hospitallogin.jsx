import React, { useState } from 'react';
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";

const inputStyle = {
  fontFamily: `"Littera Plain", sans-serif`,
  width: "100%",
  padding: "0.6em",
  fontSize: "1.1em",
  borderRadius: "2em",
  border: " 0.1em solid #dc3845",
  opacity: 1,
  color: "white",
  background: "rgba(10, 10, 10, 0.43)",
};

const textColor = {
  color:"#10B3A0",
  padding:"1rem",
  display:"flex",
  justifyContent:"center"
}

const label = {
  width: "90%",
  fontSize: "1.1em",
  borderRadius:"2em",
  border: " 3px solid #10B3A0",
  opacity: 1,
  color: "black",
  background: "#10B3A0",
};



const submitButtonStyle = {
  width:"30%",
  backgroundColor:"rgba(10, 10 , 10, 0.43)",
  color:"#10B3A0",
  fontFamily: "'PT Sans', sans-serif",
  fontWeight: '800',
  fontStyle: 'normal',
  padding:"1em"
};

function HospitalLogin() {
  const [privateKey, setPrivateKey] = useState('');
  const [name,setName]=useState("");

  function Login(){

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // private key backend logic
    console.log(privateKey);
  };

  const handleChange = (e) => {
    setPrivateKey(e.target.value);
  };

  return (
    <div style={{gap:"2em", margin:"7.5% 20%"}}>

    <Card className='column-center'  style={{gap:"2em"}}>
    <div><h3 style={textColor}>Login</h3></div>
    
    <div className='row-center'>
          <label htmlFor="username" style={{color:"#10B3A0", padding:"20px 30px"}}> UserName</label>
        <Label
          placeholderStyle="label"
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setName(event.target.value)
          }}
        /></div>
      <div className='row-center'>
          <label htmlFor="username" style={{color:"#10B3A0", padding:"20px 30px"}}> Password</label>
        <Label
          placeholderStyle="label"
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setPrivateKey(event.target.value)
          }}
        /></div>
    
    
          <div style={{display:"flex",justifyContent:"center"}}>
            <Button style={submitButtonStyle} onClick={Login}>Login</Button>
          </div>
    </Card>
     
    </div>
  );
}

export default HospitalLogin;
