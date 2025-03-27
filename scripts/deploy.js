const hre = require("hardhat");

async function main() {
    const Voting = await hre.ethers.getContractFactory("VotingSystem");
    const arr = ["Rahul", "Modi", "Kejriwal"];
    const voting = await Voting.deploy(arr);
    await voting.deployed();

    console.log("Voting deployed to:", voting.address); 
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
