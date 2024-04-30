import react from "react"
import Navbar from "../components/navbar";
import Intro from "../routes/intro";


export const BeforeSignIn=()=>{
    console.log("account not signed up")
    const options=[
        {type:"link",link:"/requests",name:"Requests"},
        {type:"link",link:"/services",name:"Services"},
        {type:"link",link:"/contact-us",name:"Contact Us"},
        {type:"link",link:"/sign-up",name:"Sign Up"}
    ] 
    return (
        <div>
            <Navbar options={options}/>
            <Intro/>
        </div>
    );

}