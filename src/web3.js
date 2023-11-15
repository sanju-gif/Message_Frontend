import Web3 from 'web3';

let web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    // Request account access if needed
    window.ethereum.enable();
  } catch (error) {
    // User denied account access...
    console.error('User denied account access', error);
  }
} else if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
} else {
  console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
}

export default web3;
