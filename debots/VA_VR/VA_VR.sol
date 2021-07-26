pragma ton-solidity >=0.45.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
pragma AbiHeader time;

import "../Debot.sol";
import "../Terminal.sol";
import "../AddressInput.sol";
import "../AmountInput.sol";
import "../Sdk.sol";
import "../Menu.sol";
import "../ConfirmInput.sol";

interface IDeAuditRoot {
    function keysDeAudit() external returns (address[] keysDeAudit);
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

interface IParticipant {
    function validateFor(address addrAct4, uint128 grams) external;
    function validateAgainst(address addrAct4, uint128 grams) external;
    function registrationForValidation(address addrAct4, uint128 grams) external;
    function activeDeAudits() external returns (address[] activeDeAudits);
    function getCurActivity() external returns (
        bool reg,
        uint8 atype,
        address[] act4Arr,
        address wallet,
        address curDAactiv
        );
}
interface IAct4 {
    function collatorPhotoLink() external returns (bytes collatorPhotoLink);
    function voteMatrix() external returns (uint256[] voteMatrix);
    function additionalPhotoLinkArr() external returns (bytes[] additionalPhotoLinkArr);
}

interface IVotingAuditDebot {
    function preSstart(address m_participantC) external;
}

contract VotingAuditDebot is Debot {

    address m_ATdebAddress;
    address m_CLdebAddress;

    uint128 GRAMS_VALIDATE = 600000000;
    address m_coreDebot;

    address DeAuditRoot = address.makeAddrStd(0, 0xeb29541ddefbe0d27642d031c2831b7f573952f3a002fb5b3a9308f7362c225c);
    address m_participant = address.makeAddrStd(0, 0x3f9a896c0da1e0ed3efbe26a6a501020b1dd81d589f43e9f551dcdd529c5593b);
    //END
    bytes m_icon;


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

    mapping(address => curDA) DeAudits;
    address[] keysDeAuditD;


    struct ActivityD {
        bool reg;
        uint8 atype;
        address[] act4Arr;
        address wallet;
    }

    mapping(address => ActivityD) public activitiesD;
    address[] activeDeAuditsD;


    function setIcon(bytes icon) public {
        require(msg.pubkey() == tvm.pubkey(), 100);
        tvm.accept();
        m_icon = icon;
    }

    function preSstart(address curPart) public {
        m_participant = curPart;
        start();
    }
    function start() public functionID(0x01) override {
        fetchDA();
        fetchActivities();
        mainMenu();
    }

/*
    fetch DA
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
        callbackId : tvm.functionId(SCgetDeauditAddresses),
        onErrorId : tvm.functionId(someError)
        }();
    }
    function SCgetDeauditAddresses(address[] keysDeAudit) public {
        keysDeAuditD = keysDeAudit;
        for(uint8 i = 0; i < keysDeAudit.length; i++){
            deauditsCaller(keysDeAudit[i]);
        }
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

/*
    fetch activities
*/

    function fetchActivities() public {
        optional(uint256) pubkey;
        IParticipant(m_participant).activeDeAudits{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCfetchActivities),
        onErrorId : tvm.functionId(someError)
        }();
    }
    function SCfetchActivities(address[] activeDeAudits) public {
        activeDeAuditsD = activeDeAudits;
        for(uint8 i = 0; i < activeDeAuditsD.length; i++){
            fetchCurAvtivity(activeDeAuditsD[i]);
        }
    }

    function fetchCurAvtivity(address curDeAuditforActiv) public {
        optional(uint256) pubkey;
        IParticipant(m_participant).getCurActivity{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCfetchCurAvtivity),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function SCfetchCurAvtivity(
        bool reg,
        uint8 atype,
        address[] act4Arr,
        address wallet,
        address curDAactiv
    ) public {
        ActivityD at = activitiesD[curDAactiv];
        at.reg = reg;
        at.atype = atype;
        at.act4Arr = act4Arr;
        at.wallet = wallet;
        activitiesD[curDAactiv] = at;
    }
    /// @notice Entry point function for DeBot.
    function preStart(uint32 index) public {
        start();
//        mainMenu();
    }

    function mainMenu() public {
        Menu.select("Welcome to Validator menu", "", [
            MenuItem("Fetch data", "", tvm.functionId(preStart)),
            MenuItem("Register on DeAudit", "", tvm.functionId(DAmenu)),
            MenuItem("Validate", "", tvm.functionId(onValidate)),
            MenuItem("Return to role menu", "", tvm.functionId(goToCore)),
            MenuItem("Quit", "", 0)
            ]);
    }


    function goToCore(uint32 index) public {
        IVotingAuditDebot(m_coreDebot).preSstart(m_participant);
    }
/*
    validate
*/
//TODO check active de audits
    function onValidate(uint32 index) public {
        MenuItem[] m_menu;
            for(uint8 i = 0; i < activeDeAuditsD.length; i++){
            address actCurDA = activeDeAuditsD[i];
            curDA da = DeAudits[actCurDA];
            string curVdata = format("-- DeAudit Data name: {}",da.name);
            m_menu.push(MenuItem(curVdata,"",tvm.functionId(onsetDaD)));
            }
        m_menu.push(MenuItem("Back to menu", "", tvm.functionId(preStart)));
        Menu.select("Choose DeAudit:", "",m_menu);
    }

address curDa;
    function onsetDaD(uint32 index) public {
            curDa = activeDeAuditsD[index];
            ActivityD at = activitiesD[curDa];
            address[] curACT4 = at.act4Arr;
            MenuItem[] m_menu;

            for(uint8 i = 0; i < curACT4.length; i++){
               address curACT4adr = curACT4[i];
                string curVdata = format("-- Act4 address choose one: {}====\n",curACT4adr);
                m_menu.push(MenuItem(curVdata,"",tvm.functionId(onGetCollatorPhotoLink)));
                }
        m_menu.push(MenuItem("Back to menu", "", tvm.functionId(preStart)));
        Menu.select("Choose ACT4:", "",m_menu);
    }
address curACT4adrACT;
    function onGetCollatorPhotoLink(uint32 index) public {

        ActivityD at = activitiesD[curDa];
        address[] curACT4 = at.act4Arr;
        curACT4adrACT = curACT4[index];

            optional(uint256) pubkey;
            IAct4(curACT4adrACT).collatorPhotoLink{
            abiVer : 2,
            extMsg : true,
            sign : false,
            pubkey : pubkey,
            time : uint64(now),
            expire: 0x123,
            callbackId : tvm.functionId(onGetPhotoLink),
            onErrorId : tvm.functionId(someError)
            }();
    }
bytes curPhotoLinkActivs;
    function onGetPhotoLink(bytes collatorPhotoLink) public {

        curPhotoLinkActivs = collatorPhotoLink;

            optional(uint256) pubkey;
            IAct4(curACT4adrACT).voteMatrix{
            abiVer : 2,
            extMsg : true,
            sign : false,
            pubkey : pubkey,
            time : uint64(now),
            expire: 0x123,
            callbackId : tvm.functionId(onGetAdditionalPhotos),
            onErrorId : tvm.functionId(someError)
            }();
    }

uint256[] voteMatrixD;

    function onGetAdditionalPhotos(uint256[] voteMatrix) public {

        voteMatrixD = voteMatrix;

        optional(uint256) pubkey;
        IAct4(curACT4adrACT).additionalPhotoLinkArr{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(goToValMenubyCurActiv),
        onErrorId : tvm.functionId(someError)
        }();
    }

bytes[] additionalPhotoLinkArrD;

    function goToValMenubyCurActiv(bytes[] additionalPhotoLinkArr) public {
    additionalPhotoLinkArrD = additionalPhotoLinkArr;
    act4Validmenu();
}
function act4Validmenu() public {
    MenuItem[] m_menu;
        m_menu.push(MenuItem("Show Act4 Data", "", tvm.functionId(showACT4dt)));
        m_menu.push(MenuItem("Vote for", "", tvm.functionId(VoteForValidator)));
        m_menu.push(MenuItem("Vote against", "", tvm.functionId(VoteAgainstValidator)));

        m_menu.push(MenuItem("Back to menu", "", tvm.functionId(preStart)));
    Menu.select("Act4 voting:", "",m_menu);

    }

function showACT4dt(uint32 index) public {
    Terminal.print(0,format("-- Photo link of Act4: \n{}\n",curPhotoLinkActivs));

    for(uint8 i = 0; i < voteMatrixD.length; i++){
        uint256 curVoteFromMatrix = voteMatrixD[i];
        Terminal.print(0,format("-- Index of candidate: {}\nAmount of votes: {}",i, curVoteFromMatrix));
    }

    for(uint8 k = 0; k < additionalPhotoLinkArrD.length; k++){
        bytes curAdditPhotoLink = additionalPhotoLinkArrD[k];
        Terminal.print(0,format("-- Additional photo link: {}\n",curAdditPhotoLink));
    }
    act4Validmenu();
}

/*
    Callers
*/
    function VoteForValidator(uint128 value) public {
        Terminal.print(0,format("-- You are going to vote for: {}", curACT4adrACT));

        optional(uint256) pubkey;
        IParticipant(m_participant).validateFor{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : 0,
        onErrorId : tvm.functionId(someError)
        }(curACT4adrACT, GRAMS_VALIDATE);

        mainMenu();
    }
    function VoteAgainstValidator(uint128 value) public {

        Terminal.print(0,format("-- You are going to vote against: {}", curACT4adrACT));

        optional(uint256) pubkey;
        IParticipant(m_participant).validateAgainst{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : 0,
        onErrorId : tvm.functionId(someError)
        }(curACT4adrACT, GRAMS_VALIDATE);

        mainMenu();
    }

/*
    Register on DA
*/
    function DAmenu(uint32 index) public {
        MenuItem[] m_menu;
        for(uint8 i = 0; i < keysDeAuditD.length; i++){

            address curK = keysDeAuditD[i];


            curDA cp = DeAudits[curK];
            string status;
            uint256 time = uint256(now);

                if(time < cp.timeStart){
                    status = "Wait to start";
                }else if(time > cp.timeStart && time < (cp.timeStart + cp.colPeriod)){
                    status = "Collation period";
                }else if(time > (cp.timeStart + cp.colPeriod) && time < (cp.timeStart + cp.colPeriod + cp.valPeriod)){
                    status = "Validation period";
                }else{
                    status = "End";
                }

                string curVdata = format("-- DeAudit name: {}\nStart time: {}\nCollation period: {}\nValidation period: {}\nValidation stake: {}\nStatus:{}\n\n",cp.name, cp.timeStart, cp.colPeriod,cp.valPeriod,cp.valStake,status);
                m_menu.push(MenuItem(curVdata,"",tvm.functionId(showVotingAuditss)));
            }

            m_menu.push(MenuItem("Back to validator menu", "", tvm.functionId(preStart)));
            Menu.select("Choose DeAudit:", "",m_menu);
    }

address cureDA;
uint128 valSt;
bytes nameDD;

    function showVotingAuditss(uint32 index) public {
        cureDA = keysDeAuditD[index];
        curDA cr = DeAudits[cureDA];
        nameDD = cr.name;
        valSt = cr.valStake;
        uint256 time = uint256(now);

        if(time > (cr.timeStart + cr.colPeriod) && time < (cr.timeStart + cr.colPeriod + cr.valPeriod)){
            AmountInput.get(tvm.functionId(setValStake), format("-- Validation stake is: {} for 1 valid====\n",valSt),0,0,10000000000000);
        }else{
            Terminal.print(0,"You need to choose DeAudit that is collation period");
            DAmenu(0);
        }

    }

uint128 curGramsForSend;
    function setValStake(uint128 value) public {
        curGramsForSend = value;
        Terminal.print(0,format("-- You are going to take part in <<<{}>>>, it's address: {}, stake for 1 validation is {}, you are going to send {}=====\n", nameDD, cureDA, valSt,curGramsForSend));
    setValStakeCall();
    }
    function setValStakeCall() public {
        optional(uint256) pubkey;
        IParticipant(m_participant).registrationForValidation{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : 0,
        onErrorId : tvm.functionId(someError)
        }(cureDA,curGramsForSend);

        start();
    }
/*
    utils
*/

    function someError(uint32 sdkError, uint32 exitCode) public {
        Terminal.print(0, format("sdkError: {}\nexitCOde:{}", sdkError, exitCode));
        Terminal.print(0x01, "Back to menu...");
    }
    /// @notice Returns Metadata about DeBot.
    function getDebotInfo() public functionID(0xDEB) override view returns(
        string name, string version, string publisher, string caption, string author,
        address support, string hello, string language, string dabi, bytes icon
    ) {
        name = "Radiance Voting Audit DeBot [Validator]";
        version = "0.1.0";
        publisher = "Radiance Team";
        caption = "DeBot for Validator of Voting Audit Debots by Radiance Team.";
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


