import React , {useState}from 'react'
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

const label = {
  width: "auto%",
  padding: "0.6em",
  fontSize: "1.1em",
  borderRadius: "2em",
  border: " 0.1em solid #dc3845",
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

const submitButtonStyle={
  backgroundColor:"rgba(10,10,10,1)",
  color:"#10B3A0",
  fontFamily: "'PT Sans', sans-serif",
  fontWeight: '400',
  fontStyle: 'normal',
  padding:"1em",
  width:"30%",
 
};

function Blacklist() {

    const [blacklist_input, setBlacklist_input] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // private key backend logic
      console.log(blacklist_input);
    };
  
    const handleChange = (e) => {
        setBlacklist_input(e.target.value);
    };
  
  
     function blacklistLogic(){
 // add the logic here

     }
     
     

  return (
    <div className='admin-container'>
      <Card style={cardstyle}>
        <h1 style={textColor}>Blacklist Account</h1>
        <div className="column-center" style={{gap:"3em"}}>
          <label htmlFor="username" style={{color:"#10B3A0", fontSize:"35px"}}>Enter username</label>
         <Label
          placeholderStyle="label"
          type="text"
          placeholder="Enter UserName"
          style={label}
          onChange={(event)=>{
            setDept(event.target.value)
          }}
        />
          <div style={{display:"flex",justifyContent:"center"}}>
            <Button style={submitButtonStyle}>Add</Button>
          </div>\
          </div>
        </Card>
        
    </div>
  )
}

export default Blacklist