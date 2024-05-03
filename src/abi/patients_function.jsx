export const PATIENT_FUNCTION_ABI=[
	{
		"inputs": [
			{
				"internalType": "contract ContractRegistry",
				"name": "_contractRegistry",
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
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_token",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_hospitalUsername",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_hospitalName",
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
			},
			{
				"internalType": "string",
				"name": "_doctorName",
				"type": "string"
			}
		],
		"name": "addAppointment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_hospitalUsername",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_token",
				"type": "string"
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
				"name": "_username",
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
				"name": "_hospitalUsername",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_token",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			}
		],
		"name": "completeAppointment",
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
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			}
		],
		"name": "getAppointments",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "token",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "time",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "hospitalUsername",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "hospitalName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "department",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "doctorUsername",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "cid",
						"type": "string"
					}
				],
				"internalType": "struct PatientFunctions.AppointmentDetails[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			}
		],
		"name": "getEMRDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "time",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "hospitalUsername",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "hospitalName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "department",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "doctorUsername",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "doctorName",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "researchSharing",
						"type": "bool"
					}
				],
				"internalType": "struct PatientFunctions.EMRDetails[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cid",
				"type": "string"
			}
		],
		"name": "getSharingDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "hospitalName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "hospitalUsername",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "department",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "doctorUsername",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "doctorName",
						"type": "string"
					}
				],
				"internalType": "struct PatientFunctions.SharingData[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_hospitalUsername",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_doctorUsername",
				"type": "string"
			}
		],
		"name": "removeSharingEntry",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_oldCID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_newCID",
				"type": "string"
			}
		],
		"name": "replaceCID",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cid",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_researchStatus",
				"type": "bool"
			}
		],
		"name": "setEMRResearchStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cid",
				"type": "string"
			},
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
				"internalType": "string",
				"name": "_doctorName",
				"type": "string"
			},
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
		"name": "share",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];