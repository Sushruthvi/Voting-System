const {ethers} = require("hardhat")
const {expect} = require("chai")

console.log("The test file is being executed");
describe("VotingSystem" , function(){
    let voting, Voting , contAddress;
    beforeEach(async function(){
        voting = await ethers.getContractFactory("VotingSystem");
        const arr = ["Modi", "Rahul" , "Kejriwal"];
        Voting = await voting.deploy(arr);
        await Voting.deployed();
        contAddress = Voting.address;
        console.log("Contract deployed at: " , contAddress);
    })

    it("Should show the correct winner" , async function(){
        const voting = await ethers.getContractAt("VotingSystem" , contAddress);
        const [deployer , voter1 , voter2 , voter3 , voter4] = await ethers.getSigners();
        const tx1 = await voting.connect(voter1).vote(0);
        await tx1.wait();
        const tx2 = await voting.connect(voter2).vote(0);
        await tx2.wait();
        const tx3 = await voting.connect(voter3).vote(2);
        await tx3.wait();
        const tx4 = await voting.connect(voter4).vote(0);
        await tx4.wait();
        const mustbe = "Modi";
        const winner = await voting.getWinner();
        expect(winner).to.equal(mustbe);
    })
})