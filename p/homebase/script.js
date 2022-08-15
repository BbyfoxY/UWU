import { credits, scrap, clickPow, inClickPowPrice, changeVar, compactNum } from '/script.js';

var c = document.getElementById('creditsV');
var s = document.getElementById('scrapV');

var o1 = document.querySelectorAll('.o1');
o1.forEach(o1e => {
    o1e.addEventListener('click', () => {
        sellScrap();
    });
});

var o4 = document.querySelectorAll('.o4');
o4.forEach(o4e => {
    o4e.addEventListener('click', () => {
        inClickPow();
    });
});

var o5 = document.querySelectorAll('.o5');
o5.forEach(o5e => {
    o5e.addEventListener('click', () => {
        collectScrap();
    });
});

function sellScrap() {
    let amtToSell = prompt('How much scrap would you like to sell? (EX: 25% or 50% or 9% or 100 or 1000000 etc.) (NOT: 1M or 1Octillion etc.)');
    let amtLeft;
    let profit;
    if (parseInt(amtToSell) === null && amtToSell.endsWith('%') === false || parseInt(amtToSell) === null || parseInt(amtToSell) < 1 || parseInt(amtToSell) === 0 || parseInt(amtToSell) > parseInt(scrap)) {
        alert('Please input a valid amount of scrap!');
    } else if (parseInt(amtToSell) !== null && amtToSell.endsWith('%') === false && parseInt(amtToSell) <= parseInt(scrap)) {
        amtToSell = Math.floor(parseInt(amtToSell));
        amtLeft = parseInt(scrap) - amtToSell;
        profit = Math.ceil(amtToSell / 2);
        changeVar('scrap', amtLeft);
        changeVar('credits', parseInt(credits) + profit);
        s.textContent = compactNum(parseInt(scrap));
        c.textContent = compactNum(parseInt(credits));
        alert('Credits earned: ' + compactNum(profit));
    } else {
        amtToSell = parseInt(amtToSell.slice(0, -1));
        amtToSell = parseInt(scrap) * amtToSell / 100;
        amtToSell = Math.floor(amtToSell);
        amtLeft = parseInt(scrap) - amtToSell;
        profit = Math.ceil(amtToSell / 2);
        changeVar('scrap', amtLeft);
        changeVar('credits', parseInt(credits) + profit);
        s.textContent = compactNum(parseInt(scrap));
        c.textContent = compactNum(parseInt(credits));
        alert('Credits earned: ' + compactNum(profit));
    }
}

function inClickPow() {
    let amtLeft;
    if (parseInt(credits) >= parseInt(inClickPowPrice)) {
        amtLeft = parseInt(credits) - parseInt(inClickPowPrice);
        changeVar('credits', amtLeft);
        changeVar('clickPow', parseInt(clickPow) * 100);
        changeVar('inClickPowPrice', parseInt(inClickPowPrice) * 1000);
        c.textContent = compactNum(parseInt(credits));
        alert('Increased Click-Pow to: ' + compactNum(parseInt(clickPow)));
    } else {
        alert('You do not have enough credits to increase your Click-Pow. Price: ' + compactNum(parseInt(inClickPowPrice)));
    }
}

function collectScrap() {
    changeVar('scrap', parseInt(scrap) + parseInt(clickPow));
    s.textContent = compactNum(parseInt(scrap));
}