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


const submitButtonStyle={
  backgroundColor:"rgba(10,10,10,1)",
  color:"#10B3A0",
  fontFamily: "'PT Sans', sans-serif",
  fontWeight: '400',
  fontStyle: 'normal',
  padding:"1em",
  width:"50%",
};

function VerifyDetails() {

return (
  <div style={{margin:" 5% ",justifyContent:"center"}}>
    <Card className='column-center' style={cardstyle}> 
      <label htmlFor="name" style={textColor}>Name</label>
      <label htmlFor="name" style={textColor}>DOB</label>
      <label htmlFor="name" style={textColor}>Place</label>
      <label htmlFor="name" style={textColor}>Sex</label>
      <label htmlFor="name" style={textColor}>Aadhar number</label>
      <div style={{display:"flex",gap:"1em",justifyContent:"center"}}>
        <Button style={submitButtonStyle}>Verify</Button>
        <Button style={submitButtonStyle}>Reject</Button>
      </div>
    </Card>
    
  </div>
  )
}

export default VerifyDetails