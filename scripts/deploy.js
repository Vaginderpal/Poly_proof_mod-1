const hre = require("hardhat");

async function main() {

  const [owner] = await ethers.getSigners();
  const kitsune = await hre.ethers.deployContract("KitsuneNFTs");
  await kitsune.waitForDeployment();

  const ownerBalance = await kitsune.balanceOf(owner.address);
  console.log(ethers.toNumber(ownerBalance));
  const address = await kitsune.getAddress();
  console.log("KitsuneNFT is deployed to: ",address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
