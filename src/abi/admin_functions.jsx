export const ADMIN_FUNCTIONS_ABI=[
	{
		"inputs": [
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
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_place",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_license",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ownership",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_contact",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_encryptedPrivateKey",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "addHospital",
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
	}
];