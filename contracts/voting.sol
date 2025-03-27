//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract VotingSystem
{
    address public admin;
    struct Candidate{
    string name;
    uint voteCount;
  }
    Candidate[] public Candidates;
    constructor(string[] memory _candidateNames) {
    admin=msg.sender;   
    for(uint i=0;i<_candidateNames.length;i++){
    Candidates.push(Candidate(_candidateNames[i],0));
    }
    }
    mapping(address => bool) public hasVoted;
    function vote(uint _candidateIndex) public {
    require(!hasVoted[msg.sender], "You have already voted.");
    hasVoted[msg.sender]=true;
    Candidates[_candidateIndex].voteCount++;
    }
   function getWinner() public view returns(string memory){
    uint winningVoteCount = 0;
    uint winningCandidateIndex = 0;
    for (uint i = 0; i < Candidates.length; i++) {
      if (Candidates[i].voteCount > winningVoteCount) {
        winningVoteCount = Candidates[i].voteCount;
        winningCandidateIndex = i;
      }
    }
    return Candidates[winningCandidateIndex].name;

}
}