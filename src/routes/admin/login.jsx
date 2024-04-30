import React, { useState } from 'react';
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link, json } from "react-router-dom";

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

const label = {
  width: "100%",
  fontSize: "1.1em",
  borderRadius:"2em",
  border: " 3px solid #10B3A0",
  opacity: 1,
  color: "black",
  background: "#10B3A0",
};

const cardstyle={
  gap:"3em",
  border: "1px solid #10B3A0",
  borderRadius:"2em",
  margin:"10% 15%"
}

const submitButtonStyle = {
  width:"30%",
  backgroundColor:"rgba(10, 10 , 10, 0.43)",
  color:"#10B3A0",
  fontFamily: "'PT Sans', sans-serif",
  fontWeight: '800',
  fontStyle: 'normal',
  padding:"1em"
};

const textColor = {
  color:"#10B3A0",
  display:"flex",
  justifyContent:"center"
}

function Admin() {
  const [privateKey, setPrivateKey] = useState('');

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
    <div className='column-center' style={{gap:"2em", margin:"10% 20%"}}>

      <Card className='column-center' style={cardstyle}>
      <div><h3 style={textColor}>Add Hospital</h3></div>
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
          <div style={{display:"flex",justifyContent:"center"}}>
            <Button style={submitButtonStyle} onClick={Login}>Login</Button>
          </div>
      </Card>
      
    </div>
  );
}

export default Admin;
