import { credits } from '/UWU/script.js';
import { scrap } from '/UWU/script.js';
import { clickPow } from '/UWU/script.js';

var c = document.getElementById('credits');
var s = document.getElementById('scrap');

function collectScrap() {
    scrap += clickPow;
    s.innerText = 'S: ' + scrap;
}
<<<<<<< HEAD
window.collectScrap = collectScrap;
=======
>>>>>>> 07bd7061b5ad3925ffce10fe64d91a158ba45ceb
