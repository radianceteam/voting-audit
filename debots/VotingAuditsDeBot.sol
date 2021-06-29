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

contract VotingAuditDebot is Debot {

    bytes m_icon;
    //mapping(address => DeAudit) deaudits
    //array [address] deauditsKeys
    string m_seedphrase;
    uint256 m_masterPubKey;
    uint256 m_masterSecKey;

    function setIcon(bytes icon) public {
        require(msg.pubkey() == tvm.pubkey(), 100);
        tvm.accept();
        m_icon = icon;
    }

    /// @notice Entry point function for DeBot.
    function start() public functionID(0x01) override {
        Menu.select("Main menu", "Welcome to Radiance Voting Audit debot interface.", [
            MenuItem("Get voting audits", "Get all voting audits from DeAuditRoot", 0),
            MenuItem("Login or sign up", "Set your seed phrase", tvm.functionId(getFCAddressAndKeys)),
            MenuItem("Quit", "Log out and stop debot", 0)
        ]);
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
        Terminal.print(tvm.functionId(VotingAuditDebot.start),"Successfully! Your seed phrase has been verified and recorded.");
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