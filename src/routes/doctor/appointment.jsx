import React, { useState } from 'react';
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link, json } from "react-router-dom";


const submitButtonStyle = {
    width:"30%",
    backgroundColor:"rgba(10, 10 , 10, 0.43)",
    color:"white",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '800',
    fontStyle: 'normal',
    padding:"1em"
  };


const textColor = {
  color:"#10B3A0",
  padding:"1rem",
  display:"flex",
  justifyContent:"center"
}

  const label = {
    width: "70%",
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


function ApppointmentDoctor({ goBack }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnter = () => {
    // logic for value entrd
    console.log('Entered value:', inputValue);
    // to rst inp fld
    setInputValue('');
  };

  return (
      <div className="column-center" style={{margin:"2em 5em 2em 10em",gap:"2em"}}>
        <Card className='column-center'  style={cardstyle}>
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
        <Link to="/doctor/appointment/details">
        <div style={{display:"flex",justifyContent:"center"}} >
              <Button style={submitButtonStyle} onClick={handleEnter}>Next</Button>

          </div>
        </Link>
        </Card>
          
      </div>
  );
}

export default ApppointmentDoctor;
