const hre = require("hardhat");
const ContractJSON = require("../artifacts/contracts/KitsuneNFTs.sol/KitsuneNFTs.json");
require('dotenv').config()

const nftAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; //contract address
const nftABI = ContractJSON.abi;
// const walletAddress = ""; // place your public address for your wallet here

async function main() {

    const [signer] = await ethers.getSigners();
    signerAddress = signer.address;
    const NFTContract = await ethers.getContractFactory("KitsuneNFTs");
    const nftcontract = await NFTContract.attach(nftAddress);
    // const nftcontract = await hre.ethers.getContractAt(nftABI, nftAddress);
    
    // Call the mint function on the contract to mint 40 nfts
    const tx = await nftcontract.Batchmint(signerAddress,40);
    await tx.wait()

    // Log a message to the console to indicate that the nfts have been minted
    console.log("Minted 40 nfts to: ",signerAddress);

    const balance = await nftcontract.balanceOf(signerAddress);
    console.log("You now have: " + balance + " nfts");
  }

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });