import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();
warmup1();

function warmup1() {
	console.log("Exercise week 1");
	const button1a = document.querySelector("#button-1a");
	button1a.addEventListener("click", function () {
		console.log("ok");
		document.querySelector("#content-1").innerHTML =
			"<p>Hallo, dit is de oefening van Tine<p/>";
	});
	document.querySelector("#button-1b").addEventListener("click", function () {
		document.querySelector("#section-1").style.backgroundColor = "lightblue";
	});
	document.querySelector("#button-1c").addEventListener("click", function () {
		const newText = document.createElement("h1");
		newText.id = "content-1";
		newText.className = "content";
		newText.innerHTML = <h1>Ik ben er klaar voor</h1>;
		document.querySelector("#content-1").append(newText);
	});
}

function warmup2() {
	console.log("Exercise week 2");
	const scores = getRandomScores(10);
}

function warmup3() {
	let student = getStudentJSON();
}

function warmup4() {
	let main, min, max;
}

function warmup5() {}
