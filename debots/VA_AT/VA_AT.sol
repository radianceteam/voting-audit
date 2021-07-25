pragma ton-solidity >=0.45.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
pragma AbiHeader time;

import "../Debot.sol";
import "../Terminal.sol";
import "../AddressInput.sol";
import "../Menu.sol";

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
        uint128 valStake4Debot);
}

interface IDeAuditRoot {
    function getParticipantAddress(uint32 _answer_id,uint256 pubkeyParticipant) external returns (address value0);
    function keysDeAuditData() external returns (address[] keysDeAuditData);
    function keysDeAudit() external returns (address[] keysDeAudit);
    function getDeAuditParam4Debot(address keysDeAuditDataCurrent) external returns (
        address creator4Debot,
        bytes name4Debot,
        uint256 timeStart4Debot,
        uint256 colPeriod4Debot,
        uint256 valPeriod4Debot,
        uint256 colStake4Debot,
        uint256 valStake4Debot,
        address curDADkeyD
    );
}
interface IDeAuditData {
    function initiator() external returns (address initiator);
    function idDeAuditData() external returns (uint256 idDeAuditData);
    function name() external returns (bytes name);
}

interface IParticipant {
    function initVoteAddActionTeamMember(address participantAddr, uint128 grams) external;
    function initVoteRemoveActionTeamMember(address participantAddr, uint128 grams) external;
    function createDeAuditData(bytes nameDeAuditData,
        uint256 timeStart,
        uint256 colPeriod,
        uint256 valPeriod,
        uint128 colStake,
        uint128 valStake,
        uint128 grams) external;
    function initVoteDeAudut(address addrDeAuditData, uint128 grams) external;
    function sendTrigger(address addrDeAudit, address addrAct4, uint128 grams) external;
}

interface IVotingAuditDebot {
    function preSstart(address m_participantC) external;
}
interface IVotingAuditDebotVL {
    function prestart(address m_participantC) external;
}
interface IVotingAuditDebotED {
    function startGlobal(address partAddress, address choosenDAD) external;
}

contract VotingAuditDebotACTMmenu is Debot {

    address m_VotingAuditDebotVLaddress;
    address m_coreDebot;
    address m_EditDebot;

    uint128 GRAMS_TRIGGER = 1600000000;
    uint128 GRAMS_INIT_VOTE = 600000000;
    uint128 GRAMS_CREATE_DEAUDIT = 1100000000;

    address DeAuditRoot = address.makeAddrStd(0, 0xaaa43758f17b6ad589924ed8dad5b7bbfcfbdbb6661135944f435b93ae542efe);
    address m_participant = address.makeAddrStd(0, 0x4d872247fc37edb5f59dde179f3c698a6b22e58ac9defcba278180c026844a7b);

    bytes m_icon;

    mapping(address => DADdata) dadData;
    address[] public keysDeAuditDataD;

    struct DADdata {
        uint256 idDeAuditData;
        address initiator;
        bytes name;
    }

/*
    Here is deadits data
*/
    mapping(address => DetailsParamDeAudit) public paramDeAuditDeAudit;
    address[] public keysDeAuditD;

    struct DetailsParamDeAudit {
        uint32 sequentialNumber;
        bytes name;
        address rootDeAudit;
        address dataDeAudit;
        address tokenDeAudit;
        uint256 timeStart;
        uint256 colPeriod;
        uint256 valPeriod;
        uint256 colStake;
        uint256 valStake;
    }

    function setIcon(bytes icon) public {
        require(msg.pubkey() == tvm.pubkey(), 100);
        tvm.accept();
        m_icon = icon;
    }
    function preStart(address partic) public {
        m_participant = partic;
        fetchDAD();
        atmenu();
    }
    function pstart(uint32 index) public {
        fetchDAD();
        atmenu();
    }

    function start() public functionID(0x01) override {
        fetchDAD();
        fetchDA();
        atmenu();
    }
/*
    FETCH DA
*/
    function fetchDA() public {
        optional(uint256) pubkey;
        IDeAuditRoot(DeAuditRoot).keysDeAudit{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCfetchDA),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function SCfetchDA(address[] keysDeAudit) public {
        keysDeAuditD = keysDeAudit;

        for(uint8 i = 0; i < keysDeAuditD.length; i++){
            address curDA = keysDeAuditD[i];
            getDAdata(curDA);
        }
    }

    function getDAdata(address curDA) public {

        optional(uint256) pubkey;
        IDeAudit(curDA).getDetails4Debot{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCgetDAdata),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function SCgetDAdata(
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
        DetailsParamDeAudit dd = paramDeAuditDeAudit[msg.sender];
        dd.sequentialNumber = sequentialNumber4Debot;
        dd.name = name4Debot;
        dd.rootDeAudit = rootDeAudit4Debot;
        dd.dataDeAudit = dataDeAudit4Debot;
        dd.tokenDeAudit = tokenDeAudit4Debot;
        dd.timeStart = timeStart4Debot;
        dd.colPeriod = colPeriod4Debot;
        dd.valPeriod = valPeriod4Debot;
        dd.colStake = colStake4Debot;
        dd.valStake = valStake4Debot;
        paramDeAuditDeAudit[msg.sender] = dd;
    }
/*
    Fetch dad
*/
    function fetchDAD() public {
        optional(uint256) pubkey;
        IDeAuditRoot(DeAuditRoot).keysDeAuditData{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCfetchDAD),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function SCfetchDAD(address[] keysDeAuditData) public {
        keysDeAuditDataD = keysDeAuditData;

        for(uint8 i = 0; i < keysDeAuditDataD.length; i++){
            address curDAD = keysDeAuditDataD[i];
            getDADid(curDAD);
            getDADinitiator(curDAD);
            getDADname(curDAD);
        }
    }

/*
    fetch ID
*/
   function getDADid(address curDAD) public {

        optional(uint256) pubkey;
        IDeAuditData(curDAD).idDeAuditData{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCgetDADid),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function SCgetDADid(
        uint256 idDeAuditData
    ) public {
        DADdata dd = dadData[msg.sender];
        dd.idDeAuditData = idDeAuditData;
        dadData[msg.sender] = dd;
    }
/*
    fetch initiator
*/
    function getDADinitiator(address curDAD) public {

        optional(uint256) pubkey;
        IDeAuditData(curDAD).initiator{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCgetDADinitiator),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function SCgetDADinitiator(
        address initiator
    ) public {
        DADdata dd = dadData[msg.sender];
        dd.initiator = initiator;
        dadData[msg.sender] = dd;
    }
/*
    fetch name
*/
    function getDADname(address curDAD) public {

        optional(uint256) pubkey;
        IDeAuditData(curDAD).name{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCgetDADname),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function SCgetDADname(
        bytes name
    ) public {
        DADdata dd = dadData[msg.sender];
        dd.name = name;
        dadData[msg.sender] = dd;
    }


    function atmenu() public {
        Menu.select("Welcome to Action team menu", "", [
            MenuItem("DEV set core debot address", "", tvm.functionId(setACTMdebAddress)),
            MenuItem("dev refresh data", "",tvm.functionId(pstart)),
            MenuItem("sendTrigger", "",tvm.functionId(onSendTrigger)),
            MenuItem("Add member", "",tvm.functionId(initAddVoting)),
            MenuItem("Remove member", "", tvm.functionId(InitRemoveVoting)),
            MenuItem("createDeAuditData", "", tvm.functionId(enterDeAuditDataNameInput)),
            MenuItem("edit deAuditdata", "", tvm.functionId(onToEDdebot)),
            MenuItem("init DeAudit", "", tvm.functionId(initDeauditDataMenuInput)),
            MenuItem("voting list", "", tvm.functionId(goToVLdebot)),
            MenuItem("return to main menu", "", tvm.functionId(goToCore)),
            MenuItem("Quit", "", 0)
            ]);
    }
/*
    go to ED debot
*/


    function onSendTrigger(uint32 index) public {
//        fetchVCbyDA();
        MenuItem[] m_menu;
        for(uint8 i = 0; i < keysDeAuditD.length; i++){
            address curDad = keysDeAuditD[i];
            DetailsParamDeAudit dd = paramDeAuditDeAudit[curDad];

            string curVdata = format("====De Audit data name: {}dDAD address: {}====\n",dd.name,curDad);
            m_menu.push(MenuItem(curVdata,"",tvm.functionId(onsetDaD)));
        }
        m_menu.push(MenuItem("Back to menu", "", tvm.functionId(atmenu)));
        Menu.select("Choose De Audit:", "",m_menu);

    }

address curDeAudit;
       function onsetDaD(uint32 index) public {
           curDeAudit = keysDeAuditD[index];
           AddressInput.get(tvm.functionId(onsetVC),"Set ACT4 address: ");
       }
    address curACT4;
    function onsetVC(address value) public {
        curACT4 = value;

            optional(uint256) pubkey;
            IParticipant(m_participant).sendTrigger{
            abiVer : 2,
            extMsg : true,
            sign : true,
            pubkey : pubkey,
            time : uint64(now),
            expire: 0x123,
            callbackId : 0,
            onErrorId : tvm.functionId(someError)
            }(curDeAudit,curACT4,GRAMS_TRIGGER);

            atmenu();
    }

/*
    go to ED debot
*/

    function onToEDdebot(uint32 index) public {
        MenuItem[] m_menu;
        for(uint8 i = 0; i < keysDeAuditDataD.length; i++){
            address curDad = keysDeAuditDataD[i];
            DADdata dd = dadData[curDad];

            string curVdata = format("====De Audit name: {} DAD address: {} DAD initiator: {} DAD id: {}====\n",dd.name,curDad, dd.initiator, dd.idDeAuditData);
            m_menu.push(MenuItem(curVdata,"",tvm.functionId(setDAD)));
        }
        m_menu.push(MenuItem("Back to menu", "", tvm.functionId(pstart)));
        Menu.select("Choose DAD:", "",m_menu);
    }

    address curDADaddress;

    function setDAD(uint32 index) public {
        curDADaddress = keysDeAuditDataD[index];

        optional(uint256) pubkey;
        IDeAuditData(curDADaddress).initiator{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCsetDAD),
        onErrorId : tvm.functionId(someError)
        }();
    }
    function SCsetDAD(address initiator) public {
        if(initiator == m_participant){
            goToEDdebot();
        }else{
            Terminal.print(tvm.functionId(atmenu),"Warning: You are not initiator of this DAD");
        }
    }


    function goToEDdebot() public {
        IVotingAuditDebotED(m_EditDebot).startGlobal(m_participant, curDADaddress);
    }



        /*
            set debot addreses
        */


    function setACTMdebAddress(uint32 index) public {
        AddressInput.get(tvm.functionId(onsetDebadd), "dev set core deb adddress: ");
    }
    function onsetDebadd(address value) public {
        m_coreDebot = value;
        setVLdebAddress();
    }

    function setVLdebAddress() public {
        AddressInput.get(tvm.functionId(onsetVL), "dev set VL deb adddress: ");
    }
    function onsetVL(address value) public {
        m_VotingAuditDebotVLaddress = value;
        setEditDebaddress();
    }

    function setEditDebaddress() public {
        AddressInput.get(tvm.functionId(onsetEditDebaddress), "dev set EDIT deb adddress: ");
    }
    function onsetEditDebaddress(address value) public {
        m_EditDebot = value;
        start();
    }

/*
    go to core debot
*/
    function goToCore(uint32 index) public {
        IVotingAuditDebot(MenuItem[] m_menu;).preSstart(m_participant);
    }


/*
    Voting list
*/


    function goToVLdebot(uint32 index) public {
        IVotingAuditDebotVL(m_VotingAuditDebotVLaddress).prestart(m_participant);
    }

/*
    Add/remove members
*/
    function initAddVoting(uint32 index) public {
        AddressInput.get(tvm.functionId(addMember_sendMSG), "Enter candidate address to add:");
    }
    function InitRemoveVoting(uint32 index) public {
        AddressInput.get(tvm.functionId(remoteMember_sendMSG), "Enter candidate address to remove:");
    }

    address m_memberAddress;

    function removeMember_sendMSG(address value) public {
        m_memberAddress = value;

        optional(uint256) pubkey;
        IParticipant(m_participant).initVoteRemoveActionTeamMember{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : 0,
        onErrorId : tvm.functionId(someError)
        }(m_memberAddress,GRAMS_INIT_VOTE);

        start();
    }

    function addMember_sendMSG(address value) public {
        m_memberAddress = value;

        optional(uint256) pubkey;
        IParticipant(m_participant).initVoteAddActionTeamMember{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : 0,
        onErrorId : tvm.functionId(someError)
        }(m_memberAddress,GRAMS_INIT_VOTE);

        start();
    }

/*
    create de audit
*/
    bytes nameDeAudit;
    uint256 timeStart;
    uint256 colPeriod;
    uint256 valPeriod;
    uint128 colStake;
    uint128 valStake;

    function enterDeAuditDataNameInput(uint32 index) public {
        Terminal.input(tvm.functionId(enterDeAuditDataName), "Enter DeAudit Name", false);
    }

    function enterDeAuditDataName(string value) public {
        nameDeAudit = bytes(value);
        Terminal.input(tvm.functionId(enterDeAuditStartTime), "Enter start time of DeAudit (timestamp)", false);
    }

    function enterDeAuditStartTime(string value) public {
        uint res;
        bool status;
        (res, status) = stoi(value);
        timeStart = uint256(res);
        Terminal.input(tvm.functionId(enterDeAuditCollationPeriod), "Enter collation period of DeAudit (timestamp)", false);
    }

    function enterDeAuditCollationPeriod(string value) public {
        uint res;
        bool status;
        (res, status) = stoi(value);
        colPeriod = uint256(res);
        Terminal.input(tvm.functionId(enterDeAuditValidationPeriod), "Enter validation period of DeAudit (timestamp)", false);
    }

    function enterDeAuditValidationPeriod(string value) public {
        uint res;
        bool status;
        (res, status) = stoi(value);
        valPeriod = uint256(res);
        Terminal.input(tvm.functionId(enterDeAuditCollationStake), "Enter collation stake of DeAudit", false);
    }

    function enterDeAuditCollationStake(string value) public {
        uint res;
        bool status;
        (res, status) = stoi(value);
        colStake = uint128(res);
        Terminal.input(tvm.functionId(enterDeAuditValueStake), "Enter value of DeAudit stake", false);
    }

    function enterDeAuditValueStake(string value) public {
        uint res;
        bool status;
        (res, status) = stoi(value);
        valStake = uint128(res);
        callCreateDeAuditData();
    }

    function callCreateDeAuditData() public {
        optional(uint256) pubkey;
        IParticipant(m_participant).createDeAuditData{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : 0,
        onErrorId : tvm.functionId(someError)
        }(
            nameDeAudit,
            timeStart,
            colPeriod,
            valPeriod,
            colStake,
            valStake,
            GRAMS_CREATE_DEAUDIT
        );
        start();
    }

/*
    init de Audit
*/
    function initDeauditDataMenuInput(uint32 index) public {
        AddressInput.get(tvm.functionId(initDeauditData), "Enter DeAudit Data address for Init:");
    }

    function initDeauditData(address value) public {
        optional(uint256) pubkey;
        IParticipant(m_participant).initVoteDeAudut{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : 0,
        onErrorId : tvm.functionId(someError)
        }(
            value,
            GRAMS_INIT_VOTE
        );

        start();
    }

/*
    utils
*/

    function someError(uint32 sdkError, uint32 exitCode) public {
        Terminal.print(0, format("sdkError: {}\nexitCOde:{}", sdkError, exitCode));
        Terminal.print(0, "Back to menu...");
        start();
    }
    /// @notice Returns Metadata about DeBot.
    function getDebotInfo() public functionID(0xDEB) override view returns(
        string name, string version, string publisher, string caption, string author,
        address support, string hello, string language, string dabi, bytes icon
    ) {
        name = "Radiance Voting Audit DeBot ACTM";
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
