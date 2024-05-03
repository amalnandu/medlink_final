export const ADMIN_INFO_ABI=[
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
		"inputs": [],
		"name": "getEncryptedPrivateKey",
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
				"name": "_encryptedPrivateKey",
				"type": "string"
			}
		],
		"name": "setEncryptedPrivateKey",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];