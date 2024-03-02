# Ganache-React-Web3-Connection

This project demonstrates the connection between Ganache, a personal blockchain for Ethereum development, React frontend, and Web3.js library. The project utilizes smart contracts written in Solidity and interacts with them through the Web3.js library in a React frontend.

## How to Run

### Backend (Blockchain App)

1. Ensure you have Ganache installed and running with your desired blockchain configuration.
2. Navigate to the root directory:

    ```bash
    cd ganache-react-web3-connection
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Compile the smart contracts:

    ```bash
    truffle compile
    ```

5. Deploy the smart contracts to your local blockchain (ensure Ganache is running):

    ```bash
    truffle migrate
    ```

6. Start the blockchain app:

    ```bash
    truffle develop
    ```

7. Interact with the blockchain app using the Truffle console or other tools.

### Frontend (React App)

1. Navigate to the `client` directory:

    ```bash
    cd client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

4. Access the React app in your web browser at `http://localhost:3000`.

## Usage

- Fetch data from the blockchain.
- Set data on the blockchain.
- Explore the connection between Ganache, React frontend, and Web3.js.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

