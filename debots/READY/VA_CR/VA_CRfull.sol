pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
pragma AbiHeader time;

import "./Debot.sol";
import "../Terminal.sol";
import "../AddressInput.sol";
import "../Sdk.sol";
import "../Menu.sol";
import "../ConfirmInput.sol";

interface IDeAuditRoot {
    function getParticipantAddress(uint32 _answer_id,uint256 pubkeyParticipant) external returns (address value0);
    function setGiver(address giverAddr) external;
    function deployParticipant(uint256 pubkey) external returns (address deployedAddress,bool statusDeploy);
    function balanceOf() external returns (mapping(address => uint128) value0);
    function checkPubKey(uint256 pubkey) external returns (bool status, address participant);
    function keysDeAudit() external returns (address[] keysDeAudit);
    function isActionTeamMember(address addressParticipant) external returns (bool status);
}

interface IDeAudit {
    function getDetails4Debot() external returns (
        uint32 sequentialNumber4Debot,
        bytes  name4Debot,
        address rootDeAudit4Debot,
        address dataDeAudit4Debot,
        address tokenDeAudit4Debot,
        uint256 timeStart4Debot,
        uint256 colPeriod4Debot,
        uint256 valPeriod4Debot,
        uint128 colStake4Debot,
        uint128 valStake4Debot
    );
}

interface IDeAuditData {
    function name() external returns (bytes name);
}

interface IVotingAuditDebotACTMmenu {
    function preStartForCore(address partic) external;
}
interface ICLdebot {
    function preStart(address partic) external;
}
interface IVRdebot {
    function invokeValidatorDebot(address curPart) external;
}
interface IRootTokenContract {
    function getTotalSupply(uint32 _answer_id) external returns(uint128 value0);
}
interface IParticipant {
    function getPublishedData() external returns (
        bytes pName,
        bytes pPhotoLink,
        bytes pDataLink,
        address pAddress,
        uint128 pBalance
    );
    function publishData(bytes publishName, bytes publishPhotoLink, bytes publishDataLink) external returns (uint8 status);
}

contract VotingAuditDebot is Debot {

    address DeAuditRoot = address.makeAddrStd(0, 0xeb29541ddefbe0d27642d031c2831b7f573952f3a002fb5b3a9308f7362c225c);
    address m_participant;
    bytes m_icon;

    string m_seedphrase;

    uint256 m_masterPubKey;
    uint256 m_masterSecKey;

    mapping(address => uint128) balances;

    mapping(address => curDA) DeAudits;
    address[] keysDeAuditD;

    struct curDA {
        uint32 sequentialNumber;
        bytes name;
        address rootDeAudit;
        address dataDeAudit;
        address tokenDeAudit;
        uint256 timeStart;
        uint256 colPeriod;
        uint256 valPeriod;
        uint128 colStake;
        uint128 valStake;
        uint128 totalSupply;
        bytes DADname;
    }

    mapping(uint256 => VoteD) voteD;
    uint256[] voteKeysD;

    struct VoteD {
        address initiator;
        uint256 startTime;
        uint256 duration;
        uint8 vcms;
        uint32 yesCount;
        uint32 noCount;
        TvmCell data;
        uint8 actionType;
        bool completed;
    }

    function setIcon(bytes icon) public {
        require(msg.pubkey() == tvm.pubkey(), 100);
        tvm.accept();
        m_icon = icon;
    }

uint128 userBalance;
    function preSstart(address curPart) public {
        m_participant = curPart;
        Sdk.getBalance(tvm.functionId(getBalanc), m_participant);

    }
    function getBalanc(uint128 nanotokens) public {
        userBalance = nanotokens;
        membersMenu();
    }

    function start() public functionID(0x01) override {

        optional(uint256) pubkey;
        IDeAuditRoot(DeAuditRoot).keysDeAudit{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCgetDeauditAddresses),
        onErrorId : tvm.functionId(someError)
        }();
    }
    function SCgetDeauditAddresses(address[] keysDeAudit) public {

        keysDeAuditD = keysDeAudit;

        for(uint8 i = 0; i < keysDeAudit.length; i++){
            deauditsCaller(keysDeAudit[i]);
        }
        Sdk.getBalance(tvm.functionId(getBafterStart), m_participant);

    }
    function getBafterStart(uint128 nanotokens) public {
        userBalance = nanotokens;
        mainMenu();
    }
    function deauditsCaller(address curDeAudit) public {

        optional(uint256) pubkey;
        IDeAudit(curDeAudit).getDetails4Debot{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCgetDAstruct),
        onErrorId : tvm.functionId(someError)
        }();

    }

    function SCgetDAstruct(
        uint32 sequentialNumber4Debot,
        bytes  name4Debot,
        address rootDeAudit4Debot,
        address dataDeAudit4Debot,
        address tokenDeAudit4Debot,
        uint256 timeStart4Debot,
        uint256 colPeriod4Debot,
        uint256 valPeriod4Debot,
        uint128 colStake4Debot,
        uint128 valStake4Debot
    ) public {
        curDA cp = DeAudits[msg.sender];
        cp.sequentialNumber = sequentialNumber4Debot;
        cp.name = name4Debot;
        cp.rootDeAudit = rootDeAudit4Debot;
        cp.dataDeAudit = dataDeAudit4Debot;
        cp.tokenDeAudit = tokenDeAudit4Debot;
        cp.timeStart = timeStart4Debot;
        cp.colPeriod = colPeriod4Debot;
        cp.valPeriod = valPeriod4Debot;
        cp.colStake = colStake4Debot;
        cp.valStake = valStake4Debot;
        DeAudits[msg.sender] = cp;
    }


    /// @notice Entry point function for DeBot.
    function preStart(uint32 index) public {
        mainMenu();
    }

    function mainMenu() public {
        Menu.select("Welcome to Radiance Voting Audit debot interface.", "", [
            MenuItem("Voting audits", "", tvm.functionId(DAmenu)),
            MenuItem("Login", "", tvm.functionId(menuEnterSeedPhrase)),
            MenuItem("Sign up", "", tvm.functionId(menuGenSeedPhrase)),
            MenuItem("Quit", "", 0)
            ]);
    }

    function DAmenu(uint32 index) public {
        MenuItem[] m_menu;
        for(uint8 i = 0; i < keysDeAuditD.length; i++){

            address curK = keysDeAuditD[i];


            curDA cp = DeAudits[curK];
            string status;
            uint256 time = uint256(now);

                if(time < cp.timeStart){
                    status = "not started";
                }else if(time > cp.timeStart && time < cp.colPeriod){
                    status = "between start and col period";
                }else if(time > cp.colPeriod && time < cp.valPeriod){
                    status = "between col and val period";
                }else{
                    status = "ended";
                }

                string curVdata = format("=======\nDAname: {}, status:{}\n\n",cp.name, status);
                m_menu.push(MenuItem(curVdata,"",tvm.functionId(showVotingAuditss)));
            }

            m_menu.push(MenuItem("Back to voting list menu", "", tvm.functionId(preStart)));
            Menu.select("Choose voting:", "",m_menu);
    }

    address cureDA;
    address curDataDeAudit;
    address curTokenDeAudit;

    function showVotingAuditss(uint32 index) public {
        cureDA = keysDeAuditD[index];
        curDA cr = DeAudits[cureDA];
        curDataDeAudit = cr.dataDeAudit;
        curTokenDeAudit = cr.tokenDeAudit;

        optional(uint256) pubkey;
        IRootTokenContract(curTokenDeAudit).getTotalSupply{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCgetTS),
        onErrorId : tvm.functionId(someError)
        }(0);
    }

    function SCgetTS(uint128 value0) public {
        curDA cr = DeAudits[cureDA];
        cr.totalSupply = value0;
        DeAudits[cureDA] = cr;
        getFromDAD();
    }

    function getFromDAD() public {
        optional(uint256) pubkey;
        IDeAuditData(curDataDeAudit).name{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCgetFromDAD),
        onErrorId : tvm.functionId(someError)
        }();
    }
    function SCgetFromDAD(bytes name)public{
        curDA cr = DeAudits[cureDA];
        cr.DADname = name;
        DeAudits[cureDA] = cr;
        showCurDAD();
    }
    function showCurDAD() public {
        curDA cr = DeAudits[cureDA];
        Terminal.print(0,format(" - {} - \ncr.seqno: {} cr.timeStart: {} cr.colPeriod: {} cr.valPeriod: {} colStake: {} valStake: {} cr.totalSupply: {} cr.DADname: {}",
            cr.sequentialNumber,
            cr.name,
            cr.timeStart,
            cr.colPeriod,
            cr.valPeriod,
            cr.colStake,
            cr.valStake,
            cr.totalSupply,
            cr.DADname));
        DAmenu(0);
    }
    function menuGenSeedPhrase(uint32 index) public {
        Sdk.mnemonicFromRandom(tvm.functionId(showMnemonic),1,12);
    }

    function showMnemonic(string phrase) public {
        Terminal.print(0, format("Generated seed phrase > {}\nPlease don't forget it!",phrase));
        menuEnterSeedPhrase(1);
    }

    function menuEnterSeedPhrase(uint32 index) public {
        Terminal.input(tvm.functionId(checkSeedPhrase),"Please, enter your seed phrase:", false);
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
            mainMenu();
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
        IDeAuditRoot(DeAuditRoot).checkPubKey{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCcheckPubKey),
        onErrorId : tvm.functionId(someError)
        }(m_masterPubKey);

    }
    function SCcheckPubKey(bool status, address participant) public {
        if(status){
            Terminal.print(0,"Checked success");
            m_participant = participant;
            membersMenu();
        }else{
            ConfirmInput.get(tvm.functionId(checkDeployAnswer), "You do not have deployed participant, would you like to deploy?");
        }
    }
    function checkDeployAnswer(bool value) public {
        if(value){
            deploy_genAddr();
        }else{
            start();
        }
    }
    function deploy_genAddr() public {
    optional(uint256) pubkey;
        IDeAuditRoot(DeAuditRoot).getParticipantAddress{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(getParticipantAddressCallback),
        onErrorId : tvm.functionId(someError)
        }(0,m_masterPubKey);
    }

    function getParticipantAddressCallback(address value0) public {
        m_participant = value0;
        Terminal.print(0,format("Success, your address {}, now set your giver address and transfer 10 ton to votingRoot as registration fee: {}",m_participant,DeAuditRoot));
        AddressInput.get(tvm.functionId(onGetGiverAddress), "Enter giver address");
    }

    address giver;
    function onGetGiverAddress(address value) public {
        giver = value;
        optional(uint256) pubkey;
        IDeAuditRoot(DeAuditRoot).setGiver{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : 0,
        onErrorId : tvm.functionId(someError)
        }(giver);
        setGiverSuccess();
    }
    function setGiverSuccess() public {
        Menu.select("Checking registration fee payed","",[
            MenuItem("Check pls", "", tvm.functionId(getBalanceOf)),
            MenuItem("Return to main menu", "", tvm.functionId(mainMenu))
            ]);
    }
    function getBalanceOf(uint32 index) public {
        optional(uint256) pubkey;
        IDeAuditRoot(DeAuditRoot).balanceOf{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(getBalanceOfSuccess),
        onErrorId : tvm.functionId(someError)
        }();
    }

bool amot;

    function getBalanceOfSuccess(mapping(address => uint128) value0) public {
        balances = value0;

        amot = balances.exists(giver);

        if(amot){
            Terminal.print(0,"true - deploy call now");
            deployCall();
        }else{
            Terminal.print(0,"balanceOf not filled with your giver yet, try again");
            setGiverSuccess();
        }

    }

    function deployCall() public {
        optional(uint256) pubkey;
        IDeAuditRoot(DeAuditRoot).deployParticipant{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(deployParticipantSuccess),
        onErrorId : tvm.functionId(someError)
        }(m_masterPubKey);
    }
    address dp;
    function deployParticipantSuccess(address deployedAddress,bool statusDeploy) public {
        dp = deployedAddress;
        Terminal.print(0,format("Success deployed."));
        membersMenu();
    }

    function preMembersMenu(uint32 index) public {
        membersMenu();
    }
    function membersMenu() public {
        Terminal.print(0,format("Your balance: {}, your address: {}",userBalance, m_participant));

        Menu.select("Action Team menu", "", [
            MenuItem("Display user data", "",tvm.functionId(showUserData)),
            MenuItem("Action team", "",tvm.functionId(isActionTeamMemberCheck)),
            MenuItem("Collator", "", tvm.functionId(goToCLdebot)),
            MenuItem("Validator", "", tvm.functionId(onValidation)),
            MenuItem("return to main menu", "", tvm.functionId(mainMenu)),
            MenuItem("Quit", "", 0)
            ]);
    }

    function showUserData(uint32 index) public {
        optional(uint256) pubkey;
        IParticipant(m_participant).getPublishedData{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCshowUserData),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function SCshowUserData(
        bytes pName,
        bytes pPhotoLink,
        bytes pDataLink,
        address pAddress,
        uint128 pBalance
    )  public {
        Terminal.print(0,format(" - Your name: {}\nphoto link: {}\ndata link: {}\nyour address: {}\n balance: {} - \n",pName,pPhotoLink,pDataLink,pAddress,pBalance));

        MenuItem[] m_menu;
        m_menu.push(MenuItem("Edit user data", "", tvm.functionId(onEditUserData)));
        m_menu.push(MenuItem("Return to menu", "", tvm.functionId(preMembersMenu)));
        Menu.select("User data menu: ", "",m_menu);
    }

    function onEditUserData(uint32 index) public {
        Terminal.input(tvm.functionId(onSetName), "Your name?",false);
    }
    bytes userName;
    function onSetName(string value) public {
        userName = bytes(value);

        Terminal.input(tvm.functionId(onAddPhotoLink), "Add your photo link:",false);
    }
    bytes PhotoLink;
    function onAddPhotoLink(string value) public {
        PhotoLink = bytes(value);
        Terminal.input(tvm.functionId(onAddPublishedDataLink), "Add your published data link:",false);
    }
    bytes PublishedDataLink;
    function onAddPublishedDataLink(string value) public {
        PublishedDataLink = bytes(value);

        Terminal.print(0,format("Your name: {}\nphoto link: {}\npublished data link: {}", userName,PhotoLink,PublishedDataLink));

        optional(uint256) pubkey;
        IParticipant(m_participant).publishData{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCcall),
        onErrorId : tvm.functionId(someError)
        }(userName,PhotoLink,PublishedDataLink);
    }

    function onValidation(uint32 index) public {
        IVRdebot(m_VA_VRaddr).invokeValidatorDebot(m_participant);
    }

    function goToCLdebot(uint32 index) public {
        ICLdebot(m_CLdebAddress).preStart(m_participant);
    }

    function isActionTeamMemberCheck(uint32 index) public {

        optional(uint256) pubkey;
        IDeAuditRoot(DeAuditRoot).isActionTeamMember{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCcheckACTM),
        onErrorId : tvm.functionId(someError)
        }(m_participant);

    }
    function SCcheckACTM(bool status) public {
        if(status){
            enterATMdebot();
        }else{
            Terminal.print(0,"You have no permission");
            membersMenu();
        }
    }

    function enterATMdebot() public {
        IVotingAuditDebotACTMmenu(m_ATdebAddress).preStartForCore(m_participant);
    }

//
// utils
//
    function SCcall(uint8 status) public {
        if(status == 1){
            Terminal.print(0, "Success, your message sended to blockchain");
            membersMenu();
        }else{
            Terminal.print(0, "Error, try again");
            membersMenu();
        }
    }
    function someError(uint32 sdkError, uint32 exitCode) public {
        Terminal.print(0, format("sdkError: {}\nexitCOde:{}", sdkError, exitCode));
        Terminal.print(0x01, "Back to menu...");
    }
    /// @notice Returns Metadata about DeBot.
    function getDebotInfo() public functionID(0xDEB) override view returns(
        string name, string version, string publisher, string caption, string author,
        address support, string hello, string language, string dabi, bytes icon
    ) {
        name = "Radiance Voting Audit DeBot - Core";
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


