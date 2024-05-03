import React,{useState} from "react";
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';
import { Dropdown } from "../../components/dropdown";
import { Link } from "react-router-dom";


const submitButtonStyle = {
    width:"20%",
    backgroundColor:"rgba(1, 1 , 1, 0.43)",
    color:"#10B3A0",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    padding:"1em"
};

const label = {
    fontSize: "1.1em",
    borderRadius:"2em",
    opacity: 1,
    color: "black",
    background: "#10B3A0",border:"dotted 2px #10B3A0",padding:"1em 0.2em"
  };

const tableStyle = {
    border: "2px dotted black",
    borderCollapse: "separate",
    padding:"1em",
}

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


const FamilyEmrView=({chidren})=>{

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
        <div className="column-center" style={{margin:"2em",gap:"3em"}}>
            <div className="row-center" style={{gap:"1em",justifyContent:"space-between"}}>
            <label style={label} htmlFor="date">Date: {date}</label>
            <label style={label} htmlFor="token">Token: {token}</label>
            </div>
            <div className="row-center" style={{gap:"1em",justifyContent:"space-between"}}>
                
                <label style={label} htmlFor="hopsital">Hospital: {hopsital}</label>
                <label style={label} htmlFor="dept">Department: {dept}</label>
                <label style={label} htmlFor="doctor">Doctor: {doctor}</label>
                
            </div>
            <div>
            <table style={{width:"100%",border: "2px #10B3A0",borderCollapse: "separate"}}>
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
                   <td style={{
                                    padding:"1em 2em",
                                    borderCollapse: "separate",
                                    borderRadius: "1em",
                                    color:"10B3A0",
                                    justifyContent:"center",
                                    display:"flex"
                                }}>
                     <Button style={viewButtonStyle} onClick={scanOrImages}>View</Button></td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default FamilyEmrView;