import { credits } from '/script.js';
import { scrap } from '/script.js';
import { clickPow } from '/script.js';

var c = document.getElementById('credits');
var s = document.getElementById('scrap');

function collectScrap() {
    scrap += clickPow;
    s.innerText = 'S: ' + scrap;
}