const MessageContract = {
    abi: [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "newMessage",
            "type": "string"
          }
        ],
        "name": "MessageUpdated",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "getMessage",
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
            "name": "__newMessage",
            "type": "string"
          }
        ],
        "name": "setMessage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "__newMessage",
            "type": "string"
          }
        ],
        "name": "updateMessage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    address: "0xc3fc16a25388843db03B4cf9834Cd81E9e40B462", // Replace with the actual contract address
  };
  
  export default MessageContract;
  