import react from "react"
import Navbar from "../components/navbar";
import Intro from "../routes/intro";


export const User=({account})=>{
    console.log("logged in as user")
    const options=[
        {type:"link",link:"/history"  ,name:"Medical History"},
        {type:"link",link:"/appointment",name:"Appointment"},
        {type:"link",link:"/counter"  ,name:"Counter"}
    ];
    return (
        <div>
            <Navbar options={options}/>
            
        </div>
    );

}