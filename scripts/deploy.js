
import hre from "hardhat";

async function main() {
  // const Messageer = await hre.ethers.getContractFactory("messenger"); //fetching bytecode and ABI
  const Chai = await hre.ethers.getContractFactory("chai"); //fetching bytecode and ABI
  // const messageer = await Messageer.deploy(); //creating an instance of our smart contract
  const chai = await Chai.deploy(); //creating an instance of our smart contract

  // await messageer.deployed();//deploying your smart contract
  await chai.deployed();//deploying your smart contract

  // console.log("Deployed Messageer contract address:",`${messageer.address}`);
  console.log("Deployed Chai contract address:",`${chai.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9