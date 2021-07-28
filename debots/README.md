# RT Voting Audit System 1.0 / DeBots

### Deploy DeBots

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
![](./qr-code.png)

Example address in `gql.custler.net`
```shell
tonos-cli --url https://gql.custler.net debot fetch 0:cf1dfd0b87492bb30bbbd70db84665ee3c383465e7c297df23704bcd9ddb9fd6
```

### Keys for testing

Action Team Member:

```
taxi once course van differ only clutch gossip text gaze giant egg
```

Member:

```
genius glance surge document blur object flash shine tourist disorder kiwi immense
```

### Structure of RT Voting Audit System 1.0 / DeBots

You can see the structure of RT Voting Audit System 1.0 / DeBots in [image](https://github.com/radianceteam/voting-audit/blob/master/debots/DeBot_menu_structure.png).