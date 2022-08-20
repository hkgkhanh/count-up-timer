let startTime;
let currTime;
let timeBegin;
let timeEnd;
let useMilli = 0;

function startTimer() {
	timeEnd = translateTime(document.getElementById("getTimeInput").value);
	startTime = new Date();
	timeBegin = setInterval(updateTimer, 1);
}

function updateTimer() {
	currTime = new Date();
	let time = currTime.getTime() - startTime.getTime();

	document.getElementById("timerDiv").innerHTML = pretty(time);

	if (time >= timeEnd) {
		clearInterval(timeBegin);
		document.getElementById("timerDiv").innerHTML = pretty(timeEnd);
	}
}

function resetTimer() {
	document.getElementById("timerDiv").innerHTML = useMilli == 1 ? "0.000" : "0.00";
}



function pretty(time) {
	if (time < 0) {return "DNF";}
 	time = Math.round(time / (useMilli == 1 ? 1 : 10));

 	var bits = time % (useMilli==1 ? 1000 : 100);
 	time = (time - bits) / (useMilli==1 ? 1000 : 100);

 	var secs = time % 60;
 	var mins = ((time - secs) / 60) % 60;
 	var hours = (time - secs - 60 * mins) / 3600;
 	var s = "" + bits;

 	if (bits < 10) {s = "0" + s;}
 	if (bits < 100 && useMilli == 1) {s = "0" + s;}
 	s = secs + "." + s;

 	if (secs < 10 && (mins > 0 || hours > 0)) {s = "0" + s;}
 	if (mins > 0 || hours > 0) {s = mins + ":" + s;}
 	if (mins < 10 && hours > 0) {s = "0" + s;}
 	if (hours > 0) {s = hours + ":" + s;}
 	return s;
}


function toggleMilli() {
 	useMilli = 1 - useMilli;

 	document.getElementById("timerDiv").innerHTML = useMilli == 1 ? "0.000" : "0.00";
}


function translateTime(text) {
	let enterVal = text;

	if (!contain(enterVal, ":") || !contain(enterVal, ".")) {
		alert("invalid input");
		return;
	}

	let minute = parseInt(enterVal.substr(0, enterVal.indexOf(":")));
	let milli = Math.round(parseFloat(enterVal.substr(enterVal.indexOf(":") + 1)) * 1000);

	return minute * 60000 + milli;
}


function contain(str, char) {
	let have = false;

	for (let i = 0; i < str.length; i++) {
		if (str[i] == char) {
			have = true;
			break;
		}
	}
	return have;
}


function updateTextColor() {
	document.getElementById("timerDiv").style.color = document.getElementById("textColorInput").value;
}

function updateBgColor() {
	document.getElementById("timerDiv").style.backgroundColor = document.getElementById("bgColorInput").value;
}

function updateFont() {
	document.getElementById("timerDiv").style.fontFamily = document.getElementById("fontSelect").value;
}