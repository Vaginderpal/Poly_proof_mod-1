const hre = require("hardhat");
const fxRootContractABI = require("../FXRootContractABI.json");
const nftContractJSON = require("../artifacts/contracts/KitsuneNFTs.sol/KitsuneNFTs.json");

const nftAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; //contract address
const nftABI = nftContractJSON.abi;
const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
// const walletAddress = ""; // place your public address for your wallet here

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
    const nftIds = [0, 1, 2, 3, 4];

    // Deposit the nfts to the FXRoot contracts
    for(let i=0; i<nftIds.length; i++){
        console.log(`Depositing NFT with nft ID ${i} to the FxPortal Bridge...`);
        const depositTx = await fxRoot.connect(signer).deposit(nftAddress, signerAddress, nftIds[i], "0x6566");
        //address rootnft, address user, uint256 nftId, bytes memory data

        await depositTx.wait();
    }
    console.log("Approved and deposited");
    
    const balance = await nft.balanceOf(signerAddress);
    console.log(ethers.toNumber(balance));
    // const balance = await nft.getBalance(signerAddress);
    // Print the balance of the wallet
    // console.log(
    //     "NFT wallet balance", signerAddress,"is: ",balance.toString()
    // );

    // const approveTx = await nftContract.approve(fxRootAddress, 500);
    // await approveTx.wait();

    // console.log('Approval confirmed');


    // const depositTx = await fxContract.deposit(nftAddress, walletAddress, 500, "0x6556");
    // await depositTx.wait();

    // console.log("nfts deposited");
  
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });