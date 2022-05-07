// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

//eslint-ignore
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract WorldOfJamette is ERC721 {
	constructor() ERC721("WorldOfJamette", "JMT2"){
		_mint(msg.sender, 1);
	}
}