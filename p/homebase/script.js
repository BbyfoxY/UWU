import { credits } from '/UWU/script.js';
import { scrap } from '/UWU/script.js';
import { clickPow } from '/UWU/script.js';
import { changeVar } from '/UWU/script.js';

var c = document.getElementById('credits');
var s = document.getElementById('scrap');
var o5 = document.getElementsByClassName('o5');

o5.addEventListener('click', () => {
    collectScrap();
});

function collectScrap() {
    changeVar('scrap', scrap + clickPow);
    s.innerText = 'S: ' + scrap;
}
