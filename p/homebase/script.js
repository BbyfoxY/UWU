import { credits } from '/script.js';
import { scrap } from '/script.js';
import { clickPow } from '/script.js';
import { changeVar } from '/script.js';

var c = document.querySelector('#credits');
var s = document.querySelector('#scrap');

document.querySelector('#o5').addEventListener('click', collectScrap());

function collectScrap() {
    changeVar('scrap', scrap + clickPow);
    s.innerText = 'S: ' + scrap;
}
