# Castles

```
/*

  _______________________________________
 /                                       \
/   _   _   _                 _   _   _   \
|  | |_| |_| |   _   _   _   | |_| |_| |  |
|   \   _   /   | |_| |_| |   \   _   /   |
|    | | | |     \       /     | | | |    |
|    | |_| |______|     |______| |_| |    |
|    |              ___              |    |
|    |  _    _    (     )    _    _  |    |
|    | | |  |_|  (       )  |_|  | | |    |
|    | |_|       |       |       |_| |    |
|   /            |_______|            \   |
|  |___________________________________|  |
\ CASTLESDAO presents: Castles Gen One    /
 \_______________________________________/

*/
```


## Setup

Checkout this repo and install dependencies

```
git clone https://github.com/CastleDAO/castles-contract
cd castles-contract
npm install
```


compile the contract and deploy to the internal `hardhat` network

```
npx hardhat compile
npx hardhat run scripts/deploy.js
```

## Here's the next level

a real example requires you to run a local Ganache blockchain simulator (AKA the `localhost` network, chainId `31337`):

```shell
# in one terminal, run a lil blockchain
npx hardhat node --show-stack-traces

# in another terminal, deploy the contract and copy the deployed address
npx hardhat run --network localhost scripts/deploy.js
```

then start `npx hardhat console` and you can interact with said contract

```shell
npx hardhat console --network localhost
```

in the console, connect to our newly deployed `CastlesArbi`:

```javascript
const Contract = await ethers.getContractFactory('CastlesArbi');
const contract = await Contract.attach("ADDRESS_FROM_DEPLOYMENT_GOES_HERE");
```

then let's call some contract methods:

```javascript
(await contract.name()).toString()
// 'ClastlesLootGenOne'

(await contract.totalSupply()).toString();
// '0'
// (because we haven't minted anything yet)

(await contract.getWarriorName(1)).toString();

(await contract.getName(1)).toString();

// 'none'

(await contract.traitsOf(1)).toString();
```


## deploy


This largely requires funding a wallet and registering API keys with [Alchemy](https://docs.alchemy.com/alchemy/introduction/getting-started) and [Etherscan]()

Copy `.env.sample` to `.env` and edit in your keys

Then:

```shell
npx hardhat run scripts/deploy.js --network arbitrummainnet
```

you can interact with this contract via `npx hardhat console` the same way as above, just substitute `--network rinkeby` for `--network localhost`

You can also use the `hardhat-etherscan-verify` plugin to verify the contract on Etherscan, which is required to be truly eleet

```
npx hardhat verify --network rinkeby <YOUR_CONTRACT_ADDRESS>
```



# more reading

* [Hardhat docs](https://hardhat.org/getting-started/)
* [OpenZeppelin docs](https://docs.openzeppelin.com/openzeppelin/)


## Testing on ropsten
npx hardhat console --network ropsten
