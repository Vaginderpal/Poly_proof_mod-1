const hre = require("hardhat");
const fxRootContractABI = require("../FXRootContractABI.json");
const nftContractJSON = require("../artifacts/contracts/KitsuneNFTs.sol/KitsuneNFTs.json");

const nftAddress = "0xe6593c6bACA28B2b77b6b1109D449C5e1d47e77D"; //contract address
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
    
    // nftIds to transfer
    // const nftIds = [0, 1, 2, 3, 4];

    // Deposit the nfts to the FXRoot contracts
    for(let i=0; i<40; i++){
        console.log(`Depositing NFT with nft ID ${i} to the FxPortal Bridge...`);
        const depositTx = await fxRoot.connect(signer).deposit(nftAddress, signerAddress, i, "0x6566");
        //address rootnft, address user, uint256 nftId, bytes memory data

        await depositTx.wait();
    }
    console.log("Approved and deposited");
    
    // const balance = await nft.balanceOf(signerAddress);
    // console.log(ethers.toNumber(balance));
  
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });