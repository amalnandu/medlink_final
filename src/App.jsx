import React, { useState, useEffect } from "react";
import { Navbar } from "./components/components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Intro, Register,Account,Requests, Create, TempAccount} from "./routes/routes";
import { loadBlockchain } from "./blockchain/setup";
import { AddDoctor,AddDept,PatientLog,Appointments,Slot,DashboardHospital,HospitalLogin } from "./routes/hospital/hospital";
import { Appointment,FamilyEmrView,FamilyMembers,AppointmentView,PatientLogin } from "./routes/patient/patient";
import { Emr,FamilyEmr,EmrShare,EmrView,AppointmentDetails,DashboardPatient } from "./routes/patient/patient";
import { Admin, Blacklist, DashboardAdmin, Verify,VerifyDetails,Addhospital,Addhospitals } from "./routes/admin/admin";
import { DoctorLogin,DashboardDoctor,PatientLogs,LogDetails,ApppointmentDoctor } from "./routes/doctor/doctor";
import { DoctorAppointmentDetails,EmrDoctor,AppointmentGenerate } from './routes/doctor/doctor'
import { setEncryptedPrivateKey } from "./contract_functions/admin_info";
import { getData,setData } from "./storage/session";





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
    const checkStatus=getData('status')
    if(checkStatus=='undefined'||checkStatus==undefined||checkStatus==null){
      const _web3=await loadBlockchain();
      if(_web3!=null){
        setWeb3(_web3);
        await setEncryptedPrivateKey(_web3,'password') 
      }
      setData('status','initialized')
      console.log('web3 initialized')
    }
  }



  

  return (
    <div >

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

          <Route path="/temp" element={<TempAccount web3={web3}/>}/> 

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
          <Route path="/addhospital" element={<Addhospital/>}/>
          <Route path="/addhospitalusername" element={<Addhospitals/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


