const nftAddress = "0xE6db7ebB38Fb54adA74b44f4C55601CB4623DE66"; // contract address

async function main() {

    const [signer] = await ethers.getSigners();
    const NFTContract = await ethers.getContractFactory("BrarNFTs");
    const nftcontract = await NFTContract.attach(nftAddress);

    console.log("You now have: " + await nftcontract.balanceOf(signer.address) + " nfts");
}

main().catch((error) => {
console.error(error);
process.exitCode = 1;
});