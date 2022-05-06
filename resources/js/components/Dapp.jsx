import React from "react";
import { ethers } from "ethers";


const contractAddress = "0x24F7C2dC6e8910d4134753C34a5fbBe820A1A9E0";
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mood",
				"type": "string"
			}
		],
		"name": "setMood",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMood",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


let moodContract;
let signer;

const getMood = async () => {
	// const moodPromise = moodContract.getMood();
	// const currentMood = moodPromise();
	// console.log( null);
	console.log("ok");

	// return new Promise((solve, reject) => solve("OK"));

};
const setMood = () => {

};
const FormContext = () => {
	
	React.useEffect( () => {
		console.log("OKKK");
	}, []);

	return (
		<>
			<label htmlFor="mood">Input Mood</label> &nbsp;
			<input type="text" id="mood" />
			<button onClick={async() => { await getMood()}}>Get Mood</button>
			<button onClick={setMood}>Set Mood</button>
		</>
	)
}

const Dapp = () => {
	let mounted = 0;
	React.useEffect( () => {
		if(mounted) return;

		document.title += " - Blockchain";

		return () => mounted = 1;
	}, []);

	return(
		<>
			<h1>Testong! Cek Blockchain</h1>
			<FormContext />
		</>
	)
};


export default Dapp;