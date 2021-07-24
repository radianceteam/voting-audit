pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
pragma AbiHeader time;

import "../Debot.sol";
import "../Terminal.sol";
import "../AddressInput.sol";
import "../Menu.sol";

interface IDeAuditRoot {
    function voteKeys() external returns (uint256[] voteKeys);
    function getVote4Debot(uint256 voteKey) external returns (
        address initiator4Debot,
        uint256 startTime4Debot,
        uint256 duration4Debot,
        uint8 vcms4Debot,
        mapping(address => uint32) yes4Debot,
        mapping(address => uint32) no4Debot,
        uint32 yesCount4Debot,
        uint32 noCount4Debot,
        TvmCell data4Debot,
        uint8 actionType4Debot,
        bool completed4Debot,
        uint256 voteKeyD);
}

interface IParticipant {
    function voteFor(uint256 voteId,uint128 grams) external;
    function voteAgainst(uint256 voteId,uint128 grams) external;
    function resultVote(uint256 voteId,uint128 grams) external;
}

interface IVotingAuditDebotACTMmenu {
    function preStart(address partic) external;
}

contract VotingAuditDebotVL is Debot {

    address m_VAdebotACTMmenuAddress;

    //TODO for test only
    uint128 GRAMS_INIT_VOTE = 700000000;
    uint128 GRAMS_RESULT = 3100000000;

    address m_DeAuditRoot = address.makeAddrStd(0, 0xc9d81bb29dcbdf531db223524ed8e5bdc8af2073100e29d809670b542c2b5022);
    address m_participant = address.makeAddrStd(0, 0x9f287f4355feb0d2d84ca3ff8819280b31161b3246486ca3fc67d77949b8f85f);
    //END
    bytes m_icon;

    mapping(uint256 => VoteD) voteD;
    uint256[] voteKeysD;

    struct VoteD {
        address initiator;
        uint256 startTime;
        uint256 duration;
        uint8 vcms;
//        TvmCell data;
//        mapping(address => uint32) yes;
//        mapping(address => uint32) no;
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
/*
    voting list
*/

    function prestart(address m_participantC) public {
        m_participant = m_participantC;
//        m_DeAuditRoot = DeAuditRoot;
        start();
    }
    function preInd(uint32 index) public {
        start();
    }

    function start() override functionID(0x01) public {

        optional(uint256) pubkey;
        IDeAuditRoot(m_DeAuditRoot).voteKeys{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(votingListMenu_getVoteStuct),
        onErrorId : tvm.functionId(someError)
        }();
    }

    function votingListMenu_getVoteStuct(uint256[] voteKeys) public {
        voteKeysD = voteKeys;
        for(uint8 i = 0; i < voteKeysD.length; i++){
            votingListMenu_getVoteStuctCur(voteKeysD[i]);
        }
        votingListMenu();
    }

    function votingListMenu_getVoteStuctCur(uint256 curVoteKey) public {
        optional(uint256) pubkey;
        IDeAuditRoot(m_DeAuditRoot).getVote4Debot{
        abiVer : 2,
        extMsg : true,
        sign : false,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : tvm.functionId(SCgetCurVote),
        onErrorId : tvm.functionId(someError)
        }(curVoteKey);
    }

    function SCgetCurVote(
        address initiator4Debot,
        uint256 startTime4Debot,
        uint256 duration4Debot,
        uint8 vcms4Debot,
        mapping(address => uint32) yes4Debot,
        mapping(address => uint32) no4Debot,
        uint32 yesCount4Debot,
        uint32 noCount4Debot,
        TvmCell data4Debot,
        uint8 actionType4Debot,
        bool completed4Debot,
        uint256 voteKeyD
        ) public
        {
            VoteD cp = voteD[voteKeyD];
            cp.initiator = initiator4Debot;
            cp.startTime = startTime4Debot;
            cp.duration = duration4Debot;
            cp.vcms= vcms4Debot;
            cp.yesCount = yesCount4Debot;
//            cp.data = data4Debot;
            cp.noCount = noCount4Debot;
            cp.data = data4Debot;
            cp.actionType = actionType4Debot;
            cp.completed = completed4Debot;
            voteD[voteKeyD] = cp;
        }


    function premenu(uint32 index) public {
        votingListMenu();
    }
    function votingListMenu() public {
        Menu.select("Choose voting type", "", [
            MenuItem("fetch data", "",tvm.functionId(preInd)),
            MenuItem("DEV set AT debot address", "", tvm.functionId(setATaddress)),
            MenuItem("dev show all data", "",tvm.functionId(showVotings)),
//            MenuItem("DEP add action team member", "",tvm.functionId(votingAddMember)),
//            MenuItem("DEP Remove action team member", "", tvm.functionId(votingRemoveMember)),
//            MenuItem("DEP launched deaudit votings", "", tvm.functionId(launchedV)),
            MenuItem("show all votings", "", tvm.functionId(showallV)),
            MenuItem("return to previous menu", "", tvm.functionId(goToACTMdebot)),
            MenuItem("Quit", "", 0)
            ]);
        }

/*
    showallV
*/

    function showallV(uint32 index) public {

            MenuItem[] m_menu;
            for(uint8 i = 0; i < voteKeysD.length; i++){
                uint256 curK = voteKeysD[i];
                VoteD cp = voteD[curK];

                TvmSlice slice = cp.data.toSlice();
                address addrData = slice.decode(address);

                string complete;
                if(cp.completed == true){
                    complete = "true";
                }else{
                    complete = "false";
                }

                    string curVdata = format("======\nVoting for this address: {} ---- status :{}\n curK: {}\nvotingID: {}\ninitiator:{}\nstartTime: {}\nduration: {}\nyesCount: {}\nnoCount: {}\n actionType:{}",addrData, complete,curK,votingID, cp.initiator, cp.startTime, cp.duration,cp.yesCount,cp.noCount,cp.actionType);
                    m_menu.push(MenuItem(curVdata,"",tvm.functionId(toungAllV)));

            }
            m_menu.push(MenuItem("Back to voting list menu add", "", tvm.functionId(preInd)));
            Menu.select("Choose voting:", "",m_menu);

    }
uint256 votingID;
uint32 indexCur;
    function toungAllV(uint32 index) public {
        indexCur = index;
        votingID = voteKeysD[index];
        VoteD cp = voteD[votingID];
        MenuItem[] m_menu;
        if(cp.completed){
            Terminal.print(0, "/n/n***This Voting completed, choose another one***/n/n");
            showallV(0);
        }else{

                m_menu.push(MenuItem("vote for","",tvm.functionId(voteFor)));
                m_menu.push(MenuItem("vote against","",tvm.functionId(voteAgainst)));
                m_menu.push(MenuItem("result vote","",tvm.functionId(resultVote)));

                if(cp.actionType == 2){
                    m_menu.push(MenuItem("show deauditData", "",tvm.functionId(showDADdata)));
                }

                m_menu.push(MenuItem("return to voting list menu","",tvm.functionId(premenu)));
                m_menu.push(MenuItem("Quit","",0));
                string title = format("initiator: {} voting id: {}",cp.initiator, votingID);
                Menu.select(title,"",m_menu);
        }
    }

/*
        DEV
*/
    function setATaddress(uint32 index) public {
        AddressInput.get(tvm.functionId(onsetEditDebaddress), "dev set at deb adddress: ");
    }
    function onsetEditDebaddress(address value) public {
        m_VAdebotACTMmenuAddress = value;
        votingListMenu();
    }

    function goToACTMdebot(uint32 index)public{
        IVotingAuditDebotACTMmenu(m_VAdebotACTMmenuAddress).preStart(m_participant);
    }


    function showVotings(uint32 index) public {

    for(uint8 i = 0; i < voteKeysD.length; i++){
        VoteD cr = voteD[voteKeysD[i]];
        string complete;
        if(cr.completed == true){
                    complete = "true";
                }else{
                    complete = "false";
                }
        Terminal.print(0,format("======\ncr.initiator: {}\ncr.startTime: {}\ncr.duration: {}\ncr.vcms: {}\ncr.yesCount: {}\ncr.noCount: {}\ncr.actionType: {}\ncr.completed: {}\n",cr.initiator,cr.startTime,cr.duration,cr.vcms,cr.yesCount,cr.noCount,cr.actionType,complete));
    }
    votingListMenu();
    }

///*
//    add action team member
//*/
//
//    function votingAddMember(uint32 index) public {
//        if(voteKeysD.length == 0){
//            Menu.select("You have no votings yet", "", [
//                MenuItem("return to previous menu", "", tvm.functionId(premenu)),
//                MenuItem("Quit", "", 0)
//                ]);
//        }else{
//            MenuItem[] m_menu;
//                 for(uint8 i = 0; i < voteKeysD.length; i++){
//                    uint256 curK = voteKeysD[i];
//                    VoteD cp = voteD[curK];
//                    if(cp.actionType == 0){
//
//                        string curVdata = format("======\ncurK:{}\nvotingID: {}\ninitiator:{}\nstartTime: {}\nduration: {}\nyesCount: {}\nnoCount: {}",curK,votingID, cp.initiator, cp.startTime, cp.duration,cp.yesCount,cp.noCount);
//                        m_menu.push(MenuItem(curVdata,"",tvm.functionId(touchCurVotingAddRemove)));
//                }
//            }
//            m_menu.push(MenuItem("Back to voting list menu add", "", tvm.functionId(preInd)));
//            Menu.select("Choose voting:", "",m_menu);
//      }
//    }
//
//
///*
//    remove action team member
//*/
//    function votingRemoveMember(uint32 index) public {
//        if(voteKeysD.length == 0){
//            Menu.select("You have no votings yet", "", [
//                MenuItem("return to previous menu", "", 0x03),
//                MenuItem("Quit", "", 0)
//                ]);
//        }else{
//            MenuItem[] m_menu;
//            for(uint8 i = 0; i < voteKeysD.length; i++){
//
//                uint256 curK = voteKeysD[i];
//
//                VoteD cp = voteD[curK];
//                if(cp.actionType == 1){
//
//                    string curVdata = format("======\nvotingID: {}\ninitiator:{}\nstartTime: {}\nduration: {}\nyesCount: {}\nnoCount: {}",curK,cp.initiator, cp.startTime, cp.duration,cp.yesCount,cp.noCount);
//                    m_menu.push(MenuItem(curVdata,"",tvm.functionId(touchCurVotingAddRemove)));
//                }
//
//            }
//            m_menu.push(MenuItem("Back to voting list menu remove", "", tvm.functionId(preInd)));
//            Menu.select("Choose voting add:", "",m_menu);
//        }
//    }
//
///*
//    menu fot both add and remove voting type
//*/
//    function touchCurVotingAddRemove(uint32 index) public {
//        votingID = voteKeysD[index];
//        Menu.select("voting options add", "", [
//            MenuItem("vote for", "",tvm.functionId(voteFor)),
//            MenuItem("vote against", "",tvm.functionId(voteAgainst)),
//            MenuItem("result vote", "", tvm.functionId(resultVote)),
//            MenuItem("return to voting list menu", "", tvm.functionId(premenu)),
//            MenuItem("Quit", "", 0)
//            ]);
//    }
//
///*
//    launched deaudit votings
//*/
//    function launchedV(uint32 index) public {
//        if(voteKeysD.length == 0){
//            Menu.select("You have no votings yet", "", [
//                MenuItem("return to previous menu", "", tvm.functionId(premenu)),
//                MenuItem("Quit", "", 0)
//                ]);
//        }else{
//            MenuItem[] m_menu;
//            for(uint8 i = 0; i < voteKeysD.length; i++){
//
//                uint256 curK = voteKeysD[i];
//
//                VoteD cp = voteD[curK];
//                if(cp.actionType == 2){
//
//
//
//                    string curVdata = format("======\nvotingID: {}\ninitiator:{}\nstartTime: {}\nduration: {}\nyesCount: {}\nnoCount: {}",curK,cp.initiator, cp.startTime, cp.duration,cp.yesCount,cp.noCount);
//                    m_menu.push(MenuItem(curVdata,"",tvm.functionId(touchCurVotinglaunched)));
//                }
//
//            }
//            m_menu.push(MenuItem("Back to voting list menu launched", "", tvm.functionId(preInd)));
//            Menu.select("Choose voting:", "",m_menu);
//        }
//    }
///*
//    menu specifically for launched deaudits
//*/
//    function touchCurVotinglaunched(uint32 index) public {
//        votingID = voteKeysD[index];
//        Menu.select("voting options launched", "", [
//            MenuItem("show deauditData", "",tvm.functionId(showDADdata)),
//            MenuItem("vote for", "",tvm.functionId(voteFor)),
//            MenuItem("vote against", "",tvm.functionId(voteAgainst)),
//            MenuItem("result vote", "", tvm.functionId(resultVote)),
//            MenuItem("return to voting list menu", "", tvm.functionId(premenu)),
//            MenuItem("Quit", "", 0)
//            ]);
//    }

    function showDADdata(uint32 index) public {
        VoteD cr = voteD[votingID];
        string completes;
        if(cr.completed == true){
            completes = "true";
        }else{
            completes = "false";
        }
            Terminal.print(0,format("======\ncr.initiator: {}\ncr.startTime: {}\ncr.duration: {}\ncr.vcms: {}\ncr.yesCount: {}\ncr.noCount: {}\ncr.actionType: {}\ncr.completed: {}",cr.initiator,cr.startTime,cr.duration,cr.vcms,cr.yesCount,cr.noCount,cr.actionType,completes));

        toungAllV(indexCur);

    }

/*
    menu specifically for launched deaudits
*/
    function voteFor(uint32 index) public {
        optional(uint256) pubkey;
        IParticipant(m_participant).voteFor{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : 0,
        onErrorId : tvm.functionId(someError)
        }(votingID,GRAMS_INIT_VOTE);

    votingListMenu();
    }
    function voteAgainst(uint32 index) public {
        optional(uint256) pubkey;
        IParticipant(m_participant).voteAgainst{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : 0,
        onErrorId : tvm.functionId(someError)
        }(votingID,GRAMS_INIT_VOTE);

    votingListMenu();
    }
    function resultVote(uint32 index) public {
        optional(uint256) pubkey;
        IParticipant(m_participant).resultVote{
        abiVer : 2,
        extMsg : true,
        sign : true,
        pubkey : pubkey,
        time : uint64(now),
        expire: 0x123,
        callbackId : 0,
        onErrorId : tvm.functionId(someError)
        }(votingID,GRAMS_RESULT);

    votingListMenu();
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
        name = "Radiance Voting Audit DeBot ACTM_votingList";
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
