const { ethers } = require("hardhat");

async function main() {
	let contract = await ethers.getContractFactory("WorldOfJamette");
	
	const deployed = await contract.deploy();
	console.log(`NFT Address = ${deployed.address}`);

};

main().then( (v) => process.exit(0))
	.catch( err => {
		console.log(err);
		process.exit(1);
	});