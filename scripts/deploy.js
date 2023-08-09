const hre = require("hardhat");

async function main() {

  const [owner] = await ethers.getSigners();
  const Brar = await hre.ethers.deployContract("BrarNFTs");
  await Brar.waitForDeployment();

  const ownerBalance = await Brar.balanceOf(owner.address);
  console.log(ethers.toNumber(ownerBalance));
  const address = await Brar.getAddress();
  console.log("BrarNFTs is deployed to: ",address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
