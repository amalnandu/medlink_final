import React,{useState} from "react";
import "../styles/routes.css"
import {Profile} from "../images/images"
import {Card,TextButton} from "../components/components"

const profileImage={
    width:"auto",
    height:"10vh",

}

const SideBar=({account})=>{
    const [_account,setAccount]=useState('');

    const navlinks=['About','Setting']
    return (
        <div className="column-center" style={{
            // justifyContent:"start",
            alignItems:"center",
            width:"20%",
            gap:"1em"
        }}>
            <img src={Profile} alt="" style={profileImage}/>
            {
                navlinks.map((link)=>{
                    return <TextButton>{link}</TextButton>
                })
            }
            
        </div>
    );
}



const Details=({children ,className,style})=>{
    return (
        <div className="column-center " style={{width:"80%"}}>
            <Card className={className} style={style}>{children}</Card>
        </div>
    );
}

export const Account=()=>{

    return (
    <div className="row-center" style={
        {
            width:"100%",
            padding:"10vh 0vh",
            height:"65vh"
        }}>
        <SideBar/>
        <Details className="row-center" style={{
            width:"80%",
            height:"100%",
            justifyContent:"center"
        }}>
            <p>Deatils</p>
            <h1>Hi</h1>
        </Details>
    </div>
    );
}