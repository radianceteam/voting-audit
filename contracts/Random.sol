pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;


contract Random {


	constructor() public {
	}


	modifier alwaysAccept {
		tvm.accept();
		_;
	}

	function isOwner() public view alwaysAccept returns (bool is_owner) {
		return msg.pubkey() == tvm.pubkey();
	}

	modifier onlyOwner() {
		require(isOwner());
		tvm.accept();
		_;
	}

	// Function to receive plain transfers.
	receive() external {
	}

	function setOwner(address _owner) public onlyOwner {
		owner = _owner;
	}

	function sendTransaction(address dest, uint128 value, bool bounce) public view onlyOwner {
		dest.transfer(value, bounce, 3);
	}

	function createTokenId() public view onlyOwner returns (uint256) {
		rnd.shuffle();
		return rnd.getSeed();
	}

	function issueToken(bytes nameHex, uint256 duration, uint256 qty, address holder) public onlyOwner returns (bool issue_status, uint256 token_id) {
		uint256 tokenID = createTokenId();
		AuthToken at = authTokens[tokenID];
		if (at.activationTime > 0){
			issue_status = false;
			token_id = tokenID;
		} else {
			at.nameHex = nameHex;
			at.activationTime = uint256(now);
			at.duration = duration;
			address[] holderArr;
			uint256[] holderIndexesArr;
			uint256 count = 0;
			repeat(qty) {
				holderArr.push(holder);
				holderIndexesArr.push(count);
				count++;
			}
			at.holders = holderArr;
			at.hIndexes[holder] = holderIndexesArr;
		}
		authTokens[tokenID] = at;
		authTokensKeys.push(tokenID);
		issue_status = true;
		token_id = tokenID;
	}

	function checkAddress(address _address) public pure alwaysAccept returns (bool) {
		return !_address.isStdZero() && !_address.isNone() && _address.isStdAddrWithoutAnyCast();
	}

	function expiryTime(uint256 a, uint256 b) public pure returns (uint256) {
		return a + b;
	}

	function checkExpiry(uint256 ad, uint256 d, uint256 nts) public pure returns (bool) {
		return expiryTime(ad,d) - nts > 0;
	}

	function registration(uint256 tokenId) public alwaysAccept override {
		uint256 timestamp = uint256(now);
		AuthToken at = authTokens[tokenId];
		address nextHolder = msg.sender;
		if (checkAddress(nextHolder) && checkExpiry(at.activationTime, at.duration, timestamp) && !(at.hIndexes[owner].length < 1) && (at.hIndexes[nextHolder].length < 1)) {
			uint256 lastIndex = at.hIndexes[owner].length -1;
			at.holders[at.hIndexes[owner][lastIndex]] = nextHolder;
			at.hIndexes[nextHolder].push(at.hIndexes[owner][lastIndex]);
			at.hIndexes[owner].pop();
			authTokens[tokenId] = at;
			emit Registration(nextHolder, true);
		} else {
			emit Registration(nextHolder, false);
		}
	}

	function sendTokens(uint256 tokenId, uint256 qty, address nextHolder) public alwaysAccept override {
		uint256 timestamp = uint256(now);
		AuthToken at = authTokens[tokenId];
		address holder = msg.sender;
		if (checkAddress(holder) && checkExpiry(at.activationTime, at.duration, timestamp) && !(at.hIndexes[holder].length < qty)) {
			repeat(qty) {
				uint256 lastIndex = at.hIndexes[holder].length -1;
				at.holders[at.hIndexes[holder][lastIndex]] = nextHolder;
				at.hIndexes[nextHolder].push(at.hIndexes[holder][lastIndex]);
				at.hIndexes[holder].pop();
			}
			authTokens[tokenId] = at;
			emit SendTokens(holder, nextHolder, true, qty);
		} else {
			emit SendTokens(holder, nextHolder, false, qty);
		}
	}
