var sp = document.getElementById('sidePanel');
var spb = document.getElementById('sidePanelButton');
var buttonPressed = false;

var c = document.getElementById('credits');
var s = document.getElementById('scrap');
export var credits = 0;
export var scrap = 0;
export var clickPow = 1;

function sidePanel() {
	if (buttonPressed === false) {
		sp.style.display = 'block';
		spb.style.float = 'none';
		spb.style.left = 15 + '%';
		buttonPressed = true;
	} else if (buttonPressed === true) {
		sp.style.display = 'none';
		spb.style.float = 'left';
		spb.style.left = 0;
		buttonPressed = false;
	}
}
window.sidePanel = sidePanel;

function save() {
	localStorage.setItem('c', credits);
	localStorage.setItem('s', scrap);
	localStorage.setItem('cp', clickPow);
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
	c.textContent = 'C: ' + localStorage.getItem('c');
	s.textContent = 'S: ' + localStorage.getItem('s');
	credits = localStorage.getItem('c');
	scrap = localStorage.getItem('s');
	clickPow = localStorage.getItem('cp');
}

setInterval(() => {
	save();
}, 250);

load();