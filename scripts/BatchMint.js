const hre = require("hardhat");
const ContractJSON = require("../artifacts/contracts/KitsuneNFTs.sol/KitsuneNFTs.json");
require('dotenv').config()

const nftAddress = "0xe6593c6bACA28B2b77b6b1109D449C5e1d47e77D"; //contract address
const nftABI = ContractJSON.abi;
// const walletAddress = ""; // place your public address for your wallet here

async function main() {

    const [signer] = await ethers.getSigners();
    signerAddress = signer.address;
    const NFTContract = await ethers.getContractFactory("KitsuneNFTs");
    console.log("1");
    const nftcontract = await NFTContract.attach(nftAddress);
    console.log("2");
    // const nftcontract = await hre.ethers.getContractAt(nftABI, nftAddress);
    
    // Call the mint function on the contract to mint 40 nfts
    const tx = await nftcontract.Batchmint(signerAddress,40);
    console.log("3");
    await tx.wait()
    console.log("4");

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