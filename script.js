var sp = document.getElementById('sidePanel');
var spb = document.getElementById('sidePanelButton');
var buttonPressed = false;

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