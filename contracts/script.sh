#!/bin/bash

# echo "compile *.sol files"
# tondev sol compile DeAuditRoot.sol && tondev sol compile DeAudit.sol && tondev sol compile DeAuditData.sol && tondev sol compile Act4.sol && tondev sol compile Participant.sol && tondev sol compile RootTokenContract.sol && tondev sol compile TONTokenWallet.sol


# echo "wrap *.abi.json to *.js"
# tondev js wrap DeAuditRoot.abi.json -o DeAuditRoot.js &&
# tondev js wrap DeAudit.abi.json -o DeAudit.js &&
# tondev js wrap DeAuditData.abi.json -o DeAuditData.js &&
# tondev js wrap Act4.abi.json -o Act4.js &&
# tondev js wrap Participant.abi.json -o Participant.js &&
# tondev js wrap RootTokenContract.abi.json -o RootTokenContract.js &&
# tondev js wrap TONTokenWallet.abi.json -o TONTokenWallet.js

echo "tvm_linker decode"
/home/yaroslav/.tondev/solidity/tvm_linker decode --tvc DeAudit.tvc | grep code: | cut -c 8- > DeAudit.txt &&
/home/yaroslav/.tondev/solidity/tvm_linker decode --tvc DeAuditData.tvc | grep code: | cut -c 8- > DeAuditData.txt &&
/home/yaroslav/.tondev/solidity/tvm_linker decode --tvc Act4.tvc | grep code: | cut -c 8- > Act4.txt &&
/home/yaroslav/.tondev/solidity/tvm_linker decode --tvc Participant.tvc | grep code: | cut -c 8- > Participant.txt &&
/home/yaroslav/.tondev/solidity/tvm_linker decode --tvc RootTokenContract.tvc | grep code: | cut -c 8- > RootTokenContract.txt &&
/home/yaroslav/.tondev/solidity/tvm_linker decode --tvc TONTokenWallet.tvc | grep code: | cut -c 8- > TONTokenWallet.txt

tvm_linker decode --tvc VA_ED.tvc | grep code: | cut -c 8- > VA_ED.txt

# tondev sol compile DeAuditData.sol && tondev js wrap DeAuditData.abi.json -o DeAuditData.js && sudo /home/yaroslav/.tondev/solidity/tvm_linker decode --tvc DeAuditData.tvc | grep code: | cut -c 8- > DeAuditData.txt
