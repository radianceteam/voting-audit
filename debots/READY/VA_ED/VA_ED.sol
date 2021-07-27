pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
pragma AbiHeader time;

import "../Debot.sol";
import "../Terminal.sol";
import "../Menu.sol";

interface IDeAuditData {
    function districtKeys() external returns (uint256[] districtKeys);
    function municipalBodyKeys() external returns (uint256[] municipalBodyKeys);
    function votingPoolKeys() external returns (uint256[] votingPoolKeys);
    function candidateKeys() external returns (uint256[] candidateKeys);

    function getCandidate4Debot(uint256 candidateCurrentKey) external returns (
        bytes name4Debot,
        uint256 votes4Debot,
        uint256 candidateCurrentKeyD
    );

    function getVotingPool4Debot(uint256 votingPoolCurrentKey) external returns (
        bytes name4Debot,
        uint256[] votes4Debot,
        uint256[] votingCentersArr4Debot,
        uint256 votingPoolCurrentKeyD
    );
    function getMunicipalBody4Debot(uint256 municipalBodyCurrentKey) external returns (
        bytes name4Debot,
        uint256[] votes4Debot,
        uint256[] votingCentersArr4Debot,
        uint256[] votingPoolsArr4Debot,
        uint256 municipalBodyCurrentKeyD
    );
    function getDistrict4Debot(uint256 districtCurrentKey) external returns (
        bytes name4Debot,
        uint256[] votes4Debot,
        uint256[] votingCentersArr4Debot,
        uint256[] votingPoolsArr4Debot,
        uint256[] municipalBodiesArr4Debot,
        uint256 districtCurrentKeyD
    );
}
interface IParticipant {
    function addCandidate(address addressDeAuditData, bytes nameCandidate, uint128 grams) external returns (uint8 status);
    function addDistrict(address addressDeAuditData, bytes nameDistrict, uint128 grams) external returns (uint8 status);
    function addMunicipalBody(address addressDeAuditData, bytes nameMunicipalBody, uint256 indexDistrict, uint128 grams) external returns (uint8 status);
    function addVotingPool(address addressDeAuditData, bytes nameVotingPool, uint256 indexDistrict, uint256 indexMunicipalBody, uint128 grams) external returns (uint8 status);
    function addVotingCenter(address addressDeAuditData, bytes nameVotingCenter, bytes location, uint256 indexDistrict, uint256 indexMunicipalBody, uint256 indexVotingPool, uint128 grams) external returns (uint8 status);
}
interface IVotingAuditDebotACTMmenu {
    function preStart(address m_participant) external;

}

contract VotingAuditDebotED is Debot {

    uint128 GRAMS_ADD = 700000000;
    address m_participant;
    address choosenDADaddress;
    bytes m_icon;

    address m_ATdebotAddress;
    uint256 m_masterPubKey;
    uint256 m_masterSecKey;

    struct DistrictD {
        bytes name;
        uint256[] municipalBodiesArr;
        uint256[] votingPoolsArr;
    }

    mapping (uint256 => DistrictD) public districtD;
    uint256[] districtsD;

    struct MunicipalBodyD {
        bytes name;
        uint256[] votingPoolsArr;
    }

    mapping (uint256 => MunicipalBodyD) public MBD;
    uint256[] MBkeysD;

    struct VotingPoolD {
        bytes name;
        uint256[] votingCentersArr;
    }

    mapping (uint256 => VotingPoolD) public votingPoolD;
    uint256[] public votingPoolKeysD;

    struct CandidateD {
        bytes name;
        uint256 votes;
    }

    mapping (uint256 => CandidateD) public candidateD;
    uint256[] public candidateKeysD;

    function setIcon(bytes icon) public {
        require(msg.pubkey() == tvm.pubkey(), 100);
        tvm.accept();
        m_icon = icon;
    }

    function start() functionID(0x01) override public {
        startFetch();
    }
    function prestart(uint32 index) functionID(0x03) public {
        startFetch();
    }
    function startGlobal(address partAddress, address choosenDAD) public {
        m_ATdebotAddress = msg.sender;
        choosenDADaddress = choosenDAD;
        m_participant = partAddress;
        startFetch();
    }
    function startFetch() public {
        fetchDistricts();
        fetchMB();
        fetchVP();
        fetchCD();
        editDeAudit();
    }

    function fetchDistricts() public {
        optional(uint256) pubkey;
        IDeAuditData(choosenDADaddress).districtKeys{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCfetchDistricts),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function SCfetchDistricts(uint256[] districtKeys) public {
        districtsD = districtKeys;
        for(uint8 i = 0; i < districtKeys.length; i++){
            uint256 curDistrict = districtKeys[i];
            getDistrictData(curDistrict);
        }
    }

    function getDistrictData(uint256 curDistr) public {
        optional(uint256) pubkey;
        IDeAuditData(choosenDADaddress).getDistrict4Debot{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCchooseDistrict),
        onErrorId : tvm.functionId(someError)
        }(curDistr);
    }

    function SCchooseDistrict(
        bytes name4Debot,
        uint256[] votes4Debot,
        uint256[] votingCentersArr4Debot,
        uint256[] votingPoolsArr4Debot,
        uint256[] municipalBodiesArr4Debot,
        uint256 districtCurrentKeyD
    ) public {
        DistrictD cp = districtD[districtCurrentKeyD];
        cp.name = name4Debot;
        cp.municipalBodiesArr = municipalBodiesArr4Debot;
        cp.votingPoolsArr = votingPoolsArr4Debot;
        districtD[districtCurrentKeyD] = cp;
    }

    function fetchMB() public {
        optional(uint256) pubkey;
        IDeAuditData(choosenDADaddress).municipalBodyKeys{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCfetchMB),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function SCfetchMB(uint256[] municipalBodyKeys) public {
        MBkeysD = municipalBodyKeys;
        for(uint8 i = 0; i < municipalBodyKeys.length; i++){
            uint256 curMB = municipalBodyKeys[i];
            getMBData(curMB);
        }
    }

    function getMBData(uint256 curMB) public {
        optional(uint256) pubkey;
        IDeAuditData(choosenDADaddress).getMunicipalBody4Debot{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCgetMBData),
        onErrorId : tvm.functionId(someError)
        }(curMB);
    }

    function SCgetMBData(
        bytes name4Debot,
        uint256[] votes4Debot,
        uint256[] votingCentersArr4Debot,
        uint256[] votingPoolsArr4Debot,
        uint256 municipalBodyCurrentKeyD
    ) public {
        MunicipalBodyD mb = MBD[municipalBodyCurrentKeyD];
        mb.name = name4Debot;
        mb.votingPoolsArr = votingPoolsArr4Debot;
        MBD[municipalBodyCurrentKeyD] = mb;
    }

    function fetchVP() public {
        optional(uint256) pubkey;
        IDeAuditData(choosenDADaddress).votingPoolKeys{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCfetchVP),
        onErrorId : tvm.functionId(someError)
        }();
    }
    function SCfetchVP(uint256[] votingPoolKeys) public {
        votingPoolKeysD = votingPoolKeys;
        for(uint8 i = 0; i < votingPoolKeys.length; i++){
            uint256 curVP = votingPoolKeys[i];
            getVPData(curVP);
        }
    }
    function getVPData(uint256 curVP) public {
        optional(uint256) pubkey;
        IDeAuditData(choosenDADaddress).getVotingPool4Debot{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCgetVPData),
        onErrorId : tvm.functionId(someError)
        }(curVP);
    }
    function SCgetVPData(
        bytes name4Debot,
        uint256[] votes4Debot,
        uint256[] votingCentersArr4Debot,
        uint256 votingPoolCurrentKeyD
    ) public {
        VotingPoolD vp = votingPoolD[votingPoolCurrentKeyD];
        vp.name = name4Debot;
        votingPoolD[votingPoolCurrentKeyD] = vp;
    }

    function fetchCD() public {
        optional(uint256) pubkey;
        IDeAuditData(choosenDADaddress).candidateKeys{
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
            getCData(curCD);
        }
    }
    function getCData(uint256 curCD) public {
        optional(uint256) pubkey;
        IDeAuditData(choosenDADaddress).getCandidate4Debot{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCgetCData),
        onErrorId : tvm.functionId(someError)
        }(curCD);
    }
    function SCgetCData(
        bytes name4Debot,
        uint256 votes4Debot,
        uint256 candidateCurrentKeyD
    ) public {
        CandidateD cd = candidateD[candidateCurrentKeyD];
        cd.name = name4Debot;
        candidateD[candidateCurrentKeyD] = cd;
    }

    function editDeAudit() public {
        Menu.select("Edit DeAudit data menu:", "", [
            MenuItem("Refresh data", "",tvm.functionId(prestart)),
            MenuItem("Show data", "",tvm.functionId(devshow)),
            MenuItem("Add district", "",tvm.functionId(onAddDistrictSetName)),
            MenuItem("Add candidate", "", tvm.functionId(onAddCandidateName)),
            MenuItem("Add municipal body", "", tvm.functionId(onCurItemCheck)),
            MenuItem("Add voting pool", "", tvm.functionId(onCurItemCheck)),
            MenuItem("Add voting center", "", tvm.functionId(onCurItemCheck)),
            MenuItem("Back to main menu", "", tvm.functionId(goToATdebot)),
            MenuItem("Quit", "", 0)
            ]);
    }

    function goToATdebot(uint32 index) public {
        IVotingAuditDebotACTMmenu(m_ATdebotAddress).preStart(m_participant);
    }

    function devshow(uint32 index) public {
        index = index;
        for(uint8 k = 0; k < districtsD.length; k++){
            uint256 curDT = districtsD[k];
            DistrictD dt = districtD[curDT];
            Terminal.print(0, format(" - District name: {}", dt.name));
        }

        for(uint8 k = 0; k < MBkeysD.length; k++){
            uint256 curbm = MBkeysD[k];
            MunicipalBodyD mb = MBD[curbm];
            Terminal.print(0, format(" - Municipal body name: {}", mb.name));

        }
        for(uint8 k = 0; k < votingPoolKeysD.length; k++){
            uint256 curvp = votingPoolKeysD[k];
            VotingPoolD vp = votingPoolD[curvp];
            Terminal.print(0, format(" - Voting pool name: {}", vp.name));
        }

        for(uint8 k = 0; k < candidateKeysD.length; k++){
            uint256 curCD = candidateKeysD[k];
            CandidateD cd = candidateD[curCD];
            Terminal.print(0, format(" - Candidate name: {}",cd.name));

        }

        editDeAudit();
    }

    function onAddDistrictSetName(uint32 index) public {
        index = index;
        Terminal.input(tvm.functionId(setDistrictCall), "Enter district Name: \n", false);
    }

    function setDistrictCall(string value) public {
        bytes nameDistr = bytes(value);

        Terminal.print(0, format(" - Touched DeAudit data: {}, District name: {}, grams for call: {} - \n",choosenDADaddress,nameDistr,GRAMS_ADD));
        optional(uint256) pubkey;
        IParticipant(m_participant).addDistrict{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCcall),
        onErrorId : tvm.functionId(someError)
        }(choosenDADaddress,nameDistr,GRAMS_ADD);
    }

    function onAddCandidateName(uint32 index) public {
        index = index;
        Terminal.input(tvm.functionId(setCandidateName), "Enter candidate Name:", false);
    }

    function setCandidateName(string value) public {
        bytes nameCandidate = bytes(value);
        Terminal.print(0, format(" - Touched DeAudit data: {}, Candidate name: {},grams for add: {} - \n",choosenDADaddress,nameCandidate,GRAMS_ADD));
        optional(uint256) pubkey;
        IParticipant(m_participant).addCandidate{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCcall),
        onErrorId : tvm.functionId(someError)
        }(choosenDADaddress,nameCandidate,GRAMS_ADD);
    }

uint32 toundDistrictsID;
uint32 toundMBID;
uint32 toundVPID;

    function onCurItemCheck(uint32 index) public {
        index = index;
        if(index == 4){
            toundDistrictsID = 0x21;
        }else if(index == 5){
            toundDistrictsID = 0x11;
            toundMBID = 0x22;
        }else if(index == 6){
            toundDistrictsID = 0x11;
            toundMBID = 0x12;
            toundVPID = 0x23;
        }
        touchDistricts();
    }

    function touchDistricts() public {
        MenuItem[] m_menu;
        for(uint8 i = 0; i < districtsD.length; i++){
            uint256 curDistr = districtsD[i];
            DistrictD cp = districtD[curDistr];

            string curVdata = format(" - District name:{} index: {} - \n",cp.name,curDistr);
            m_menu.push(MenuItem(curVdata,"",tvm.functionId(setTouchedDistrict)));

        }
        m_menu.push(MenuItem("Back to menu", "", tvm.functionId(prestart)));
        Menu.select("Choose district or back to menu:", "",m_menu);
    }

uint256 curDistrIndexD;

    function setTouchedDistrict(uint32 index) public {
        index = index;
        curDistrIndexD = districtsD[index];
        Terminal.print(toundDistrictsID, format(" - You touched District index: {} - \n", curDistrIndexD));

    }


mapping(uint256=>Municipals) MBforstruct;
struct Municipals {
    bytes name;
    uint256 MBindex;
}
uint256[] MBarr;

    function touchMB() functionID(0x11) public {
        MenuItem[] m_menu;
        DistrictD dt = districtD[curDistrIndexD];

        MBarr = dt.municipalBodiesArr;
        for(uint8 i = 0; i < MBarr.length; i++){
            uint256 curBlyatMBindex = MBarr[i];
            MunicipalBodyD curStrOfMB = MBD[curBlyatMBindex];
            Municipals mp = MBforstruct[curBlyatMBindex];
            mp.name = curStrOfMB.name;
            mp.MBindex = curBlyatMBindex;
            MBforstruct[curBlyatMBindex] = mp;
        }


        for(uint8 k = 0; k < MBarr.length; k++){
            uint256 curmbar = MBarr[k];
            Municipals curStr = MBforstruct[curmbar];
            string curVdata = format("{}", curStr.name);
            m_menu.push(MenuItem(curVdata,"",tvm.functionId(setTouchedMB)));
        }
        m_menu.push(MenuItem("Back to menu", "", tvm.functionId(prestart)));
        Menu.select("Choose Municipal body or back to menu:", "",m_menu);
    }

uint256 curMBIndexD;

    function setTouchedMB(uint32 index) public {
        uint256 curmbar = MBarr[index];
        Municipals mbtouchedIndex = MBforstruct[curmbar];
        curMBIndexD = mbtouchedIndex.MBindex;
        Terminal.print(toundMBID, format(" - Touched Municipal body: {} - \n", mbtouchedIndex.name));
    }

    mapping(uint256=>votpools) votpoolsMAP;

    struct votpools {
        bytes name;
        uint256 VPindex;
    }
    uint256[] VParray;

    function touchVP() functionID(0x12) public {
        MenuItem[] m_menu;
        MunicipalBodyD dt = MBD[curMBIndexD];

        VParray = dt.votingPoolsArr;
        for(uint8 i = 0; i < VParray.length; i++){
            uint256 curVPindex = VParray[i];
            VotingPoolD curStrOfMB = votingPoolD[curVPindex];
            votpools vpC = votpoolsMAP[curVPindex];
            vpC.name = curStrOfMB.name;
            vpC.VPindex = curVPindex;
            votpoolsMAP[curVPindex] = vpC;
        }

        for(uint8 i = 0; i < VParray.length; i++){
            uint256 curVP = VParray[i];
            VotingPoolD vp = votingPoolD[curVP];
            string curVdata = format("{}",vp.name);
            m_menu.push(MenuItem(curVdata,"",tvm.functionId(setTouchedVP)));
        }

        m_menu.push(MenuItem("Back to menu", "", tvm.functionId(prestart)));
        Menu.select("Choose Voting pool or back to menu:", "",m_menu);
    }

uint256 curVPIndexD;

    function setTouchedVP(uint32 index) public {

        uint256 curVPi = VParray[index];
        votpools vptouchedIndex = votpoolsMAP[curVPi];
        curVPIndexD = vptouchedIndex.VPindex;
        Terminal.print(toundVPID, format(" - Touched Voting pool: {}", vptouchedIndex.name));
    }

    function onAddMB() functionID(0x21) public {
        Terminal.input(tvm.functionId(setMBname), "Enter Municipal body name: ", false);
    }

    function setMBname(string value) public {
        bytes MBname = bytes(value);

        optional(uint256) pubkey;
        IParticipant(m_participant).addMunicipalBody{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCcall),
        onErrorId : tvm.functionId(someError)
        }(choosenDADaddress,MBname,curDistrIndexD,GRAMS_ADD);
    }

    function touchCurVotingVP() functionID(0x22) public {
        Terminal.input(tvm.functionId(setVPname), "Enter Voting pool name: ", false);
    }

    function setVPname(string value) public {
        bytes VPname = bytes(value);
        Terminal.print(0, format("DeAudit data: {},district index: {},MB index: {},VP index: {}, GRAMS_ADD: {}",choosenDADaddress,curDistrIndexD,curMBIndexD,VPname, GRAMS_ADD));
        optional(uint256) pubkey;
        IParticipant(m_participant).addVotingPool{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCcall),
        onErrorId : tvm.functionId(someError)
        }(choosenDADaddress,VPname,curDistrIndexD,curMBIndexD,GRAMS_ADD);
    }

    function touchCurVotingVC() functionID(0x23) public {
        Terminal.input(tvm.functionId(setLocationVC), "Enter Voting Center name:", false);
    }

bytes VCname;

    function setLocationVC(string value) public {
        VCname = bytes(value);
        Terminal.input(tvm.functionId(setVCname), "Enter Voting Center location:", false);
    }

    function setVCname(string value) public {
        bytes VClocation = bytes(value);
        Terminal.print(0, format("DeAudit data: {},district index: {},MB index: {},VP index: {},location:{},name:{}, GRAMS_ADD: {}",choosenDADaddress,curDistrIndexD,curMBIndexD,curVPIndexD,VClocation,VCname,GRAMS_ADD));

        optional(uint256) pubkey;
        IParticipant(m_participant).addVotingCenter{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCcall),
        onErrorId : tvm.functionId(someError)
        }(choosenDADaddress,VCname,VClocation,curDistrIndexD,curMBIndexD,curVPIndexD,GRAMS_ADD);
    }

/*
    utils
*/
    function SCcall(uint8 status) public {
        if(status == 1){
            Terminal.print(0, "Success, your message sended to blockchain");
            start();
        }else{
            Terminal.print(0, "Error, try again");
            start();
        }
    }

    function someError(uint32 sdkError, uint32 exitCode) public {
        Terminal.print(0, format("sdkError: {}\nexitCOde:{}", sdkError, exitCode));
        Terminal.print(tvm.functionId(editDeAudit), "Back to menu...");
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
