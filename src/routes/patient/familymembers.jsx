import React,{useState} from "react";
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';



const label = {
    width: "70%",
    fontSize: "1.1em",
    borderRadius:"2em",
    border: " 3px solid #10B3A0",
    opacity: 1,
    color: "black",
    background: "#10B3A0",
  };

const tableStyle = {
    border: "1px solid black",
    borderCollapse: "separate",
    width:"100%"
};

const submitButtonStyle = {
    width:"30%",
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

const FamilyMembers=({children})=>{

const [name,setName]=useState("");
const [memberdata,setMemberdata]=useState([]);

function submit(e,name){
    setMemberdata((memberdata)=>[...memberdata,name])
}


    return(
        <div className="column-center">
            <div className="row-center" style={{display:"flex",gap:"1em",margin:"1em"}}>
            <Label
            placeholderStyle="label"
            type="text"
            placeholder="Enter Username of member"
            style={label}
            onChange={(event)=>{
              setName(event.target.value);
            }}
          />
           <Button  style={submitButtonStyle} onClick={(e)=>{submit(e,name);}}>Add to access list</Button>
            </div>
            <div style={{margin:"1em"}}>
                <table style={tableStyle}>
                    <tr style={tableStyle}>
                        <th style={tableRowStyle} >Username</th>
                        <th style={tableRowStyle}>Actions</th>
                    </tr>
                    {
                    memberdata?.map((name,key)=>{
                    return(<tr style={tableContentStyle}>
                        <td >{name}</td>
                        <td style={{
                                    padding:"0em 1em",
                                    borderCollapse: "separate",
                                    borderRadius: "1em",
                                    color:"10B3A0",
                                    justifyContent:"center",
                                    display:"flex"
                                }}><Button>Remove</Button></td>
                    </tr>);})}
                </table>
            </div>
        </div>
    )
}

export default FamilyMembers;