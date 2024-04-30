import React from "react";
import {Button} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";



const submitButtonStyle={
    width:"150%",
    backgroundColor:"rgba(10, 10, 10, 0.43)",
    color:"#10B3A0",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    padding:"1em"
};


export const DashboardHospital=({children})=>{
    return(
        <div className="column-center" style={{margin:"12em 3em", gap:"3em"}}>
            <div className="row-center" style={{display:"flex",justifyContent:"space-evenly"}}>
               <Link to="/adddoctor">
                    <Button style={submitButtonStyle}>Add Doctors</Button>
               </Link>
               <Link to="/adddepartment">
                    <Button style={submitButtonStyle}>Add Department</Button>
               </Link>
               <Link to="/patientlog">
                    <Button style={submitButtonStyle}>Patient Log</Button>
               </Link>
            </div>
            <div className="row-center" style={{display:"flex",justifyContent:"space-evenly"}}>
               <Link to="/appointments">
                    <Button style={submitButtonStyle}>View Appointment</Button>
               </Link>
               <Link to="/appointments/slot">
                    <Button style={submitButtonStyle}>Manage Appointments Slot</Button>
               </Link>
            </div>
        </div>
    )
}