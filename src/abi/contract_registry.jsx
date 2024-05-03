export const CONTRACT_REGISTRY_ABI=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_key",
				"type": "string"
			}
		],
		"name": "getContractAddress",
		"outputs": [
			{
				"internalType": "address",
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
				"internalType": "string[]",
				"name": "_keys",
				"type": "string[]"
			}
		],
		"name": "getContractsAndAddresses",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_key",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_contractAddress",
				"type": "address"
			}
		],
		"name": "insertContractAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_key",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_contractAddress",
				"type": "address"
			}
		],
		"name": "overwriteEntry",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];