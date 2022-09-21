const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CastlesArbi", function () {

  let castlesArbi;

  this.beforeAll(async () => {
    const CastlesArbi = await ethers.getContractFactory("CastlesArbi");
   castlesArbi = await CastlesArbi.deploy();
    await castlesArbi.deployed();
  });

  it("Should do a get defense of the angels", async function () {
   

    const price = await castlesArbi.price();

    console.log("price", price);

    expect(
      await castlesArbi.mint(8764, {
        value: price,
      })
    ).to.emit(castlesArbi, "Transfer");

    const name = await castlesArbi.getName(8764);
    const defense = await castlesArbi.getDefense(8764);
    const rarityNumber = await castlesArbi.getRarityNumber(8764);
    const skillAmount = await castlesArbi.getSkillAmount(8764);
    const capacity = await castlesArbi.getCapacity(8764);
    const warrior = await castlesArbi.getWarrior(8764);
    console.log(name, defense.toNumber(), rarityNumber.toNumber(), skillAmount.toNumber(), capacity.toNumber());

    expect(name.length).to.be.greaterThan(0);
    expect(name).to.equal("Defense of the Angels");
    expect(warrior).to.equal("none");

    expect(rarityNumber.toNumber()).to.be.greaterThan(0);
    expect(skillAmount.toNumber()).to.be.greaterThan(0);
    expect(capacity.toNumber()).to.be.greaterThan(0);
    expect(defense.toNumber()).to.be.greaterThan(0);
    // .withArgs(ethers.constants.AddressZero, owner.address, tokenId);

    // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await castlesArbi.greet()).to.equal('Hola, mundo!');
  });

  it("Should get a golem", async function () {
   

    const price = await castlesArbi.price();

    console.log("price", price);

    expect(
      await castlesArbi.mint(8555, {
        value: price,
      })
    ).to.emit(castlesArbi, "Transfer");

    const name = await castlesArbi.getName(8555);
    const defense = await castlesArbi.getDefense(8555);
    const rarityNumber = await castlesArbi.getRarityNumber(8555);
    const skillAmount = await castlesArbi.getSkillAmount(8555);
    const capacity = await castlesArbi.getCapacity(8555);
    const warrior = await castlesArbi.getWarrior(8555);
    const warriorName = await castlesArbi.getWarriorName(8555);

    console.log(name, defense.toNumber(), rarityNumber.toNumber(), skillAmount.toNumber(), capacity.toNumber(), warrior);

    expect(name.length).to.be.greaterThan(0);
    expect(name).to.equal("Secured Dome of the Adventurer Golem");
    expect(warriorName).to.equal("Adventurer Golem");
    expect(warrior).to.equal("Golem");

    expect(rarityNumber.toNumber()).to.be.greaterThan(0);
    expect(skillAmount.toNumber()).to.be.greaterThan(0);
    expect(capacity.toNumber()).to.be.greaterThan(0);
    expect(defense.toNumber()).to.be.greaterThan(0);
    // .withArgs(ethers.constants.AddressZero, owner.address, tokenId);

    // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await castlesArbi.greet()).to.equal('Hola, mundo!');
  });
  
});
