var bingoListNuzlocke;
var nuzlockeTiles;

function Nuzlocke() {

    nuzlockeTiles = [
        'A pokemon dies',
        'A pokemon dies in one hit',
        'A legendary pokemon where it shouldn\'t be',
        'A custom sprite does 👁️👄👁️',
        'A custom sprite stunlocks Skai for more than 10 seconds',
        'Skai defeats a gym leader',
        'A pokemon is revived with Sacred Ash',
        'Vore themed pokemon',    // Suggested by HydroChromatic
        'Skai finds a Sacred Ash',    // Suggested by HydroChromatic
        'nuzlocke 9',
        'nuzlocke 10',
        'nuzlocke 11',
        'nuzlocke 12',
        'nuzlocke 13',
        'nuzlocke 14',
        'nuzlocke 15',
        'nuzlocke 16',
        'nuzlocke 17',
        'nuzlocke 18',
        'nuzlocke 19',
        'nuzlocke 20',
        'nuzlocke 21',
        'nuzlocke 22',
        'nuzlocke 23',
        'nuzlocke 24',
        'nuzlocke 25',
        'nuzlocke 26',
        'nuzlocke 27',
        'nuzlocke 28',
        'nuzlocke 29',
        'nuzlocke 30',
    ];

    bingoListNuzlocke = [..._.sample(nuzlockeTiles, 24)];
    console.log('bingoListNuzlocke loaded ' + bingoListNuzlocke.length  + ' tiles');
}
