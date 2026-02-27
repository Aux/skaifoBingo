var bingoListNuzlocke;
var nuzlockeTiles;

function Nuzlocke() {

    nuzlockeTiles = [
        'nuzlocke 1',
        'nuzlocke 2',
        'nuzlocke 3',
        'nuzlocke 4',
        'nuzlocke 5',
        'nuzlocke 6',
        'nuzlocke 7',
        'nuzlocke 8',
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
        'nuzlocke 20'
    ];

    bingoListNuzlocke = [..._.sample(nuzlockeTiles, 24)];
    console.log('bingoListNuzlocke loaded ' + bingoListNuzlocke.length  + ' tiles');
}