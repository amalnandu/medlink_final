import React,{useState} from "react";
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";
import AppointmentDetails from "../patient/appointmentdetails";


const label = {
    width: "30%",
    fontSize: "1.1em",
    borderRadius:"1.5em",
    border: " 3px solid #10B3A0",
    opacity: 1,
    color: "black",
    background: "",
  };

  const tableStyle = {
    border: "1px solid #10B3A0",
    borderCollapse: "separate",
    width:"100%",
};


const submitButtonStyle = {
    width:"200%",
    backgroundColor:"rgba(1, 1 , 1, 0.43)",
    color:"#10B3A0",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    padding:"1em"
};

const viewButtonStyle = {
    width:"30%",
    margin:"0",
    backgroundColor:"rgba(1, 1 , 1, 0.43)",
    color:"#10B3A0",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    padding:"1em"
};

const tableRowStyle={
    padding:"1em 3em",
    width:"20%",
    border: "1px solid #10B3A0",
    borderCollapse: "separate",
    borderRadius: "1em",
    margin:"10% 20%",
    color: "#10B3A0"
}

const tableContentStyle={
    padding:"0em 1em",
    border: "1px solid #10B3A0",
    borderCollapse: "separate",
    borderRadius: "1em",
    margin:"10% 20%",
    color:"black",
    backgroundColor:"#10B3A0"
}

const DoctorAppointmentDetails=({children})=>{

const [date,setDate]=useState("");

var memberdata=[""];

function submit(e,date){
    
}


    return(
        <div className="column-center" style={{gap:"1em"}}>
          <div style={{gap:"0.3em", justifyContent:"space-evenly", display:"flex"}}>
            <div>
            <Button style={submitButtonStyle}>Close Appointment</Button>
            </div>
            <div>
            <Link to="/doctor/appointment/generate">
              <Button style={submitButtonStyle}>Generate EMR</Button>
            </Link>
            </div>
          </div>
          <div>
            <h4 style={{ justifyContent:"center", display:"flex"}}>Medical History</h4>
          </div>
            <div style={{margin:"1em"}}>
                <table style={tableStyle}>
                    <tr style={tableStyle}>
                        <th style={tableRowStyle} >SI no.</th>
                        <th style={tableRowStyle} >Details/Description</th>
                        <th style={tableRowStyle} >Date</th>
                        <th style={tableRowStyle} >Type(Shared/Generated)</th>
                        <th style={tableRowStyle}>Medical Record</th>
                    </tr>
                    {
                    memberdata?.map((name,key)=>{
                    return(<tr style={tableContentStyle}>
                        <td >{}</td>
                        <td >{}</td>
                        <td >{}</td>
                        <td >{}</td>
                        <Link to="/doctor/emr">
                            <td style={{
                                    padding:"0em 1em",
                                    borderCollapse: "separate",
                                    borderRadius: "1em",
                                    color:"10B3A0",
                                    justifyContent:"center",
                                    display:"flex"
                                }}>
                                <Button style={viewButtonStyle}>View</Button>
                            </td>
                        </Link>
                    </tr>);})}
                </table>
            </div>
        </div>
    )
}

export default DoctorAppointmentDetails;