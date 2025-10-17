# Blockart 🛍️🔗

**Blockart** is a modern, decentralized e-commerce platform built on blockchain technology. It provides a transparent, secure, and efficient marketplace for buyers and sellers, leveraging smart contracts for transactions and NFTs for product warranties.

## 📸 Screenshots

### Home Page
![Blockart Home Page](https://raw.githubusercontent.com/piyush2004parate/blockart/main/public/HomePage.jpg)

### Buyer Settings
![Blockart Buyer Settings](https://raw.githubusercontent.com/piyush2004parate/blockart/main/public/BuyerSetting.jpg)

### Seller Dashboard
![Blockart Seller Dashboard](https://raw.githubusercontent.com/piyush2004parate/blockart/main/public/SellerDashboard.jpg)

### Buyer Transactions
![Blockart Buyer Transactions](https://raw.githubusercontent.com/piyush2004parate/blockart/main/public/BuyerTransaction.jpg)

### Products Page (MetaMask Confirm)
![Blockart Products Page MetaMask Confirm](https://raw.githubusercontent.com/piyush2004parate/blockart/main/public/BuyerProducts.jpg)

### Pinata IPFS Files
![Pinata IPFS Files](https://raw.githubusercontent.com/piyush2004parate/blockart/main/public/PinataCloud.jpg)


## ✨ Features

Blockart offers a complete e-commerce experience with distinct features for both buyers and sellers.

**For Buyers:**
* **Browse & Search:** Easily search and filter through a wide range of products.
* **Secure Payments:** Connect your crypto wallet (e.g., MetaMask) to make secure payments on the blockchain.
* **NFT Warranties:** Receive a unique NFT for each product purchased, serving as a verifiable and transferable proof of warranty.
* **Order Tracking:** View your order history and track the status of your purchases.
* **User Dashboard:** A personal dashboard to manage your profile, orders, and warranties.

**For Sellers:**
* **Product Management:** Easily add, update, and manage your product listings.
* **Order Fulfillment:** A dedicated dashboard to view incoming orders and manage their status (e.g., Placed, Shipped, Delivered).
* **Sales Analytics:** Visualize sales data with charts and statistics to track performance.
* **Transparent Transactions:** Receive payments directly and securely through the smart contract.

## 🛠️ Tech Stack

The project is built with a modern tech stack, separating the frontend, and blockchain logic.

* **Frontend:**
    * [**Next.js**](https://nextjs.org/) - React framework for server-side rendering and static site generation.
    * [**React.js**](https://reactjs.org/) - A JavaScript library for building user interfaces.
    * [**Tailwind CSS**](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
* **Blockchain:**
    * [**Solidity**](https://soliditylang.org/) - The programming language for writing smart contracts.
    * [**Hardhat**](https://hardhat.org/) - An Ethereum development environment for compiling, deploying, testing, and debugging smart contracts.
    * [**Ethers.js**](https://ethers.io/) - A complete and compact library for interacting with the Ethereum Blockchain.
* **Backend Services:**
    * [**Firebase**](https://firebase.google.com/) - Used for user authentication and off-chain data management.
    * [**IPFS**](https://ipfs.io/) - Used for decentralized storage of product metadata and images.

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

* **Node.js** (v16 or later)
* **Yarn** or **npm**
* **MetaMask** browser extension

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/piyush2004parate/blockart.git](https://github.com/piyush2004parate/blockart.git)
    cd blockart
    ```

2.  **Install Frontend Dependencies:**
    ```sh
    npm install
    # or
    yarn install
    ```

3.  **Install Backend Dependencies:**
    ```sh
    cd backend
    npm install
    # or
    yarn install
    ```

### Running the Backend (Smart Contracts)

1.  **Start a local Hardhat node:**
    From the `/backend` directory, run:
    ```sh
    npx hardhat node
    ```
    This will start a local Ethereum node and provide you with several test accounts and their private keys.

2.  **Deploy the smart contracts:**
    In a new terminal, from the `/backend` directory, run the deployment script:
    ```sh
    npx hardhat run scripts/deploy.js --network localhost
    ```
    Copy the deployed contract addresses that are logged in the console. You will need them for the frontend configuration.

### Running the Frontend

1.  **Configure environment variables:**
    * Update the contract addresses in `utils/Blockart.json` and `utils/NftWarranty.json` with the ones you deployed.
    * Set up your Firebase configuration in `firebase-config.js`.

2.  **Start the development server:**
    From the root project directory, run:
    ```sh
    npm run dev
    # or
    yarn dev
    ```

3.  **Connect to the application:**
    * Open [http://localhost:3000](http://localhost:3000) in your browser.
    * Make sure your MetaMask is connected to the `localhost:8545` network.
    * Import one of the test accounts from the `npx hardhat node` output into MetaMask to interact with the application.

## 📂 Project Structure

The repository is organized into two main parts: the `backend` for smart contracts and the `frontend` application root.
