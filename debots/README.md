# RT Debot Voting System 1.0

## Deploy DeBots

First install dependencies:

* npm install

Then run script:

* node RTvotingSystemDebots-deploy.js

After script will be finished, it will display the command to start debot in terminal with Core debot address.
You can use this address to start debot in another app such TON Surf or custom debot browser.

To change network, set `networkSelector` in `RTvotingSystemDebots-deploy.js:8`

* const networkSelector = 1;

### Examples

Example address in `net.ton.dev`:
```shell
tonos-cli debot fetch 0:fca49c6cf57f1654988f944f2e9874cb3c86a33dabbc7c3948326fb912dedefa
```

Example address in `gql.custler.net`
```shell
tonos-cli --url https://gql.custler.net debot fetch 0:69fa78c6ff07aa8ad074627e9910e3e5955826f97f6e833e09628223ec4d30c7
```

### RT DeVot Voting System scheme

You can see the structure of RT DeBot Voting System 1.0 in [image](https://github.com/radianceteam/voting-audit/blob/master/debots/DeBot_menu_structure.png).