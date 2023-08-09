
# Bridge-NFT

This project contains a simple ERC-721A smart contract for creating and managing non-fungible tokens (NFTs). The contract allows users to mint new NFTs, set their metadata (URI), and check the balance of NFTs. You can also bridge your nfts to some other network using the FxPortal bridge.
## Note 
1. Make sure to add a .env file and add your account's Private Key in the file.
2. You can customize the number of NFTs to be minted and the base URL for the images in the batchMint.js script and the NFT.sol contract, respectively.
## Description
A 5-item NFT collection has been created using "Stable Diffusion". The items are stored on IPFS using pinata.cloud.  ERC721A smart contract is deployed to the Goerli Ethereum Testnet. There is a promptDescription function on the contract that returns the prompt used to generate the images. There is a hardhat script to batch mint all NFTs and a hardhat script to batch transfer all NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge. The NFTs are approved for transfer and deposited to the Bridge. The getBalance script can be run to check the NFTs on Mumbai.
## Getting Started

1. Clone the repository:

```
git clone <https://github.com/Vaginderpal/Poly_proof_mod-1.git>
```

2. Install the dependencies :

```
npm i
```

3. Install the ERC721A contract:

```
npm install erc721a
```

4. Compile the contract and deploy
```
npx hardhat run scripts/deploy.js --network goerli

```
To batch mint tokens: npx hardhat run scripts/BatchMint.js --network goerli

To approve and deposit your tokens to polygon: npx hardhat run scripts/BatchTransfer.js --network goerli

To see the new polygon balance: npx hardhat run scripts/getBalance.js --network mumbai





## Technologies Used 
- MetaMask - Wallet and gateway to Ethereum blockchain  
- ethers.js - Library for interacting with Ethereum smart contracts  
- Hardhat - Development environment and task runner for building, testing, and deploying smart contracts on Ethereum and other blockchain platforms
## Authors
- [Vaginderpal Singh Brar](https://github.com/Vaginderpal)



