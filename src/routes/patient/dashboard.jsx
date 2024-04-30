import React from "react";
import { Button } from "../../components/components";
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


export const DashboardPatient=({children})=>{
    return(
        <div className="column-center" style={{margin:"12em 3em", gap:"3em"}}>
            <div className="row-center" style={{display:"flex",justifyContent:"space-evenly",gap:"2em"}}>
               <Link to="/familymembers">
                    <Button style={submitButtonStyle}>Add Family and Friends</Button>
               </Link>
               <Link to="/appointment">
                    <Button style={submitButtonStyle}>Take Appointment</Button>
               </Link>
               <Link to="/appointment/view">
                    <Button style={submitButtonStyle}>View Appointment</Button>
               </Link>
            </div>
            <div className="row-center" style={{display:"flex",justifyContent:"space-evenly"}}>
               <Link to="/emr">
                    <Button style={submitButtonStyle}>View Medical Records</Button>
               </Link>
               <div style={{width:"20%"}}>
                    <Link to="/familymembers/emr">
                            <Button style={submitButtonStyle}>View Medical Records of Family and Friends</Button>
                    </Link>             
               </div>
            </div>
        </div>
    )
}