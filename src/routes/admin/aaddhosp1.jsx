import React from 'react'
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";

const textColor = {
  color:"#10B3A0",
  display:"flex",
  justifyContent:"center",
  gap:"2em"
}

const cardstyle={
  gap:"1em",
  border: "1px solid #10B3A0",
  borderRadius:"2em",
  margin:"10% 15%"
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

const submitButtonStyle={
  backgroundColor:"rgba(10,10,10,1)",
  color:"#10B3A0",
  fontFamily: "'PT Sans', sans-serif",
  fontWeight: '400',
  fontStyle: 'normal',
  padding:"1em",
  width:"50%",
};

function Addhospital() {

return (
  <div className='column-center' style={{margin:"1% 1%"}}>
      <Card className='column-center' style={cardstyle}>
        <div><h4 style={textColor}>Add Hospital</h4></div>
    <div className='row-center'>
          <label htmlFor="username" style={{color:"#10B3A0", padding:"20px 30px"}}>Name</label>
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
          <label htmlFor="username" style={{color:"#10B3A0", padding:"20px 30px"}}>Place</label>
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
          <label htmlFor="username" style={{color:"#10B3A0", padding:"20px 30px"}}>Licence no</label>
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
          <label htmlFor="username" style={{color:"#10B3A0", padding:"20px 30px"}}>Ownership</label>
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
          <label htmlFor="username" style={{color:"#10B3A0", padding:"20px 30px"}}>Contact info</label>
        <Label
          placeholderStyle="label"
          type="text"
          placeholder=""
          style={label}
          onChange={(event)=>{
            setName(event.target.value)
          }}
        /></div>
        <Link to="/addhopsitalusername">
          <div style={{display:"flex",gap:"1em",justifyContent:"center"}}>
          <Button style={submitButtonStyle}>Verify</Button>
        </div>
        </Link>
      
    </Card>
    
  </div>
)
}

export default Addhospital