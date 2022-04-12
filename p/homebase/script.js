import { credits } from '/UWU/script.js';
import { scrap } from '/UWU/script.js';
import { clickPow } from '/UWU/script.js';

var c = document.getElementById('credits');
var s = document.getElementById('scrap');

function collectScrap() {
    scrap += clickPow;
    s.innerText = 'S: ' + scrap;
}
