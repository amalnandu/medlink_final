import react from "react"
import {Navbar} from "../components/components";


export const DoctorProfile=({account})=>{
    console.log("logged in as doctor")
    
    const options=[
        {type:"link",link:"/tokens",name:"Tokens"},
        {type:"link",link:"/",name:""}
    ];

    return (
        <div>
            <Navbar options={options}/>
        </div>
        
    );

}