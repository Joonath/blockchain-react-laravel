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
let provider;

const getMood = async() => {
	const moodPromise = moodContract.getMood();
	let currentMood = await moodPromise;

	// moodPromise.then( (v) => {
	// 	currentMood = v;
	// });

	console.log(currentMood);
	// console.log("ok");

	// return new Promise((solve, reject) => solve("OK"));

};
const setMood = async () => {
	const inputEl = document.getElementById("mood").value;
	const moodPromise = moodContract.setMood(inputEl);
	await moodPromise;

};
const FormContext = () => {
	
	React.useEffect( () => {
		console.log("OKKK");
	}, []);

	return (
		<>
			<label htmlFor="mood">Input Mood</label> &nbsp;
			<input type="text" id="mood" />
			<button onClick={async() => await getMood()}>Get Mood</button>
			<button onClick={async() => await setMood()}>Set Mood</button>
		</>
	)
}

const Dapp = () => {
	let mounted = 0;
	React.useEffect( () => {
		if(mounted) return;

		provider = new ethers.providers.Web3Provider(window.ethereum, "ropsten");
		provider.send("eth_requestAccounts", []).then( () => {
			provider.listAccounts().then( (acc) => {
				signer = provider.getSigner(acc[0]);
				moodContract = new ethers.Contract(
					contractAddress,
					contractABI,
					signer
				);
			});
		});

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