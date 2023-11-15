import React, { Component } from 'react';
import web3 from './web3';
import MessageContract from './MessageContract';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      newMessage: '',
      updatedMessage: '',
      connectedAccount: '',
    };
  }

  async componentDidMount() {
    try {
      this.messageContract = new web3.eth.Contract(MessageContract.abi, MessageContract.address);
      const message = await this.messageContract.methods.getMessage().call();
      this.setState({ message });
    } catch (error) {
      console.error('Error loading contract:', error);
    }
  }

  // Function to connect MetaMask
  connectMetaMask = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      this.setState({ connectedAccount: accounts[0] });
    } catch (error) {
      console.error('Error connecting MetaMask:', error);
    }
  }

  setMessage = async () => {
    try {
      if (!this.state.connectedAccount) {
        alert('Please connect your MetaMask wallet first.');
        return;
      }
      await this.messageContract.methods.setMessage(this.state.newMessage).send({
        from: this.state.connectedAccount,
      });
      this.setState({ message: this.state.newMessage });
    } catch (error) {
      console.error('Error setting the message:', error);
    }
  }

  updateMessage = async () => {
    try {
      if (!this.state.connectedAccount) {
        alert('Please connect your MetaMask wallet first.');
        return;
      }
      await this.messageContract.methods.setMessage(this.state.updatedMessage).send({
        from: this.state.connectedAccount,
      });
      this.setState({ message: this.state.updatedMessage });
    } catch (error) {
      console.error('Error updating the message:', error);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Message App</h1>
        <div>
          <h3>Connect to MetaMask:</h3>
          <button onClick={this.connectMetaMask}>Connect MetaMask</button>
          <p>Connected Account: {this.state.connectedAccount}</p>
        </div>
        <div>
          <h3>Set Message:</h3>
          <input
            type="text"
            placeholder="Enter a new message"
            value={this.state.newMessage}
            onChange={(e) => this.setState({ newMessage: e.target.value })}
          />
          <button onClick={this.setMessage}>Set Message</button>
        </div>
        <div>
          <h3>Retrieve Message:</h3>
          <p>{this.state.message}</p>
        </div>
        <div>
          <h3>Update Message:</h3>
          <input
            type="text"
            placeholder="Enter an updated message"
            value={this.state.updatedMessage}
            onChange={(e) => this.setState({ updatedMessage: e.target.value })}
          />
          <button onClick={this.updateMessage}>Update Message</button>
        </div>
      </div>
    );
  }
}

export default App;
