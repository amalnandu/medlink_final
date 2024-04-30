import React,{useState} from "react";
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';

const label = {
  width: "70%",
  padding: "0.6em",
  fontSize: "1.1em",
  borderRadius: "0.4em",
  border: " 0.1em solid #10B3A0",
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

const textColor = {
  color:"#10B3A0",
  padding:"1rem",
  display:"flex",
  justifyContent:"center"
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

const AddDept=({children})=>{

  const [dept,setDept]= useState("");

  return (
      <div className="column-center" style={{gap:"3em",margin:"5em 2em", padding:"5em 13em"}}>
        <Card className="column-center" style={cardstyle}>
        <div style={textColor}><h4 >Add Department</h4></div>
        <div className='row-center'>
          <label htmlFor="username" style={{color:"#10B3A0", padding:"20px 30px"}}>Doctor UserName</label>
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
            <Button style={submitButtonStyle}>Add</Button>
          </div>
        </Card>
         
      </div>
  )
}

export default AddDept;
