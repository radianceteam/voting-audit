pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
pragma AbiHeader time;

import "../Debot.sol";
import "../Terminal.sol";
import "../AddressInput.sol";
import "../AmountInput.sol";
import "../ConfirmInput.sol";
import "../Menu.sol";

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
        uint128 valStake4Debot);
}

interface IDeAuditData {
    function votingCenterKeys() external returns (uint256[] votingCenterKeys);
    function getVotingCenter4Debot(uint256 votingCenterCurrentKey) external returns (
        bytes name4Debot,
        bytes location4Debot,
        uint256[] votes4Debot,
        uint256 idVotingPool4Debot,
        uint256 idMunicipalBody4Debot,
        uint256 idDistrict4Debot,
        bool collationStatus4Debot,
        address[] act4Arr4Debot,
        uint256 votingCenterCurrentKeyD
    );
    function candidateKeys() external returns (uint256[] candidateKeys);
    function getCandidate4Debot(uint256 candidateCurrentKey) external returns (
        bytes name4Debot,
        uint256 votes4Debot,
        uint256 candidateCurrentKeyD
    );
}

interface IParticipant {
    function addCollation(address addressDeAudit, uint256 indexVotingCenter, bytes linkToCollationPhoto, uint256[] voteMatrix, uint128 grams) external;
    function getPublishedData() external returns (
        bytes pName,
        bytes pPhotoLink,
        bytes pDataLink,
        address pAddress,
        uint128 pBalance
    );
    function publishData(bytes publishName, bytes publishPhotoLink, bytes publishDataLink) external;

}

interface IVotingAuditDebot {
    function preSstart(address m_participantC) external;
}

contract CLdebot is Debot {

    address m_coreDebot;

    address DeAuditRoot = address.makeAddrStd(0, 0xaaa43758f17b6ad589924ed8dad5b7bbfcfbdbb6661135944f435b93ae542efe);
    address m_participant = address.makeAddrStd(0, 0x4d872247fc37edb5f59dde179f3c698a6b22e58ac9defcba278180c026844a7b);

    bytes m_icon;

    struct CandidateD {
        bytes name;
        uint256 votes;
        uint256 curVotes;
    }

    mapping (uint256 => CandidateD) public candidateD;
    uint256[] public candidateKeysD;

    struct DetailsParamD {
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
        string status;
//        uint8 iD;
    }

    mapping(address => DetailsParamD) public paramDeAuditD;
    address[] public keysDeAuditDataD;

    struct VotingCenterD {
        bytes name;
        bytes location;
        uint256[] votes;
        uint256 idVotingPool;
        uint256 idMunicipalBody;
        uint256 idDistrict;
        bool collationStatus;
        address[] act4Arr;
//        uint256 countAdditionlPhotoLinks;
//        address[] validatorsArr;
        // bytes collatorPhotoLink;
        // bytes[] additionalPhotoLinkArr;
    }

    mapping (uint256 => VotingCenterD) public votingCenterD;
    uint256[] public votingCenterKeysD;

    function setIcon(bytes icon) public {
        require(msg.pubkey() == tvm.pubkey(), 100);
        tvm.accept();
        m_icon = icon;
    }
    function preStart(address partic) public {
        m_participant = partic;
        m_coreDebot = msg.sender;
        fetchDA();
        CLmenu();
    }
    function pstart(uint32 index) public {
        fetchDA();
        CLmenu();
    }

    function start() public functionID(0x01) override {
        fetchDA();
        CLmenu();
    }

/*
    FETCH CANDIDATES
*/

    function fetchCD(address deAuditAddress) public {
        Terminal.print(0,format("fetchCD, deAuditAddress: {}", deAuditAddress));
        optional(uint256) pubkey;
        IDeAuditData(deAuditAddress).candidateKeys{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCfetchCD),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function SCfetchCD(uint256[] candidateKeys) public {
        candidateKeysD = candidateKeys;

        for(uint8 i = 0; i < candidateKeysD.length; i++){
            uint256 curCD = candidateKeysD[i];
            getCDdata(curCD);
        }
    }

    function getCDdata(uint256 curDAD) public {
        Terminal.print(0,format("getCDdata, curDAD: {}", curDAD));

        optional(uint256) pubkey;
        IDeAuditData(testDAD).getCandidate4Debot{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCgetCDdata),
        onErrorId : tvm.functionId(someError)
        }(curDAD);
    }

    function SCgetCDdata(
        bytes name4Debot,
        uint256 votes4Debot,
        uint256 candidateCurrentKeyD
    ) public {
        CandidateD cd = candidateD[candidateCurrentKeyD];
        cd.name = name4Debot;
        cd.votes = votes4Debot;
        candidateD[candidateCurrentKeyD] = cd;
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
        keysDeAuditDataD = keysDeAudit;

        for(uint8 i = 0; i < keysDeAuditDataD.length; i++){
            address curDAD = keysDeAuditDataD[i];
            getDADdata(curDAD);
        }
    }

    function getDADdata(address curDAD) public {

        optional(uint256) pubkey;
        IDeAudit(curDAD).getDetails4Debot{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCgetDADdata),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function SCgetDADdata(
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
        DetailsParamD dd = paramDeAuditD[msg.sender];
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
        paramDeAuditD[msg.sender] = dd;
    }
/*
    fetch VC
*/

    function fetchVC(address DADaddress) public {
        Terminal.print(0,format("fetchVC, DADaddress: {}", DADaddress));

        optional(uint256) pubkey;
        IDeAuditData(DADaddress).votingCenterKeys{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCfetchVC),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function SCfetchVC(uint256[] votingCenterKeys) public {
        votingCenterKeysD = votingCenterKeys;

        for(uint8 i = 0; i < votingCenterKeysD.length; i++){
            uint256 curVC = votingCenterKeysD[i];
            getVCdata(curVC);
        }
    }
    function getVCdata(uint256 curVC) public {
        Terminal.print(0,format("getVCdata, curVC: {}", curVC));

        optional(uint256) pubkey;
        IDeAuditData(testDAD).getVotingCenter4Debot{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCgetVCstruct),
        onErrorId : tvm.functionId(someError)
        }(curVC);
    }

    function SCgetVCstruct(
        bytes name4Debot,
        bytes location4Debot,
        uint256[] votes4Debot,
        uint256 idVotingPool4Debot,
        uint256 idMunicipalBody4Debot,
        uint256 idDistrict4Debot,
        bool collationStatus4Debot,
        address[] act4Arr4Debot,
        uint256 votingCenterCurrentKeyD
    ) public {
        VotingCenterD vc = votingCenterD[votingCenterCurrentKeyD];
        vc.name = name4Debot;
        vc.location = location4Debot;
        vc.votes = votes4Debot;
        vc.idVotingPool = idVotingPool4Debot;
        vc.idMunicipalBody = idMunicipalBody4Debot;
        vc.idDistrict = idDistrict4Debot;
        vc.act4Arr = act4Arr4Debot;
//        vc.countAdditionlPhotoLinks = countAdditionlPhotoLinks4Debot;
        votingCenterD[votingCenterCurrentKeyD] = vc;
    }

    address testDAD = address.makeAddrStd(0, 0xe97bb59a278124af5d1fe4aa92ca997aa68c244478c4a6b505bb09e33c158780);
    function fVC(uint32 index) public {
        fetchVC(testDAD);
        CLmenu();
    }
    function fCD(uint32 index) public {
        fetchCD(testDAD);
        CLmenu();
    }
    function CLmenu() public {
        Menu.select("Welcome to CL menu", "", [
            MenuItem("Fetch data", "",tvm.functionId(pstart)),
            MenuItem("show user data", "",tvm.functionId(showUserData)),
            MenuItem("Fetch VC", "",tvm.functionId(fVC)),
            MenuItem("Fetch CD", "",tvm.functionId(fCD)),
            MenuItem("add collation", "", tvm.functionId(onAddCollation)),
            MenuItem("return to main menu", "", tvm.functionId(goToCore)),
            MenuItem("Quit", "", 0)
            ]);
    }

/*
    user info
*/
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
        Terminal.print(0,format("***USER DATA\nyour name: {}\nphoto link: {}\ndata link: {}\nyour address: {}\n balance: {}\nEND***\n",pName,pPhotoLink,pDataLink,pAddress,pBalance));

        MenuItem[] m_menu;
            m_menu.push(MenuItem("Edit user data", "", tvm.functionId(onEditUserData)));
            m_menu.push(MenuItem("Return to menu", "", tvm.functionId(pstart)));
        Menu.select("Choose: ", "",m_menu);
    }

    function onEditUserData(uint32 index) public {
        Terminal.input(tvm.functionId(onSetName), "----\nYour name?\n\n",false);
    }
bytes userName;
    function onSetName(string value) public {
        userName = bytes(value);

        Terminal.input(tvm.functionId(onAddPhotoLink), "----\nAdd your photo link:\n\n",false);
    }
bytes PhotoLink;
    function onAddPhotoLink(string value) public {
        PhotoLink = bytes(value);

        Terminal.input(tvm.functionId(onAddPublishedDataLink), "----\nAdd your published data link:\n\n",false);
    }
bytes PublishedDataLink;
    function onAddPublishedDataLink(string value) public {
        PublishedDataLink = bytes(value);

        Terminal.print(0,format("***** your userName: {}\n photo link: {}\n published data link: {}\n*****\n", userName,PhotoLink,PublishedDataLink));

        optional(uint256) pubkey;
        IParticipant(m_participant).publishData{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : 0,
        onErrorId : tvm.functionId(someError)
        }(userName,PhotoLink,PublishedDataLink);

        CLmenu();
    }

/*
    add collation
*/
    function onAddCollation(uint32 index) public {
        MenuItem[] m_menu;
        for(uint8 i = 0; i < keysDeAuditDataD.length; i++){
            address curDA = keysDeAuditDataD[i];
            DetailsParamD da = paramDeAuditD[curDA];
            string status;
                if(uint256(now) >= da.timeStart && (uint256(now) <= (da.colPeriod + da.timeStart + da.valPeriod))){
                    status = "Collation";
                    da.status = status;
                    paramDeAuditD[curDA] = da;
                    string curVdata = format("***** Status: COLLATION PERIOD, DeAudit name: {} DA sequentialNumber: {} da.colStake: {} DA address: {}\n",da.name, da.sequentialNumber,da.colStake,curDA);
                    m_menu.push(MenuItem(curVdata,"",tvm.functionId(setTouchedDA)));
                }else{
                    status = "All other";
                    da.status = status;
                    paramDeAuditD[curDA] = da;
                    string curVdata = format("***** DeAudit name: {} DA sequentialNumber: {} da.colStake: {} DA address: {}\n",da.name, da.sequentialNumber,da.colStake,curDA);
                    m_menu.push(MenuItem(curVdata,"",tvm.functionId(setTouchedDA)));
                }
        }
        m_menu.push(MenuItem("Back to menu", "", tvm.functionId(pstart)));
        Menu.select("Choose DA:", "",m_menu);
    }


address curDAAddressD;
uint256 curSN;
uint128 CLstake;
address curDADadd;
    function setTouchedDA(uint32 index) public {
        index = index;
        curDAAddressD = keysDeAuditDataD[index];
        DetailsParamD da = paramDeAuditD[curDAAddressD];

        if(da.status != "Collation"){
            Terminal.print(0, "Error take from collation pariod available");
            onAddCollation(1);
        }else{
            curSN = da.sequentialNumber;
            CLstake = uint128(da.colStake);
            curDADadd = da.dataDeAudit;
            Terminal.print(0, format("DAD address: {}",curDADadd));

            fetchCD(curDADadd);
            fetchVC(curDADadd);
            Terminal.print(tvm.functionId(onSetLink), format("\n=====Success=====\nyou touched DeAudit name: {} DA sequentialNumber: {} da.colStake: {} DAcurindex: {}\n",da.name, curSN,curDADadd,curDAAddressD));
        }
    }

    function onSetVC() public {
        MenuItem[] m_menu;
        for(uint8 i = 0; i < votingCenterKeysD.length; i++){
            uint256 curVC = votingCenterKeysD[i];
            VotingCenterD vc = votingCenterD[curVC];

            string curVdata = format("*****Voting Center name: {}  touched VC location: {}, VC index:{}\n",vc.name, vc.location, curVC);
            m_menu.push(MenuItem(curVdata,"",tvm.functionId(setTouchedVC)));
        }
        m_menu.push(MenuItem("Back menu", "", tvm.functionId(pstart)));
        Menu.select("Choose VC:", "",m_menu);
    }

uint256 curVCIndexD;

    function setTouchedVC(uint32 index) public {
        index = index;
        curVCIndexD = votingCenterKeysD[index];
        VotingCenterD vc = votingCenterD[curVCIndexD];
        Terminal.print(tvm.functionId(onSetVoteMatrix), format("\n=====Success=====\nyou touched Voting Center name: {}  Touched VC location: {}, Touched VC index:{}\n",vc.name, vc.location, curVCIndexD));
    }


    function onSetLink() public {
        Terminal.input(tvm.functionId(setLink), "----\nSet link to your collation:\n\n",false);
    }
bytes link;
    function setLink(string value) public {
        link = bytes(value);
        onSetVC();
    }


    function onSetVoteMatrix() public {
        MenuItem[] m_menu;
        for(uint8 i = 0; i < candidateKeysD.length; i++){
            uint256 curCD = candidateKeysD[i];
            CandidateD cd = candidateD[curCD];

            string curVdata = format("***** Candidate name: {} Cur candidate index: {}\n",cd.name,curCD);
            m_menu.push(MenuItem(curVdata,"",tvm.functionId(setTouchedCD)));
        }
        m_menu.push(MenuItem("Set link", "", tvm.functionId(onSetLink)));
        m_menu.push(MenuItem("Deploy Act4", "", tvm.functionId(addCandOnchainCheck)));
        m_menu.push(MenuItem("Back menu", "", tvm.functionId(pstart)));
        Menu.select("Choose candidate:", "",m_menu);
    }


uint256 curCDIndexD;
bytes canName;

    function setTouchedCD(uint32 index) public {
        index = index;
        curCDIndexD = candidateKeysD[index];
        CandidateD cd = candidateD[curCDIndexD];
        canName = cd.name;

        AmountInput.get(tvm.functionId(saveCandidateVotes), format("====\ncCandidate name: {}\nCandidate index: {}\n====\n",cd.name, curCDIndexD),0,0,1000000000000);
    }
    function saveCandidateVotes(uint128 value) public {
        uint256 newValue = uint256(value);

        CandidateD cd = candidateD[curCDIndexD];
        cd.curVotes = newValue;
        candidateD[curCDIndexD] = cd;

        Terminal.print(tvm.functionId(onSetVoteMatrix), format("\n=====Success=====\nyou touched candidate name: {}\n touched votes: {}\n", canName,value));
    }

uint256[] VoteMatrixD;
    function addCandOnchainCheck(uint32 index) public {
            for(uint8 i = 0; i < candidateKeysD.length; i++){
                CandidateD cd = candidateD[i];
                VoteMatrixD.push(cd.curVotes);
                Terminal.print(0, format("cd name: {}, votes amount:{}\n",cd.name,cd.curVotes));
            }

        Terminal.print(0, format("DeAudit address: {} Voting center index: {} your link: {} stake: {}",curDAAddressD,curVCIndexD,link,CLstake));
        if(candidateKeysD.length != VoteMatrixD.length){
            Terminal.print(tvm.functionId(onSetVoteMatrix), "Error - you are not setted all candidates");
        }else{
            ConfirmInput.get(tvm.functionId(checkAns), "Are you sure to deploy?");

        }
    }

    function checkAns(bool value) public {
            if(value){
                addCandOnchain();
            }else{
                CLmenu();
            }

    }
    function addCandOnchain() public {

            optional(uint256) pubkey;
            IParticipant(m_participant).addCollation{
            abiVer : 2,
            extMsg : true,
            sign : true,
            pubkey : pubkey,
            time : uint64(now),
            expire: 0x123,
            callbackId : tvm.functionId(CLmenu),
            onErrorId : tvm.functionId(someError)
            }(curDAAddressD,curVCIndexD,link,VoteMatrixD,CLstake);

    }


/*
    go to core debot
*/
    function goToCore(uint32 index) public {
        IVotingAuditDebot(m_coreDebot).preSstart(m_participant);
    }

/*
    utils
*/

    function someError(uint32 sdkError, uint32 exitCode) public {
        Terminal.print(0, format("sdkError: {}\nexitCOde:{}", sdkError, exitCode));
        Terminal.print(0, "Back to menu...");
        CLmenu();
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
