// Function to add department
export function addDepartment(_department)  {

}



export function addDoctor(_doctorUsername, _department)  {

}





 // Function to get the list of departments
export function getDepartments() {

}

// Function to get doctors under a department
export function getDoctors(_department) {
   
}

// Internal function to get doctor names based on doctor usernames
export function getDoctorNames(_department)  {
  
}



// Function to get logs for a department and date
export function getLogs(_department, _date) {

}

// Function to check if a department exists
export function departmentExists(_department) {

}





// Function to get slots for doctors in a department and date
export function getSlots( _department) {

}




// Function to increase slots for a doctor on a specific date
export function increaseSlots( _department, _doctorUsername, _count)  {

}




// Function to check if a doctor is in the specified department
export function isDoctorInDepartment(_department, _doctorUsername)  {

}

// Function to set an appointment for a patient with a doctor in the specified department
export function setAppointment(_date, _department,_doctorUsername, _patientUsername)  {

}



// Internal function to convert uint to string
export function uintToString( _i) {

}

// Function to get appointments for a department
export function getAppointments(_department) {

}


// Function to cancel an appointment
export function cancelAppointment( _department, _token,_date)  {

}


export function closeAppointment(
_department,
_token,
_date,
_time,
_CID,
_description,
_sex,
_age
)  {

}

export function updateSlotData(
_department,
_date,
_token,
 _time,
_doctorUsername,
_doctorName,
 _patientUsername
)  {

}

export function insertMedicalRecord(
_patientUsername,
 _CID,
_description,
_date,
_time
)  {

}

export function completeAppointment(
_department,
 _token,
_date,
_time,
 _CID,
_description
)  {

}


export function getMedicalRecords( _patientUsername) {

}

export function getPatientFromToken(_token, _department,_doctorUsername) {

}

export function resetSlots( _department)  {

}

export function addEMR(
_patientUsername,
 _cid,
_date,
_time,
_description
)  {

}

export function replaceEMR(
_patientUsername,
_oldCid,
_newCid
)  {

}

// Internal function to compare two strings
export function compareStrings( a, b)  {

}

export function removeEMR(
_patientUsername,
 _cid
)  {

}

// Internal function to find the index of a record with the specified CID
export function findRecordIndex(_records, _cid)  {

}
