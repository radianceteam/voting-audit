pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
pragma AbiHeader time;

import "./Debot.sol";
import "./Terminal.sol";
import "./AddressInput.sol";
import "./Sdk.sol";
import "./Menu.sol";
import "./AmountInput.sol";
import "./ConfirmInput.sol";
import "./Transferable.sol";
import "./Upgradable.sol";

interface IDexRoot {

    function pairKeys() external returns (address[] pairKeys);
    function checkPubKey(uint256 pubkey) external returns (bool status, address dexclient);
}
interface IDexClient {
    function getPairData(address pairAddr) external returns (
 bool pairStatus,
 address pairRootA,
 address pairWalletA,
 address pairRootB,
 address pairWalletB,
 address pairRootAB,
 address curPair
    );
}

interface IDexRootTokenContract {
    function name() external returns (bytes name);
    function getTotalSupply(uint32 _answer_id) external returns (uint128 value0);
}

interface IDexTokenWallet {
    function balance(uint32 _answer_id) external returns (uint128 value0);
}

contract VotingAuditDebot is Debot {

    struct Pair {
        address pairAddress;
        bool pairStatus;
        bytes tokenName;
        mapping(address => WalletData) wallet;
        address pairRoot;
        uint128 totalSupply;
        address rootAddress;
    }

    struct WalletData {
        bytes tokenName;
        address walletAddress;
        uint128 walletBalance;
    }
    bytes m_icon;
    //mapping(address => DeAudit) deaudits
    //array [address] deauditsKeys
    string m_seedphrase;
    bool connected = false;
    uint256 m_masterPubKey;
    uint256 m_masterSecKey;
    address m_dexclient;
    address[] pairKeys;
    mapping(address => Pair) pairs;
    mapping(address => address) pairsWalletA;
    mapping(address => address) pairsRootA;
    address dexroot = address.makeAddrStd(0, 0xfcbf50fa63a7121565bb8dec1cbb7e75c8e7f7d1222cd4a827ffcb86fbb3fc42);
    function setIcon(bytes icon) public {
        require(msg.pubkey() == tvm.pubkey(), 100);
        tvm.accept();
        m_icon = icon;
    }

    /// @notice Entry point function for DeBot.
    function start() public functionID(0x01) override {

        //MenuItem("Get voting audits", "Get all voting audits from DeAuditRoot", tvm.functionId(connectorPairKeys)),

        Menu.select("Main menu", "Welcome to Radiance Voting Audit debot interface.", [
            MenuItem("Get all wallets", "Get all deployed wallets from DEX Client", tvm.functionId(connectorPairKeys)),
            MenuItem("Login or sign up", "Set your seed phrase", tvm.functionId(getFCAddressAndKeys)),
            MenuItem("DEV Show Data", "", tvm.functionId(showData)),
            MenuItem("Quit", "Log out and stop debot", 0)
        ]);
    }

    function showData(uint32 index) public {


        for(uint8 i = 0; i < pairKeys.length; i++){
            address clientWallet = pairKeys[i];
            Pair pair = pairs[clientWallet];
            address pairAddress = pair.pairAddress;
            bool pairStatus = pair.pairStatus;
            bytes tokenName = pair.tokenName;
            WalletData wallet = pair.wallet[pairAddress];

            address pairRoot = pair.pairRoot;
            uint128 walletBalance = wallet.walletBalance;
            address wlAddress = wallet.walletAddress;
            uint128 totalSupply = pair.totalSupply;

            Terminal.print(0, format("pairAddress {}\ntokenName {}\nwallet {}\npairRoot {}\nwalletBalance {}\ntotalSupply {}", pairAddress, tokenName, wlAddress, pairRoot, walletBalance, totalSupply));
        }
        start();
    }

    function connectorPairKeys(uint32 index) public {
        index = index;
        if(connected == false) {
            Terminal.print(0x02, "Please, enter you seed phrase.");
        }
        else {
            Terminal.print(0, "Please, wait...");
            getPairKeys();
        }
    }

    function getPairKeys() public {
        optional(uint256) pubkey;
        IDexRoot(dexroot).pairKeys{
            abiVer : 2,
            extMsg : true,
            sign : false,
            pubkey : pubkey,
            time : uint64(now),
            expire: 0x123,
            callbackId : tvm.functionId(pairKeysCallback),
            onErrorId : tvm.functionId(someError)
        }();
        Terminal.print(0, "getPairKeys");
    }

    function pairKeysCallback(address[] value0) public {
        pairKeys = value0;
        Terminal.print(0, "pairKeysCallback");
        for(uint8 i = 0; i < value0.length; i++){
            address curPairAddress = value0[i];
            Pair cp = pairs[curPairAddress];
            cp.pairAddress = curPairAddress;
            pairs[curPairAddress] = cp;

            callGetPairData(curPairAddress);
        }
    }

    function callGetPairData(address curPairAddress) public {
        Terminal.print(0, "callGetPairData");
        optional(uint256) pubkey;
        IDexClient(m_dexclient).getPairData{
            abiVer : 2,
            extMsg : true,
            sign : false,
            pubkey : pubkey,
            time : uint64(now),
            expire: 0x123,
            callbackId : tvm.functionId(pairDataCallback),
            onErrorId : tvm.functionId(someError)
        }(curPairAddress);
    }

    function pairDataCallback(
        bool pairStatus,
        address pairRootA,
        address pairWalletA,
        address pairRootB,
        address pairWalletB,
        address pairRootAB,
        address curPair)
    public {
        Terminal.print(0, "pairDataCallback");
        Pair cp = pairs[curPair];
        cp.pairStatus = pairStatus;
        cp.pairRoot = pairRootA;
        WalletData wl = cp.wallet[curPair];

        wl.walletAddress = pairWalletA;
        pairs[curPair] = cp;
        Terminal.print(0, format("{},{},{}", pairRootA, pairWalletA, curPair));
        getBalance(pairWalletA);
        getName(pairRootA);
        start();
    }

    function getBalance(address pairWalletA) public {
        Terminal.print(0, "getBalance");
        optional(uint256) pubkey;
        pairsWalletA[pairWalletA] = m_dexclient;
        IDexTokenWallet(pairWalletA).balance{
            abiVer : 2,
            extMsg : true,
            sign : false,
            pubkey : pubkey,
            time : uint64(now),
            expire: 0x123,
            callbackId : tvm.functionId(walletBalanceCallback),
            onErrorId : tvm.functionId(someError)
        }(0);
    }

    function walletBalanceCallback(uint128 value0) public {
        //Terminal.print(0, "walletBalanceCallback");
        Terminal.print(0, format("balance {}", value0));
        address clientWallet = pairsWalletA[msg.sender];

        Pair cp = pairs[clientWallet];
        WalletData wl = cp.wallet[clientWallet];

        wl.walletBalance = value0;
        cp.wallet[clientWallet] = wl;
        pairs[clientWallet] = cp;
    }

    function getName(address pairRootA) public {
        Terminal.print(0, "getName");

        pairsRootA[pairRootA] = m_dexclient;
        optional(uint256) pubkey;
        IDexRootTokenContract(pairRootA).name{
            abiVer : 2,
            extMsg : true,
            sign : false,
            pubkey : pubkey,
            time : uint64(now),
            expire: 0x123,
            callbackId : tvm.functionId(tokenNameCallback),
            onErrorId : tvm.functionId(someError)
        }();
        //getTotalSupply(pairRootA);
    }
    function tokenNameCallback(bytes name) public {
        //Terminal.print(0, "tokenNameCallback");
        Terminal.print(0, format("name {}", name));
        address clientWallet = pairsWalletA[msg.sender];

        Pair cp = pairs[clientWallet];
        WalletData wl = cp.wallet[clientWallet];

        wl.tokenName = name;
        cp.wallet[clientWallet] = wl;
        pairs[clientWallet] = cp;
    }
    function getTotalSupply(address pairRootA) public {
        Terminal.print(0, "getTotalSupply");
        optional(uint256) pubkey;
        IDexRootTokenContract(pairRootA).getTotalSupply{
            abiVer : 2,
            extMsg : true,
            sign : false,
            pubkey : pubkey,
            time : uint64(now),
            expire: 0x123,
            callbackId : tvm.functionId(totalSupplyCallback),
            onErrorId : tvm.functionId(someError)
        }(0);
    }




    function totalSupplyCallback(uint128 value0) public {
        //Terminal.print(0, "totalSupplyCallback");
        address clientWallet = msg.sender;

        Pair cp = pairs[clientWallet];
        cp.totalSupply = value0;
        pairs[clientWallet] = cp;

        printPair(clientWallet);
    }


    function printPair(address clientWallet) public {
        Terminal.print(0, "printPair");
        Pair pair = pairs[clientWallet];
        address pairAddress = pair.pairAddress;
        bool pairStatus = pair.pairStatus;
        bytes tokenName = pair.tokenName;
        WalletData wallet = pair.wallet[pairAddress];
        address pairRoot = pair.pairRoot;

        uint128 walletBalance = wallet.walletBalance;
        uint128 totalSupply = pair.totalSupply;

        string str = "Pair address: ";
        str.append(format("{}", pairAddress));

        str.append("\n Pair status: ");
        if(pairStatus == false) {
            str.append("Unavailable");
        }
        else {
            str.append("Available");
        }

        str.append("\n Token name: ");
        str.append(string(tokenName));

        str.append("\n Wallet balance: ");
        str.append(format("{}", walletBalance));

        str.append("\n Total supply: ");
        str.append(format("{}", totalSupply));

        Terminal.print(0, str);
        start();
    }

    function someError(uint32 sdkError, uint32 exitCode) public {
        Terminal.print(0, format("sdkError: {}\nexitCOde:{}", sdkError, exitCode));
        Terminal.print(0x02, "Back to menu...");
    }

    function toStartFromMenu(uint32 index) public functionID(0x02) {
        index = index;
        Terminal.print(0x01, "");
    }

        function getFCAddressAndKeys(uint32 index) public {
    Menu.select("Login or sign up","",[
        MenuItem("Generate a seed phrase for me", "New seed phrase", tvm.functionId(menuGenSeedPhrase)),
        MenuItem("I have the seed phrase", "Enter seed phrase", tvm.functionId(menuEnterSeedPhrase)),
        MenuItem("Return to main menu", "Go back", 0x02)
    ]);
    }

    function menuGenSeedPhrase(uint32 index) public {
        Sdk.mnemonicFromRandom(tvm.functionId(showMnemonic),1,12);
    }

    function showMnemonic(string phrase) public {
        string str = "Generated seed phrase > ";
        str.append(phrase);
        str.append("\nWarning! Please don't forget it!");
        Terminal.print(0, str);
        getFCAddressAndKeys(1);
    }

    function menuEnterSeedPhrase(uint32 index) public {
        Terminal.input(tvm.functionId(checkSeedPhrase),"Please, enter your seed phrase (if you do not have it, then go back to the previous menu and generate)", false);
    }

    function checkSeedPhrase(string value) public {
        m_seedphrase = value;
        Sdk.mnemonicVerify(tvm.functionId(verifySeedPhrase),m_seedphrase);
    }

    function verifySeedPhrase(bool valid) public {
        if (valid) {
            getMasterKeysFromMnemonic(m_seedphrase);
        } else {
            Terminal.print(0, "Error: not valid seed phrase! (try to enter it without quotes, space before and after seed phrase or generate a new one)");
            getFCAddressAndKeys(1);
        }
    }

    function getMasterKeysFromMnemonic(string phrase) public {
        Sdk.hdkeyXprvFromMnemonic(tvm.functionId(getMasterKeysFromMnemonicStep1),phrase);
    }

    function getMasterKeysFromMnemonicStep1(string xprv) public {
        string path = "m/44'/396'/0'/0/0";
        Sdk.hdkeyDeriveFromXprvPath(tvm.functionId(getMasterKeysFromMnemonicStep2), xprv, path);
    }

    function getMasterKeysFromMnemonicStep2(string xprv) public {
        Sdk.hdkeySecretFromXprv(tvm.functionId(getMasterKeysFromMnemonicStep3), xprv);
    }

    function getMasterKeysFromMnemonicStep3(uint256 sec) public {
        Sdk.naclSignKeypairFromSecretKey(tvm.functionId(getMasterKeysFromMnemonicStep4), sec);
    }

    function getMasterKeysFromMnemonicStep4(uint256 sec, uint256 pub) public {
        m_masterPubKey = pub;
        m_masterSecKey = sec;
        optional(uint256) pubkey;
        IDexRoot(dexroot).checkPubKey{
            abiVer : 2,
            extMsg : true,
            sign : false,
            pubkey : pubkey,
            time : uint64(now),
            expire: 0x123,
            callbackId : tvm.functionId(checkPubKeyCallback),
            onErrorId : tvm.functionId(someError)
        }(m_masterPubKey);
        Terminal.print(tvm.functionId(VotingAuditDebot.start),"Your seed phrase has been verified. Check DEX Client for existing.");

    }

    function checkPubKeyCallback(bool status, address dexclient) public {
        if (status) {
            connected = true;
            m_dexclient = dexclient;
            Terminal.print(tvm.functionId(VotingAuditDebot.start),"Successfully! DEX Client connected. Back to main menu...");
        } else {
            Terminal.print(tvm.functionId(VotingAuditDebot.start), "You don't have DEX Client. Please, deploy him on trade.defispace.com");
        }
    }



    /// @notice Returns Metadata about DeBot.
    function getDebotInfo() public functionID(0xDEB) override view returns(
    string name, string version, string publisher, string caption, string author,
    address support, string hello, string language, string dabi, bytes icon
    ) {
    name = "Radiance Voting Audit DeBot";
    version = "0.1.0";
    publisher = "Radiance Team";
    caption = "DeBot for DeAudit by Radiance Team";
    author = "Radiance Team";
    support = address.makeAddrStd(0, 0x841288ed3b55d9cdafa806807f02a0ae0c169aa5edfe88a789a6482429756a94);
    hello = "That's debot for Voting Audit. Developed by Radiance Team";
    language = "en";
    dabi = m_debotAbi.get();
    icon = m_icon;
    }

    function getRequiredInterfaces() public view override returns (uint256[] interfaces) {
    return [ Terminal.ID ];
    }

}