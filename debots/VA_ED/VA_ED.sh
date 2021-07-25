
#!/bin/bash
set -e

TOS=tonos-cli

# tos=./tonos-cli.exe
# if test -f "$tos"; then
#     echo "$tos exists."
# else
#     echo "$tos not found in current directory. Please, copy it here and rerun script."
#     exit
# fi    deboot  Debot

DEBOT_NAME=VA_ED

tondev sol compile $DEBOT_NAME.sol

marvin=0:deda155da7c518f57cb664be70b9042ed54a92542769735dfb73d3eef85acdaf
    # DST_ACCOUNT=<your addr>  
    # tonos-cli call "$Marvin" grant "{\"addr\":\"$DST_ACCOUNT\"}" --abi Marvin.abi.json
echo $TOS




giver=0:ed069a52b79f0bc21d13da9762a591e957ade1890d4a1c355e0010a8cb291ae4
echo $TOS
# function giver {
# $TOS --url https://net3.ton.dev call --abi ./giver.abi.json $giver pay "{\"addr\":\"$1\",\"count\":10000000000}"
# }

function giver {
tonos-cli --url https://gql.custler.net call $marvin grant "{\"addr\":\"$1\"}" --abi ../marvin.abi.json
}

function get_address {
echo $(cat log.log | grep "Raw address:" | cut -d ' ' -f 3)
}
function genaddr {
$TOS --url https://gql.custler.net genaddr $DEBOT_NAME.tvc $DEBOT_NAME.abi.json --genkey $DEBOT_NAME.keys.json > log.log
}

LOCALNET=http://127.0.0.1
DEVNET=https://gql.custler.net
MAINNET=https://main2.ton.dev
NETWORK=$DEVNET

echo GENADDR DEBOT
genaddr $DEBOT_NAME
DEBOT_ADDRESS=$(get_address)

echo ASK GIVER
giver $DEBOT_ADDRESS
DEBOT_ABI=$(cat $DEBOT_NAME.abi.json | xxd -ps -c 20000)
ICON_BYTES=$(base64 -w 0 ../icon.png)
ICON=$(echo -n "data:image/png;base64,$ICON_BYTES" | xxd -ps -c 20000)

ATDEBOTADDR=$(cat ../VA_AT/address.log)

echo DEPLOY DEBOT $DEBOT_ADDRESS
$TOS --url $NETWORK deploy $DEBOT_NAME.tvc "{}" --sign $DEBOT_NAME.keys.json --abi $DEBOT_NAME.abi.json
$TOS --url $NETWORK call $DEBOT_ADDRESS setABI "{\"dabi\":\"$DEBOT_ABI\",\"ATdebotAddress\":\"$ATDEBOTADDR\"}" --sign $DEBOT_NAME.keys.json --abi $DEBOT_NAME.abi.json
# $TOS --url $NETWORK call $DEBOT_ADDRESS setABI "{\"dabi\":\"$DEBOT_ABI\"}" --sign $DEBOT_NAME.keys.json --abi $DEBOT_NAME.abi.json
$TOS --url $NETWORK call $DEBOT_ADDRESS setIcon "{\"icon\":\"$ICON\"}" --sign $DEBOT_NAME.keys.json --abi $DEBOT_NAME.abi.json

# tonos-cli setABI "{\"dabi\":\"$debot_abi\",\"ATdebotAddress\":\"0:75e125c75928eb2b3216c713cc4b04deaf4cc3dea1fe1cdcafbbfd96116fb873\"}" --sign VA_ED.keys.json --abi VA_ED.abi.json

echo DONE
echo $DEBOT_ADDRESS > address.log
echo debot $DEBOT_ADDRESS 
# tonos-cli --url https://gql.custler.net debot fetch 0:d45c2c0f1ddf7ba7a4127b0b06ead538b3217dd8a013aa5dc40155cc2f888d05
