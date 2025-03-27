const hre = require("hardhat");

async function main() {
   
    const deployedAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

    const [deployer, voter1, voter2, voter3, voter4] = await hre.ethers.getSigners();
    const voting = await hre.ethers.getContractAt("VotingSystem", deployedAddress);

    console.log("Voting in progress...");

    
    await (await voting.connect(voter1).vote(0)).wait();
    console.log(`${voter1.address} voted for candidate 0`);

    await (await voting.connect(voter2).vote(0)).wait();
    console.log(`${voter2.address} voted for candidate 0`);

    await (await voting.connect(voter3).vote(2)).wait();
    console.log(`${voter3.address} voted for candidate 2`);

    await (await voting.connect(voter4).vote(0)).wait();
    console.log(`${voter4.address} voted for candidate 0`);

   
    const winner = await voting.getWinner();
    console.log("The winner of the election is:", winner);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
