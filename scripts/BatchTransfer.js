const hre = require("hardhat");
const fxRootContractABI = require("../FXRootContractABI.json");
const nftContractJSON = require("../artifacts/contracts/BrarNFTs.sol/BrarNFTs.json");

const nftAddress = "0x31cbA7F0527d3135992C483E2bFA2DE37E18CC9d"; //contract address
const nftABI = nftContractJSON.abi;
const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";

async function main() {

    const [signer] = await ethers.getSigners();
    signerAddress = signer.address;
    console.log(signerAddress);
    const nft = await hre.ethers.getContractAt(nftABI, nftAddress);
    const fxRoot = await hre.ethers.getContractAt(fxRootContractABI, fxRootAddress);  // Get FXRoot contract instance

    // Approve the nfts for transfer
    const approveTx = await nft.connect(signer).setApprovalForAll(fxRootAddress, true);
    await approveTx.wait();
    console.log("Approval confirmed");
    
    // Deposit the nfts to the FXRoot contracts
    for(let i=0; i<40; i++){
        console.log(`Depositing NFT with nft ID ${i} to the FxPortal Bridge...`);
        const depositTx = await fxRoot.connect(signer).deposit(nftAddress, signerAddress, i, "0x6566");
        //address rootnft, address user, uint256 nftId, bytes memory data

        await depositTx.wait();
    }
    console.log("Approved and deposited");
    
    const balance = await nft.balanceOf(signerAddress);
    console.log(ethers.toNumber(balance));
  
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });