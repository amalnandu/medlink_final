import React, { useNavigate, useLocation, useState, useEffect } from "react";
import { Navbar } from "./components/components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Intro, Register,Account,Requests, Create,/*Create,Login,TempAccount*/ } from "./routes/routes";
import { loadBlockchain,/*fetchAccount*/ } from "./blockchain/setup";
// import { checkIfUserAlreadyExists, createAccount } from "./blockchain/registerUser";
// import { BeforeSignIn,DoctorProfile,User } from "./profiles/profiles";
// import { Tokens,History,Profile } from "./routes/patientapj/patient";
import { AddDoctor,AddDept,PatientLog,Appointments,Slot,DashboardHospital,HospitalLogin } from "./routes/hospital/hospital";
import { Appointment,FamilyEmrView,FamilyMembers,AppointmentView,PatientLogin } from "./routes/patient/patient";
import { Emr,FamilyEmr,EmrShare,EmrView,AppointmentDetails,DashboardPatient } from "./routes/patient/patient";
import { Admin, Blacklist, DashboardAdmin, Verify,VerifyDetails,Addhospital,Addhospitals } from "./routes/admin/admin";
import { DoctorLogin,DashboardDoctor,PatientLogs,LogDetails,ApppointmentDoctor } from "./routes/doctor/doctor";
import { DoctorAppointmentDetails,EmrDoctor,AppointmentGenerate } from './routes/doctor/doctor'
import {BG} from "../src/images/images"



const style={
  backgroundUrl:`url(${BG})`
}


/////

export function App(props) {
 
  const [account,setAccount]=useState(null);
  const [web3,setWeb3]=useState(null);
  const [options,setOptions]=useState([]);


  function updateAccount(accountData){
    console.log('account',accountData)
    setAccount(accountData);
  }
 
  //componentDidMount
  useEffect(() => {
    initialize();
    console.log("component mounted");
  }, []);

  useEffect(()=>{

  },[account])



  async function initialize(){
 
    const _web3=await loadBlockchain();
    if(_web3!=null){
      setWeb3(_web3);
    }

    //depending on the the accounts split
    // setOptions([
    //   <BeforeSignIn/>,
    //   <DoctorProfile account={account}/>,
    //   <User account={account}/>,
    //   <TempAccount web3={web3} registrationType={'register'}/>
    // ]);
  }

  // function getCurrentPage(options,type){
  //   console.log({options ,type})
  //   if(type=="user"){
  //     return options[2];
  //   }
  //   else if(type=="doctor"){
  //     return options[1];
  //   }
  //   else if(type=="pharmacist"){
  //     return options[0];//####
  //   }
  //   else if(type=="receptionist"){
  //     return options[0];//#####
  //   }
  //   else{
  //     return options[0];
  //   }
  // } 

  

  return (
    <div >
      {/* <Router>
        <Routes>
          <Route path="/" element={getCurrentPage(options,account.type)} />
          <Route
            path="/register"
            element={
              <Register
                props={{
                  contract: null,
                  accounts:null
                }}
              />
            }
          />
          <Route path="/login" element={<Login/>}/>
          {
            options[3]!=undefined?<Route path="/create" element={<Create web3={web3} />}/>:null
          }
          
          <Route path="/account" element={<Account/>}/>
          <Route path="/requests" element={<Requests/>}/>
        </Routes>
      </Router> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/create-account" element={<Create web3={web3} tempAccount={account} setAccount={updateAccount} />} />
          <Route path="/register" element = {<Register web3={web3} account={account}
                props={{contract: null}}/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/requests" element={<Requests/>}/>

          {/**  APJ'S  
          <Route path="/history" element={<History/>}/>
          <Route path="/tokens" element={<Tokens/>}/> 
          <Route path="/profile" element={<Profile/>}/>*/}

          {/** HOSPITAL ROUTING */}
          <Route path="/hospital" element={<HospitalLogin/>}/>
          <Route path="/hospital/dashboard" element={<DashboardHospital/>}/>
          <Route path="/adddoctor" element={<AddDoctor/>}/>
          <Route path="/adddepartment" element={<AddDept/>}/>
          <Route path="/patientlog" element={<PatientLog/>}/>
          <Route path="/appointments" element={<Appointments/>}/>
          <Route path="/appointments/slot" element={<Slot/>}/>

          {/** PATIENT ROUTING */}
          <Route path="/patient" element={<PatientLogin/>}/>
          <Route path="/patient/dashboard" element={<DashboardPatient/>}/>
          <Route path="/familymembers" element={<FamilyMembers/>}/>
          <Route path="/appointment" element={<Appointment/>}/>
          <Route path="/appointment/view" element={<AppointmentView/>}/>
          <Route path="/familymembers/emr" element={<FamilyEmr/>}/>
          <Route path="/familymembers/emr/view" element={<FamilyEmrView/>}/>
          <Route path="/emr" element={<Emr/>}/>
          <Route path="/emr/share" element={<EmrShare/>}/>
          <Route path="/emr/view" element={<EmrView/>}/>
          <Route path="/appointment/details" element={<AppointmentDetails/>}/>

          {/** DOCTOR ROUTING */}
          <Route path="/doctor" element={<DoctorLogin/>}/>
          <Route path="/doctor/dashboard" element={<DashboardDoctor/>}/>
          <Route path="/doctor/patientlogs" element={<PatientLogs/>}/>
          <Route path="/patientlogs/details" element={<LogDetails/>}/>
          <Route path="/doctor/appointment" element={<ApppointmentDoctor/>}/>
          <Route path="/doctor/appointment/details" element={<DoctorAppointmentDetails/>}/>
          <Route path="/doctor/appointment/generate" element={<AppointmentGenerate/>}/>
          <Route path="/doctor/emr" element={<EmrDoctor/>}/>

          {/** ADMIN ROUTING */}
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/admin/dashboard" element={<DashboardAdmin/>}/>
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/verifydetails" element={<VerifyDetails/>}/>
          <Route path="/blacklist" element={<Blacklist/>}/>
          <Route path="/addhopsital" element={<Addhospital/>}/>
          <Route path="/addhopsitalusername" element={<Addhospitals/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


