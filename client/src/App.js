import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
const SimpleStorageABI = require('./SimpleStorage.json');

const ganacheUrl = 'http://127.0.0.1:7545';
const SimpleStorageAddress = '0x63631549432302123d49d3093499790e26ca27eA';

function App() {
  const [data, setData] = useState('');
  const [inputData, setInputData] = useState('');
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initializeWeb3 = async () => {
      try {
        const provider = new Web3.providers.HttpProvider(ganacheUrl);
        const web3Instance = new Web3(provider);
        setWeb3(web3Instance);
        const simpleStorageContract = new web3Instance.eth.Contract(
          SimpleStorageABI.abi,
          SimpleStorageAddress
        );
        setContract(simpleStorageContract);
  
        console.log('Connected to blockchain network');
      } catch (error) {
        console.error('Error initializing web3:', error);
      }
    };
  
    initializeWeb3();
  }, []);

  const fetchData = async () => {
    try {
      const result = await contract.methods.getData().call();
      console.log('Data from smart contract:', result);
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const setDataOnChain = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      await contract.methods.setData(inputData).send({ from: accounts[0] });
      fetchData(); 
    } catch (error) {
      console.error('Error setting data:', error);
    }
  };

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  console.log('Current data state:', data);

  return (
    <div>
      <h1>Blockchain App</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <p>data is consoled out {data}</p>
      <input
        type="text"
        value={inputData}
        onChange={handleInputChange}
        placeholder="Enter data"
      />
      <button onClick={setDataOnChain}>Set Data</button>
    </div>
  );
}

export default App;
