const hre = require("hardhat");

async function main () {
    const Contract = await hre.ethers.getContractFactory("CastlesArbi");
    const contract = await Contract.attach('ADDRESS');

    // Mint all owner castles
    for (var i = 9900; i< 10000; i++) {
      console.log('Minting', i);

      try {
        (await contract.ownerClaim(i));
      }catch(e) {
        console.log('Error minting', e, i)
      }
    }

   
}
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });