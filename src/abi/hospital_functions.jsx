export const HOSPITAL_FUNCTIONS_ABI=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_hospitalName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_hospitalUsername",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_contractRegistryAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_department",
				"type": "string"
			}
		],
		"name": "addDepartment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_doctorUsername",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_department",
				"type": "string"
			}
		],
		"name": "addDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_patientUsername",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cid",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_time",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			}
		],
		"name": "addEMR",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_department",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_token",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			}
		],
		"name": "cancelAppointment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_department",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_token",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_time",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_CID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sex",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_age",
				"type": "string"
			}
		],
		"name": "closeAppointment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractRegistry",
		"outputs": [
			{
				"internalType": "contract ContractRegistry",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "departmentList",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_department",
				"type": "string"
			}
		],
		"name": "getAppointments",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDepartments",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_department",
				"type": "string"
			}
		],
		"name": "getDoctors",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_department",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			}
		],
		"name": "getLogs",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_patientUsername",
				"type": "string"
			}
		],
		"name": "getMedicalRecords",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_token",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_department",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_doctorUsername",
				"type": "string"
			}
		],
		"name": "getPatientFromToken",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_department",
				"type": "string"
			}
		],
		"name": "getSlots",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "hospitalName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "hospitalUsername",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_department",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_doctorUsername",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_count",
				"type": "uint256"
			}
		],
		"name": "increaseSlots",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_patientUsername",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cid",
				"type": "string"
			}
		],
		"name": "removeEMR",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_patientUsername",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_oldCid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_newCid",
				"type": "string"
			}
		],
		"name": "replaceEMR",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_department",
				"type": "string"
			}
		],
		"name": "resetSlots",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_department",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_doctorUsername",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_patientUsername",
				"type": "string"
			}
		],
		"name": "setAppointment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];