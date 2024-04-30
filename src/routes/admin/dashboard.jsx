import React from 'react'
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";


const submitButtonStyle = {
    width:"150%",
    backgroundColor:"rgba(10, 10 , 10, 0.43)",
    color:"#10B3A0",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '800',
    fontStyle: 'normal',
    padding:"1em"
  };

function DashboardAdmin() {

    return (
        <div className="column-center" style={{margin:"12em 3em", gap:"3em"}}>
            <div className="row-center" style={{display:"flex",justifyContent:"space-evenly"}}>
               <Link to="/verify">
                    <Button style={submitButtonStyle}>Verify Registration</Button>
               </Link>
               <Link to="/blacklist">
                    <Button style={submitButtonStyle}>Blacklist Account</Button>
               </Link>
               <Link to="/addhopsital">
                    <Button style={submitButtonStyle}>Add Hospital</Button>
               </Link>
            </div>
            {/* <div className="row-center" style={{display:"flex",justifyContent:"space-evenly"}}>
               <Link to="/appointments">
                    <Button style={submitButtonStyle}>Researchers Requests</Button>
               </Link>
            </div> */}
        </div>
    )
}

export default DashboardAdmin