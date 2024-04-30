import React, { useState } from 'react'
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";
import { BsDisplay } from 'react-icons/bs';

const textColor = {
  color:"#10B3A0",
  display:"flex",
  justifyContent:"center"
}


const label = {
  width: "90%",
  padding: "0.6em",
  fontSize: "1.1em",
  borderRadius: "0.4em",
  border: " 0.1em solid #dc3845",
  opacity: 1,
  color: "black",
  background: "#10B3A0",
};

const dropdownStyle={
  width:"40%",
}

const cardstyle={
  gap:"3em",
  border: "1px solid #10B3A0",
  borderRadius:"2em",
  margin:"10% 15%"
}


const submitButtonStyle={
  backgroundColor:"rgba(10,10,10,0.5)",
  color:"#10B3A0",
  fontFamily: "'PT Sans', sans-serif",
  fontWeight: '400',
  fontStyle: 'normal',
  padding:"1em",
  width:"30%",
};

function  Verify() {

function handleSubmit(){

}
const [privateKey,setPrivateKey]=useState("");
const [name,setName]=useState("");



  return (
    <div className='column-center' style={{margin:"10% 20%"}}>
      <Card className='column-center' style={cardstyle}>
        <div style={textColor}><h4 >Verify Registration</h4></div>
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
          <label htmlFor="username" style={{color:"#10B3A0", padding:"20px 30px"}}>Generated Password</label>
        <Label
          placeholderStyle="label"
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setName(event.target.value)
          }}
        /></div>
        <Link to="/verifydetails">
        <div style={{display:"flex",justifyContent:"center"}}>
          <Button style={submitButtonStyle}> 
              Search
          </Button>
        </div>
        </Link>
      </Card>
    </div>
  )
}

export default Verify