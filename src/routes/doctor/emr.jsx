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

const tableStyle = {
    border: "1px solid #10B3A0",
    borderCollapse: "separate",
    width:"100%",
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
    width:"10%",
    border: "1px solid #10B3A0",
    borderRadius: "1em",
    margin:"10% 20%",
    opacity:"1",
    color: "#10B3A0"
}

const tableContentStyle={
    padding:"1em 2em",
    border: "1px solid #10B3A0",
    borderRadius: "1em",
    margin:"10% 20%",
    color:"black",
    backgroundColor:"#10B3A0"
}


const EmrDoctor=({chidren})=>{

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
        <div className="column-center" style={{margin:"5em",gap:"2em"}}>
            <div style={{width:"100%",border: "2px #10B3A0",gap:"3em"}}>
            <table >
            <tr>
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
            <Link to="/emr/share">
            <div style={{display:"flex",justifyContent:"center"}}>
                <Button style={submitButtonStyle} onClick={share}>Share Emr</Button>
            </div>
            </Link>
            
        </div>
    )
}

export default EmrDoctor;