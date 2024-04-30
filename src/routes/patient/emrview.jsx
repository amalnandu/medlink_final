import React,{useState} from "react";
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';
import { Dropdown } from "../../components/dropdown";
import { Link } from "react-router-dom";


const submitButtonStyle = {
    width:"20%",
    border:" none",
    borderRadius:"0.5em",
    backgroundColor:"rgba(1, 1 , 1, 0.43)",
    color:"white",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    padding:"1em"
};

const tableStyle={
    border: "2px dotted black",
    borderCollapse: "collapse",
    padding:"1em"
}


const EmrView=({chidren})=>{

const disease="xxxxxxxxxxxxx";
const synposis="xxxxxxxxxxxxx";
const medicalPrescription="xxxxxxxxxxxxx";
const labTestPrescription="xxxxxxxxxxxxx";
const date="00/00/0000";
const hopsital="XXXXXX";
const dept="XXXXXX";
const doctor="XXXXXX";
const token="00";

function scanOrImages(e){
    console.log("scan or images button function");
}

function share(e){
    console.log("share button function");
}

    return (
        <div className="column-center" style={{margin:"2em",gap:"1em"}}>
            <div className="row-center" style={{gap:"1em",justifyContent:"space-evenly"}}>
                <label style={{border:"dotted 2px",padding:"1em 0.2em"}} htmlFor="date">Date: {date}</label>
                <label style={{border:"dotted 2px",padding:"1em 0.2em"}} htmlFor="hopsital">Hospital: {hopsital}</label>
                <label style={{border:"dotted 2px",padding:"1em 0.2em"}} htmlFor="dept">Department: {dept}</label>
                <label style={{border:"dotted 2px",padding:"1em 0.2em"}} htmlFor="doctor">Doctor: {doctor}</label>
                <label style={{border:"dotted 2px",padding:"1em 0.2em"}} htmlFor="token">Token: {token}</label>
            </div>
            <div>
            <table style={{width:"100%",border: "2px dotted black",borderCollapse: "collapse"}}>
                <tr>
                    <td style={tableStyle}>Diagnosed Disease</td>
                    <td style={tableStyle}>{disease}</td>
                </tr>
                <tr >
                    <td style={tableStyle}>Diagnosed Synposis</td>
                    <td style={tableStyle}>{synposis}</td>
                </tr>
                <tr >
                    <td style={tableStyle}>Medical Prescription</td>
                    <td style={tableStyle}>{medicalPrescription}</td>
                </tr>
                <tr>
                    <td style={tableStyle}>Lab test Prescription</td>
                    <td style={tableStyle}>{labTestPrescription}</td>
                </tr>
                <tr>
                    <td style={tableStyle}>Scan/Images(if any)</td>
                   <td style={tableStyle}>
                     <Button onClick={scanOrImages}>View</Button></td>
                </tr>
            </table>
            </div>
            <Link to="/emr/share">
            <div style={{display:"flex",justifyContent:"center"}}>
                <Button style={submitButtonStyle} onClick={share}>Share Emr</Button>
            </div>
            </Link>
            
        </div>
    )
}

export default EmrView;