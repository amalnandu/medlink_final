import React from 'react'
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";

const textColor = {
  color:"#10B3A0",
  padding:"1rem",
  display:"flex",
  justifyContent:"center"
}

const cardstyle={
  gap:"3em",
  border: "1px solid #10B3A0",
  borderRadius:"2em",
  margin:"10% 15%"
}

const label = {
  width: "70%",
  padding: "0.6em",
  fontSize: "1.1em",
  borderRadius: "0.4em",
  border: " 0.1em solid #dc3845",
  opacity: 1,
  color: "black",
  background: "#10B3A0",
};

const submitButtonStyle={
  backgroundColor:"rgba(10,10,10,1)",
  color:"#10B3A0",
  fontFamily: "'PT Sans', sans-serif",
  fontWeight: '400',
  fontStyle: 'normal',
  padding:"1em",
  width:"50%",
};

function Addhospitals() {

return (
  <div className='column-center' style={{margin:"1% 10%" }}>
      <Card className='column-center' style={cardstyle}>
        <div><h4 style={textColor}>Add Hospital</h4></div>
    <div className='row-center' style={{gap:"3.5em"}}>
          <label htmlFor="username" style={{color:"#10B3A0", padding:"20px 30px",}}> UserName</label>
        <Label
          placeholderStyle="label"
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setName(event.target.value)
          }}
        /></div>
      <div className='row-center' style={{gap:"4em"}}>
          <label htmlFor="username" style={{color:"#10B3A0", padding:"20px 30px"}}>Password</label>
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
          <label htmlFor="username" style={{color:"#10B3A0", padding:"20px 30px"}}>Retype Password</label>
        <Label
          placeholderStyle="label"
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setName(event.target.value)
          }}
        /></div>
       
          <div style={{display:"flex",gap:"1em",justifyContent:"center"}}>
          <Button style={submitButtonStyle}>Create account</Button>
        </div>
      
    </Card>
    
  </div>
)
}

export default Addhospitals