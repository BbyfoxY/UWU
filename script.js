var sp = document.getElementById('sidePanel');
var spb = document.getElementById('sidePanelButton');
var buttonPressed = false;

var c = document.getElementsByClassName('credits');
var s = document.getElementsByClassName('scrap');

function sidePanel() {
	if (buttonPressed === false) {
		sp.style.display = 'block';
		spb.style.float = 'none';
		spb.style.left = 20 + '%';
		buttonPressed = true;
	} else if (buttonPressed === true) {
		sp.style.display = 'none';
		spb.style.float = 'left';
		spb.style.left = 0;
		buttonPressed = false;
	}
}

function load() {
	if (localStorage.getItem('c') === null) {
		localStorage.setItem('c', 0);
	}
	if (localStorage.getItem('s') === null) {
		localStorage.setItem('s', 0);
	}
	if (localStorage.getItem('cp') === null) {
		localStorage.setItem('cp', 1);
	}
	console.log('sus');
}

load();