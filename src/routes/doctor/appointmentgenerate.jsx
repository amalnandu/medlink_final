import React,{useState} from "react";
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';
import { Dropdown } from "../../components/dropdown";
import { Link } from "react-router-dom";


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


const AppointmentGenerate=({chidren})=>{

const sex="X";
const age="xx"
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
        <div className="column-center" style={{margin:"5em",gap:"3em"}}>
            
            <div>
            <table style={{width:"100%",borderCollapse: "separated"}}>
            <tr >
                    <td style={tableRowStyle}>Sex</td>
                    <td style={tableContentStyle}>{sex}</td>
                </tr>
                <tr >
                    <td style={tableRowStyle}>Age</td>
                    <td style={tableContentStyle}>{age}</td>
                </tr>
                <tr>
                    <td style={tableRowStyle}>Diagnosed Disease</td>
                    <td style={tableContentStyle}>{disease}</td>
                </tr>
                <tr >
                    <td style={tableRowStyle}>Diagnosed Synposis</td>
                    <td style={tableContentStyle}>{synposis}</td>
                </tr>
                <tr >
                    <td style={tableRowStyle}>Medical Prescription</td>
                    <td style={tableContentStyle}>{medicalPrescription}</td>
                </tr>
                <tr>
                    <td style={tableRowStyle}>Lab test Prescription</td>
                    <td style={tableContentStyle}>{labTestPrescription}</td>
                </tr>
                <tr>
                    <td style={tableRowStyle}>Scan/Images(if any)</td>
                   <td style={{display:"flex",justifyContent:"center"}}>
                     <Button style={viewButtonStyle} onClick={scanOrImages}>View</Button></td>
                </tr>
            </table>
            </div>
            <div>
                <div style={{gap:"0.3em", justifyContent:"space-evenly", display:"flex"}}>
                <div>
                <Button style={submitButtonStyle}>Close Appointment</Button>
                </div>
                <div>
                <Link to="">
                <Button style={submitButtonStyle}>Generate EMR</Button>
                </Link>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default AppointmentGenerate;