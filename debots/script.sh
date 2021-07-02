
#!/bin/bash
set -e


tos=./tonos-cli.exe
if test -f "$tos"; then
    echo "$tos exists."
else
    echo "$tos not found in current directory. Please, copy it here and rerun script."
    exit
fi

DEBOT_NAME=VotingAuditsDeBot
giver=0:ed069a52b79f0bc21d13da9762a591e957ade1890d4a1c355e0010a8cb291ae4
function giver {
./tonos-cli --url https://net.ton.dev call --abi ./giver.abi.json $giver pay "{\"addr\":\"$1\",\"count\":10000000000}"
}
function get_address {
echo $(cat log.log | grep "Raw address:" | cut -d ' ' -f 3)
}
function genaddr {
./tonos-cli genaddr $1.tvc $1.abi.json --genkey $1.keys.json > log.log
}

LOCALNET=http://127.0.0.1
DEVNET=https://net.ton.dev
MAINNET=https://main2.ton.dev
NETWORK=$DEVNET

echo GENADDR DEBOT
genaddr $DEBOT_NAME
DEBOT_ADDRESS=$(get_address)

echo ASK GIVER
giver $DEBOT_ADDRESS
DEBOT_ABI=$(cat $DEBOT_NAME.abi.json | xxd -ps -c 20000)
ICON_BYTES=$(base64 -w 0 icon.png)
ICON=$(echo -n "data:image/png;base64,$ICON_BYTES" | xxd -ps -c 20000)

echo DEPLOY DEBOT $DEBOT_ADDRESS
$tos --url $NETWORK deploy $DEBOT_NAME.tvc "{}" --sign $DEBOT_NAME.keys.json --abi $DEBOT_NAME.abi.json
$tos --url $NETWORK call $DEBOT_ADDRESS setABI "{\"dabi\":\"$DEBOT_ABI\"}" --sign $DEBOT_NAME.keys.json --abi $DEBOT_NAME.abi.json
$tos --url $NETWORK call $DEBOT_ADDRESS setIcon "{\"icon\":\"$ICON\"}" --sign $DEBOT_NAME.keys.json --abi $DEBOT_NAME.abi.json

echo DONE
echo $DEBOT_ADDRESS > address.log
echo debot $DEBOT_ADDRESS