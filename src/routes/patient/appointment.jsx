import React,{useState} from "react";
import {Card,Button,Alert,Label} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';
import { Dropdown } from "../../components/dropdown";



const label = {
    width: "70%",
    fontSize: "1.1em",
    borderRadius:"2em",
    border: " 3px solid #10B3A0",
    opacity: 1,
    color: "white",
    background: "#10B3A0",
  };

const dropdownStyle={
    width:"100%",
}

const submitButtonStyle={
    backgroundColor:"rgba(1,1,1,0.5)",
    color:"#10B3A0",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    padding:"1em"
};

const Appointment=({children})=>{

    const [place,setPlace]=useState("");
    const [hospital,sethospital]=useState("");
    const [dept,setDept]=useState("");
    const [doctor,setDoctor]=useState("");

    return(
        <div style={{margin:"1em 0em",justifyContent:"space-between"}} className="Column-center">
            <div className="row-center" style={{gap:"1em",justifyContent:"center",width:"100%"}}>
            <div className="column-center" style={{gap:"1em",}}> 
            <div className="row-center"style={{gap:"1em"}}>
            <Label
            placeholderStyle="label"
            type="text"
            placeholder="Select Place"
            style={label}
            onChange={(event)=>{
                setPlace(event.target.value);
            }}/>
            <Label
            placeholderStyle="label"
            type="text"
            placeholder="Select Hospital"
            style={label}
            onChange={(event)=>{
                sethospital(event.target.value);
            }}
          />                        </div>
                        <div className="row-center"style={{gap:"1em"}}>
            <Label
            placeholderStyle="label"
            type="text"
            placeholder="Select Department"
            style={label}
            onChange={(event)=>{
              setDept(event.target.value);
            }}/>
            <Label
            placeholderStyle="label"
            type="text"
            placeholder="Select Doctor"
            style={label}
            onChange={(event)=>{
                setDoctor(event.target.value);
            }}
          />                        </div>
                </div>
                <Button style={submitButtonStyle}>Search Availability</Button>
            </div>
            <div>
            <div style={{display:"flex",justifyContent:"center",border:"dotted",margin:"10% 30%",padding:"1em 5em",backgroundColor:"#10B3A0"}}>
                <label htmlFor="bookAppintment">Available Token : 00</label>
            </div>
            </div>
            
            <div style={{display:"flex",justifyContent:"center",marginTop:"auto"}}>
                <Button style={submitButtonStyle}>Book Appintment</Button>
            </div>
        </div>
    )
}


export default Appointment;