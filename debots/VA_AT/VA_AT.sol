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

contract ActionTeamVotingAuditDebot is Debot {

    address m_VotingAuditDebotVLaddress;
    address m_coreDebot;
    address m_EditDebot;

    uint128 GRAMS_TRIGGER = 1600000000;
    uint128 GRAMS_INIT_VOTE = 600000000;
    uint128 GRAMS_CREATE_DEAUDIT = 1100000000;

    address DeAuditRoot = address.makeAddrStd(0, 0xeb29541ddefbe0d27642d031c2831b7f573952f3a002fb5b3a9308f7362c225c);
    address m_participant = address.makeAddrStd(0, 0x3f9a896c0da1e0ed3efbe26a6a501020b1dd81d589f43e9f551dcdd529c5593b);

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
        fetchDeAuditData();
        actionTeamMenu();
    }
    function pstart(uint32 index) public {
        fetchDeAuditData();
        actionTeamMenu();
    }

    function start() public functionID(0x01) override {
        fetchDeAuditData();
        fetchDeAudits();
        actionTeamMenu();
    }

    /*
        FETCH DeAudits
    */
    function fetchDeAudits() public {
        optional(uint256) pubkey;
        IDeAuditRoot(DeAuditRoot).keysDeAudit{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(fetchDeAuditsCallback),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function fetchDeAuditsCallback(address[] keysDeAudit) public {
        keysDeAuditD = keysDeAudit;

        for(uint8 i = 0; i < keysDeAuditD.length; i++){
            address currentDeAudit = keysDeAuditD[i];
            getDeAuditData(currentDeAudit);
        }
    }

    function getDeAuditData(address currentDeAudit) public {
        optional(uint256) pubkey;
        IDeAudit(currentDeAudit).getDetails4Debot{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(getDeAuditDataCallback),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function getDeAuditDataCallback(
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
        Fetch DeAudit Data
    */
    function fetchDeAuditData() public {
        optional(uint256) pubkey;
        IDeAuditRoot(DeAuditRoot).keysDeAuditData{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(fetchDeAuditDataCallback),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function fetchDeAuditDataCallback(address[] keysDeAuditData) public {
        keysDeAuditDataD = keysDeAuditData;

        for(uint8 i = 0; i < keysDeAuditDataD.length; i++){
            address deAuditDataAddress = keysDeAuditDataD[i];
            getDeAuditDataFromID(deAuditDataAddress);
            getInitiatorOfDeAuditByAddress(deAuditDataAddress);
            getNameOfDeAuditByAddress(deAuditDataAddress);
        }
    }

    /*
        fetch ID
    */
   function getDeAuditDataFromID(address deAuditDataAddress) public {

        optional(uint256) pubkey;
        IDeAuditData(deAuditDataAddress).idDeAuditData{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(getDeAuditDataFromIDCallback),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function getDeAuditDataFromIDCallback(
        uint256 idDeAuditData
    ) public {
        DADdata dd = dadData[msg.sender];
        dd.idDeAuditData = idDeAuditData;
        dadData[msg.sender] = dd;
    }
/*
    fetch initiator
*/
    function getInitiatorOfDeAuditByAddress(address deAuditDataAddress) public {

        optional(uint256) pubkey;
        IDeAuditData(deAuditDataAddress).initiator{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(getInitiatorOfDeAuditByAddressCallback),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function getInitiatorOfDeAuditByAddressCallback(
        address initiator
    ) public {
        DADdata dd = dadData[msg.sender];
        dd.initiator = initiator;
        dadData[msg.sender] = dd;
    }
/*
    fetch name
*/
    function getNameOfDeAuditByAddress(address deAuditDataAddress) public {

        optional(uint256) pubkey;
        IDeAuditData(deAuditDataAddress).name{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(getNameOfDeAuditByAddressCallback),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function getNameOfDeAuditByAddressCallback(
        bytes name
    ) public {
        DADdata dd = dadData[msg.sender];
        dd.name = name;
        dadData[msg.sender] = dd;
    }


    function actionTeamMenu() public {
        Menu.select("Welcome to Action team menu", "", [
            MenuItem("[DEV] Set core debot address", "", tvm.functionId(setACTMdebAddress)),
            MenuItem("[DEV] Refresh data", "",tvm.functionId(pstart)),
            MenuItem("Create DeAudit Data", "", tvm.functionId(enterDeAuditDataNameInput)),
            MenuItem("Edit DeAudit Data", "", tvm.functionId(goToEditDeBot)),
            MenuItem("Add member to Action Team", "",tvm.functionId(initAddVoting)),
            MenuItem("Remove member from Action Team", "", tvm.functionId(InitRemoveVoting)),
            MenuItem("Force Finish DeAudit", "",tvm.functionId(sendTriggerMenu)),
            MenuItem("Initiate DeAudit", "", tvm.functionId(initDeauditDataMenuInput)),
            MenuItem("Display Votings", "", tvm.functionId(goToVLdebot)),
            MenuItem("Return to main menu", "", tvm.functionId(goToCore)),
            MenuItem("Quit", "", 0)
            ]);
    }
/*
    go to ED debot
*/


    function sendTriggerMenu(uint32 index) public {
//        fetchVCbyDA();
        MenuItem[] m_menu;
        for(uint8 i = 0; i < keysDeAuditD.length; i++){
            address currentDeAudit = keysDeAuditD[i];
            DetailsParamDeAudit dd = paramDeAuditDeAudit[currentDeAudit];

            string curVdata = format("— DeAudit Data name: {} \n DeAudit Data address: {} —\n",dd.name, currentDeAudit);
            m_menu.push(MenuItem(curVdata,"",tvm.functionId(sendTriggerMenuDeAuditDataChooseCallback)));
        }
        m_menu.push(MenuItem("Back to menu", "", tvm.functionId(actionTeamMenu)));
        Menu.select("Choose DeAudit Data or back to menu:", "",m_menu);

    }

    address curDeAudit;
       function sendTriggerMenuDeAuditDataChooseCallback(uint32 index) public {
           curDeAudit = keysDeAuditD[index];
           AddressInput.get(tvm.functionId(Act4EnterCallback),"Please, enter ACT4 address ");
       }
    address curACT4;
    function Act4EnterCallback(address value) public {
        curACT4 = value;

            optional(uint256) pubkey;
            IParticipant(m_participant).sendTrigger{
            abiVer : 2,
            extMsg : true,
            sign : true,
            pubkey : pubkey,
            time : uint64(now),
            expire: 0x123,
            callbackId : 0, // TODO: Change to empty function or ATMenu
            onErrorId : tvm.functionId(someError)
            }(curDeAudit,curACT4,GRAMS_TRIGGER);

            actionTeamMenu();
    }

/*
    go to ED debot
*/

    function goToEditDeBot(uint32 index) public {
        MenuItem[] m_menu;
        for(uint8 i = 0; i < keysDeAuditDataD.length; i++){
            address currentDeAudit = keysDeAuditDataD[i];
            DADdata dd = dadData[currentDeAudit];

            string curVdata = format("— {} \n Address: {} \n Initiator: {} \n ID: {} —\n",dd.name, currentDeAudit, dd.initiator, dd.idDeAuditData);
            m_menu.push(MenuItem(curVdata,"",tvm.functionId(selectDeAuditOnGoToEditDebot)));
        }
        m_menu.push(MenuItem("Back to menu", "", tvm.functionId(pstart)));
        Menu.select("Choose DeAudit or back to menu:", "",m_menu);
    }

    address curDADaddress;

    function selectDeAuditOnGoToEditDebot(uint32 index) public {
        curDADaddress = keysDeAuditDataD[index];

        optional(uint256) pubkey;
        IDeAuditData(curDADaddress).initiator{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(selectDeAuditOnGoToEditDebotCallback),
        onErrorId : tvm.functionId(someError)
        }();
    }
    function selectDeAuditOnGoToEditDebotCallback(address initiator) public {
        if(initiator == m_participant){
            goToEditDebot();
        }else{
            Terminal.print(tvm.functionId(actionTeamMenu),"Error! Please, enter keys of DeAudit initiator.");
        }
    }


    function goToEditDebot() public {
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
        start();
        // IVotingAuditDebot(MenuItem[] m_menu;).preSstart(m_participant);
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
        AddressInput.get(tvm.functionId(addMember_sendMSG), "Please, enter candidate address to add:");
    }
    function InitRemoveVoting(uint32 index) public {
        AddressInput.get(tvm.functionId(removeMember_sendMSG), "Please, enter candidate address to remove:");
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
        Terminal.input(tvm.functionId(enterDeAuditDataName), "Please, enter DeAudit Name", false);
    }

    function enterDeAuditDataName(string value) public {
        nameDeAudit = bytes(value);
        Terminal.input(tvm.functionId(enterDeAuditStartTime), "Please, enter start time (in future) of DeAudit (timestamp)", false);
    }

    function enterDeAuditStartTime(string value) public {
        uint res;
        bool status;
        (res, status) = stoi(value);
        timeStart = uint256(res);
        Terminal.input(tvm.functionId(enterDeAuditCollationPeriod), "Please, enter collation period of DeAudit in seconds (ex. 3600 sec = 1 hour)", false);
    }

    function enterDeAuditCollationPeriod(string value) public {
        uint res;
        bool status;
        (res, status) = stoi(value);
        colPeriod = uint256(res);
        Terminal.input(tvm.functionId(enterDeAuditValidationPeriod), "Please, enter validation period of DeAudit in seconds (ex. 3600 sec = 1 hour)", false);
    }

    function enterDeAuditValidationPeriod(string value) public {
        uint res;
        bool status;
        (res, status) = stoi(value);
        valPeriod = uint256(res);
        Terminal.input(tvm.functionId(enterDeAuditCollationStake), "Please, enter collation stake of DeAudit (in grams)", false);
    }

    function enterDeAuditCollationStake(string value) public {
        uint res;
        bool status;
        (res, status) = stoi(value);
        colStake = uint128(res);
        Terminal.input(tvm.functionId(enterDeAuditValueStake), "Please, enter stake value of DeAudit (in grams)", false);
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
        AddressInput.get(tvm.functionId(initDeauditData), "Please, enter address of DeAudit Data for initialization:");
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
        name = "Radiance Voting Audit DeBot [Action Team]";
        version = "0.1.0";
        publisher = "Radiance Team";
        caption = "DeBot for Action Team of Voting Audit Debots by Radiance Team.";
        author = "Radiance Team";
        support = address.makeAddrStd(0, 0x841288ed3b55d9cdafa806807f02a0ae0c169aa5edfe88a789a6482429756a94);
        hello = "Please note that this is part of the Radiance Voting Audit debots. Use Core Voting Audit Debot for easy navigation";
        language = "en";
        dabi = m_debotAbi.get();
        icon = m_icon;
    }

    function getRequiredInterfaces() public view override returns (uint256[] interfaces) {
        return [ Terminal.ID ];
    }

}
