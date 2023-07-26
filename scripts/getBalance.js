const nftAddress = "0x0b086618b53df06e12f26eb2c9acc3938a10e3a9"; // contract address

async function main() {

    const [signer] = await ethers.getSigners();
    const NFTContract = await ethers.getContractFactory("KitsuneNFTs");
    const nftcontract = await NFTContract.attach(nftAddress);

    console.log("You now have: " + await nftcontract.balanceOf(signer.address) + " nfts");
}

main().catch((error) => {
console.error(error);
process.exitCode = 1;
});