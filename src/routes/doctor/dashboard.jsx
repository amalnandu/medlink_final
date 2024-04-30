import React from 'react'
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";


const submitButtonStyle = {
    width:"250%",
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
    margin:"7% 20%",
    // display:"flex",
    justifyContent:"space-evenly"
  }

  const cardstyle={
    gap:"3em",
    border: "1px solid #10B3A0",
    borderRadius:"2em",
    margin:"10% 15%"
  }

function DashboardDoctor() {

    return (
        <div className="column-center" style={{margin:"12em 3em", gap:"3em"}}>
            <Card style={textColor}>
                <div className="row-center" style={{display:"flex",justifyContent:"space-evenly"}}>
               <Link to="/doctor/patientlogs">
                    <Button style={submitButtonStyle}>Patient Logs</Button>
               </Link>
               <Link to="/doctor/appointment">
                    <Button style={submitButtonStyle}>Appointment</Button>
               </Link>
            </div>
            </Card>
        </div>
    )
}

export default DashboardDoctor